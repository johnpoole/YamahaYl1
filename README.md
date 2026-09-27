# Yamaha YL1 rebuild

The rebuild of a 1966–1967 Yamaha YL1 Twin Jet 100, engine L1-47603, written as procedures and
shown in 3D on any day of the work.

| Folder | What is in it |
|---|---|
| `engine/` | The procedures engine: checks, paper runs, costs, the day-by-day schedule and the Instructions page. See [engine/README.md](engine/README.md). |
| `project/` | The YL1 as a project for the engine: the sections, parts and specs (`design.js`), the tools and parts (`catalog.js`), Yamaha's parts list (`cmsnl.js`), and one file per procedure. |
| `tools/` | `cmsnl.py`, which rebuilds `project/cmsnl.js` from the parts list at CMSNL. |
| `bike/` | The 3D bike with the day slider and the photos. |
| `media/photos/` | The strip-down photos, resized to 1600 px. `media/photos.js` lists them with their captions. |
| `docs/` | The spec reference, the requirements, the backlog and the best-practice guides. |
| `tests/` | Engine, project and page tests. |

## The plan

The plan is built like the bike. `plan.yl1` calls one plan per section of the bike, each section
calls one plan per part, and each part plan holds the jobs done to that part: take it off, assess
it, rebuild it, put it back. Jobs that span parts sit in their section. Where a part still needs
work written, it has an open job that says what needs deciding. Each part's page lists its rows
from Yamaha's parts list for the YL1, with the order codes. Jobs in different parts run side
by side, and `after` holds a job until the jobs it needs are done.

## The timeline

The strip-down runs in the order of its photos, and each photo in `media/photos.js` names the
job it shows. The rest of the work runs from 3 October 2026 on four
hours each weekend day and an hour and a half each weekday evening. Break-in waits for
1 May 2027. Hours and prices are estimates.

Each procedure that takes a part off lists it in `removes`, and each that puts it back lists it in
`builds`. The bike page shows a part as found until a job takes it off, hides it while it is off,
and shows it rebuilt once the job that puts it back is finished.

## Run it

The pages load their scripts from the folder, so serve it rather than opening the files:

```bash
python -m http.server 8765
```

Then open http://localhost:8765/.

## Test it

```bash
node --test tests/
```

## Sources

The service manual (`2Cyl2StrMan.pdf`) and its OCR text stay in the Yamaha_YL1 repo. The spec
values the procedures quote come from `docs/YL1_Spec_Reference.md`, which cites the manual's pages.

`engine/` is a copy of the engine in bushcraft-rocket-mass-stove at commit 9800e1e, with
`removes`, `after` and `partTimeline` added.
