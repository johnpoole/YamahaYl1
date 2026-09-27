"""Build project/cmsnl.js from the Yamaha parts list for the YL1 at CMSNL.

Fetches every diagram of the YL1 Twinjet 1966-1967 USA parts list that fits this bike, a YL1, reads each row's reference,
order code, name, quantity and notes, and places the row under a part of the design by the
table below. Stops on any row the table does not place.

    python tools/cmsnl.py
"""
import html
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

BASE = 'https://www.cmsnl.com/yamaha-yl1-twinjet-1966-1967-usa_model8301/partslist/'
OUT = Path(__file__).resolve().parent.parent / 'project' / 'cmsnl.js'

# The bike is a YL1, so the YL1E generator diagram, B-09, is left out.
DIAGRAMS = {
    'A-04': 'CRANKCASE', 'A-05': 'CRANKCASE COVER', 'A-06': 'CRANK - PISTON', 'A-08': 'CLUTCH',
    'A-09': 'TRANSMISSION', 'A-11': 'SHIFTER 1', 'A-12': 'SHIFTER 2',
    'B-01': 'KICK', 'B-02': 'AIR CLEANER', 'B-03': 'CARBURETOR', 'B-05': 'MUFFLER', 'B-06': 'OIL PUMP',
    'B-08': 'GENERATOR (YL1)',
    'C-01': 'FRAME', 'C-02': 'REAR ARM AND CHAIN CASE', 'C-03': 'STAND - BRAKE PEDAL', 'C-04': 'HANDLE & FRONT FENDER',
    'C-06': 'FRONT FORK', 'C-08': 'FUEL TANK', 'C-09': 'OIL TANK', 'C-10': 'SEAT - CARRIER',
    'C-11': 'FRONT WHEEL', 'C-12': 'REAR WHEEL',
    'D-02': 'HEAD LAMP - TAIL LAMP', 'D-04': 'ELECTRICAL', 'E-01': 'FLASHER LAMP',
}

# Where each row goes: a diagram maps whole to one part, or reference by reference.
def refs(*spans):
    out = set()
    for s in spans:
        a, _, b = str(s).partition('-')
        out.update(str(n) for n in range(int(a), int(b or a) + 1))
    return out

PLACE = {
    'A-04': [(refs('1-14'), 'bottom-end'), (refs('15-21'), 'top-end')],
    'A-05': [(refs('1-6', '9-12'), 'case-covers'), (refs('7-8'), 'ignition'), (refs('13-15'), 'autolube'), (refs('16-17'), 'gearbox')],
    'A-06': [(refs('1-30'), 'bottom-end'), (refs('31-34'), 'top-end')],
    'A-08': 'clutch', 'A-09': 'gearbox', 'A-11': 'gearbox', 'A-12': 'gearbox', 'B-01': 'gearbox',
    'B-02': 'air-cleaner', 'B-03': 'carbs', 'B-05': 'exhaust', 'B-06': 'autolube',
    'B-08': 'ignition',
    'C-01': [(refs('2-11', '28-34'), 'frame'), (refs('12-16', '19-22'), 'side-covers'), (refs('23'), 'frame'), (refs('24-27'), 'rear-suspension')],
    'C-02': [(refs('2-8'), 'rear-suspension'), (refs('9-11', '91'), 'main-stand'), (refs('12-17'), 'chain')],
    'C-03': 'main-stand',
    'C-04': [(refs('2-10', '31'), 'front-end'), (refs('11-30', '32-40'), 'controls')],
    'C-06': 'front-end', 'C-08': 'tank', 'C-09': 'autolube', 'C-10': 'seat', 'C-11': 'front-wheel',
    'C-12': [(refs('1-25', '27-52'), 'rear-wheel'), (refs('26', '53-54'), 'chain')],
    'D-02': 'lights',
    'D-04': [(refs('1-12'), 'charging'), (refs('13-22', '33-36', '131'), 'wiring'), (refs('23-26'), 'ignition'), (refs('27-32', '37'), 'lights')],
    'E-01': 'lights',
}


def fetch(code):
    req = urllib.request.Request(BASE + code + '.html', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        if r.status != 200:
            raise RuntimeError(f'{BASE}{code}.html answered {r.status}')
        return r.read().decode('utf-8', errors='replace')


def rows_of(code, page):
    m = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.S)
    if not m:
        raise RuntimeError(f'{code}: no __NEXT_DATA__ in the page; the page layout has changed')
    data = json.loads(m.group(1))
    refs_ = data['props']['pageProps']['data']['getCMSPartBlockListing']['edges'][0]['node']['partReferences']
    names = {}
    for card in page.split('class="product-card ')[1:]:
        pid = re.search(r'id="product-(\w+)"', card)
        title = re.search(r'<h3[^>]*title="([^"]*)"', card)
        if pid and title:
            names.setdefault(pid.group(1), set()).add(html.unescape(title.group(1)))
    out = []
    for r in refs_:
        n = names.get(r['partCode'])
        if not n or len(n) != 1:
            raise RuntimeError(f'{code}: part code {r["partCode"]} has names {n}, expected exactly one')
        out.append({'ref': r['reference'], 'code': r['partCode'], 'qty': r['quantity'], 'name': next(iter(n)),
                    'notes': html.unescape(r['notes'] or '').replace('<br>', ' / ').strip()})
    return out


def place(code, row):
    rule = PLACE[code]
    if isinstance(rule, str):
        return rule
    hits = [part for spans, part in rule if row['ref'] in spans]
    if len(hits) != 1:
        raise RuntimeError(f'{code} reference {row["ref"]} ({row["name"]}) is placed under {hits or "no part"}; fix PLACE in tools/cmsnl.py')
    return hits[0]


# This bike's number: engine L1-47603, frame Y33-47603. Some rows name the serial range they fit,
# as "~48845" (up to 48845) or "48846~" (from 48846 on).
BIKE_NUMBER = 47603
UP_TO = re.compile(r'~(\d{5})\b')
FROM = re.compile(r'\b(\d{5})~')


def base_name(name):
    return re.split(r'\s*[~(]|\s+\d', name, maxsplit=1)[0].strip()


def mark_fit(rows):
    """Mark each row whose name gives a serial range as fitting this bike or not, and the rows at the
    same reference with the same name as the other version."""
    for r in rows:
        up, frm = UP_TO.search(r['name']), FROM.search(r['name'])
        if not up and not frm:
            continue
        if up and frm:
            raise RuntimeError(f'{r["name"]}: gives both an upper and a lower serial; read it by hand')
        n = int((up or frm).group(1))
        fits = BIKE_NUMBER <= n if up else BIKE_NUMBER >= n
        span = f'up to {n}' if up else f'from {n} on'
        r['fit'] = f'Fits this bike ({span})' if fits else f'Not for this bike ({span})'
        for other in rows:
            if other is r or other['ref'] != r['ref'] or 'fit' in other:
                continue
            if base_name(other['name']) == base_name(r['name']) and not UP_TO.search(other['name']) and not FROM.search(other['name']):
                other['fit'] = f'Not for this bike (the other version fits, {span})' if fits else f'Fits this bike (the other version is {span})'


def main():
    diagrams = []
    for code, title in DIAGRAMS.items():
        rows = rows_of(code, fetch(code))
        seen = {}
        for r in rows:
            seen[r['ref']] = seen.get(r['ref'], 0) + 1
        for r in rows:
            r['part'] = place(code, r)
            # A reference listed more than once is a choice between parts: one of them fits.
            if seen[r['ref']] > 1 or 'ALTERNATE' in r['notes']:
                r['oneOf'] = True
        mark_fit(rows)
        diagrams.append({'code': code, 'title': title, 'rows': rows})
        print(f'{code} {title}: {len(rows)} rows', file=sys.stderr)
        time.sleep(2)
    body = json.dumps(diagrams, indent=1, ensure_ascii=False)
    OUT.write_text(f"""// The Yamaha parts list for the YL1 Twinjet 1966-1967 USA, diagram by diagram, from
// {BASE}
// Each row names the part of the design it belongs to. Written by tools/cmsnl.py; do not edit by hand.
(function (root) {{
  'use strict';
  const DIAGRAMS = {body};
  if (typeof module !== 'undefined' && module.exports) module.exports = DIAGRAMS;
  else root.YL1PartsList = DIAGRAMS;
}})(this);
""", encoding='utf-8', newline='\n')
    print(f'{sum(len(d["rows"]) for d in diagrams)} rows in {len(diagrams)} diagrams written to {OUT}', file=sys.stderr)


if __name__ == '__main__':
    main()
