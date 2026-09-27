const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const L = require('../engine/lib.js');
const S = require('../engine/schedule.js');
const { checkProject } = require('../engine/check.js');
const C = require('../project/catalog.js');
const { IDS, load } = require('../project/index.js');
const project = require('../project/project.js');
const D = require('../project/design.js');
const PHOTOS = require('../media/photos.js');
const CMSNL = require('../project/cmsnl.js');

const dir = path.join(__dirname, '..', 'project');
const reg = L.byId(load());
const run = () => S.run(project.root, reg, C, L, project.calendar);
// The strip-down jobs, in the order of the photos that show them.
const STRIP = [...new Set(PHOTOS.map((p) => p.job))];

test('the index lists every procedure file and nothing else', () => {
  const others = ['catalog', 'cmsnl', 'design', 'index', 'project'];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).filter((f) => !others.includes(f)).sort();
  assert.deepEqual([...IDS].sort(), files);
});

test('the project keeps every rule the engine checks', () => {
  assert.deepEqual(checkProject({ reg, cat: C, root: project.root, params: project.params(), parts: project.parts(), sections: project.sections() }), []);
});

test('every job is scheduled, and none runs past its window', () => {
  const r = run();
  assert.deepEqual(r.unfinished, []);
  assert.deepEqual(r.late, []);
  assert.equal(r.dateOf(0), D.START);
});

test('each photo shows a job the plan runs, and the photos run in the order of the work', () => {
  const r = run();
  let last = -1, lastJob = null;
  for (const p of PHOTOS) {
    assert.ok(r.jobs.some((j) => j.id === p.job), `${p.file} shows ${p.job}, which the plan does not run`);
    const i = r.jobs.findIndex((j) => j.id === p.job);
    assert.ok(last < 0 || p.job === lastJob || r.done[i] > r.done[last], `${p.file}: ${p.job} finishes on day ${r.done[i]}, not after ${lastJob} in the photo before it`);
    last = i; lastJob = p.job;
  }
});

test('the rebuild waits for its start date, and riding waits for the roads', () => {
  const r = run();
  const first = new Map();
  r.days.forEach((d) => d.did.forEach((x) => { if (!first.has(x.id)) first.set(x.id, d.day); }));
  const history = new Set(STRIP);
  for (const [id, day] of first) {
    if (history.has(id)) assert.ok(day < D.dayOf(D.RESUME), `${id} is history but runs on ${r.dateOf(day)}`);
    else assert.ok(day >= D.dayOf(D.RESUME), `${id} starts ${r.dateOf(day)}, before work resumes on ${D.RESUME}`);
  }
  assert.ok(first.get('ride.break-in') >= D.dayOf(D.RIDING), `break-in starts ${r.dateOf(first.get('ride.break-in'))}`);
  assert.ok(first.get('engine.top-end') - r.finish('engine.bore') >= 14,
    `the top end starts day ${first.get('engine.top-end')}, ${first.get('engine.top-end') - r.finish('engine.bore')} days after the cylinders go to the machine shop`);
});

test('at the end of the strip-down the bike stands as the last photos show it', () => {
  const r = run();
  const tl = S.partTimeline(r, reg);
  const day = r.finish(STRIP[STRIP.length - 1]);
  const state = Object.fromEntries(Object.keys(D.PARTS).map((id) => [id, tl.stateOn(id, day)]));
  assert.deepEqual(state, {
    'top-end': 'off', 'bottom-end': 'off', gearbox: 'off', clutch: 'off', autolube: 'off', exhaust: 'off', 'case-covers': 'off',
    carbs: 'off', 'air-cleaner': 'original', tank: 'off', ignition: 'off', charging: 'original', wiring: 'original', lights: 'off',
    frame: 'original', 'front-end': 'original', 'rear-suspension': 'original', 'front-wheel': 'original', 'rear-wheel': 'original',
    chain: 'original', controls: 'original', 'main-stand': 'original', seat: 'off', 'side-covers': 'off', stand: 'restored',
  });
});

test('by the end every part is rebuilt and the bike is off the stand', () => {
  const r = run();
  const tl = S.partTimeline(r, reg);
  const end = Math.max(...r.done);
  for (const id of Object.keys(D.PARTS)) assert.equal(tl.stateOn(id, end), id === 'stand' ? 'off' : 'restored', id);
  assert.equal(r.dateOf(end), r.dateOf(r.finish(project.root)));
});

test('what the rebuild costs is the catalog price of everything bought', () => {
  const n = L.needs(project.root, reg, C);
  const expected = n.boughtTools.reduce((t, id) => t + C.TOOLS[id].cost, 0)
    + n.boughtMaterials.reduce((t, m) => t + m.qty * C.MATERIALS[m.id].cost, 0);
  assert.ok(Math.abs(n.cost - expected) < 1e-9);
  // The parts-sourcing guide puts a full rebuild at roughly $800 to $1,500 in parts.
  assert.ok(n.cost > 800 && n.cost < 1500, `cost $${n.cost.toFixed(0)}`);
  for (const m of n.inputs) assert.equal(C.MATERIALS[m.id].source, 'bought', `${m.id} is not bought`);
});

test('every spec a procedure quotes is in the spec reference', () => {
  const ref = fs.readFileSync(path.join(__dirname, '..', 'docs', 'YL1_Spec_Reference.md'), 'utf8');
  for (const k of ['spec.floatLevel', 'spec.pilotTurns', 'spec.plugGap', 'spec.pointsGap', 'spec.ringGap', 'spec.bigEndLimit', 'spec.pumpClearance']) {
    const v = String(D.params[k]).split('–')[0];
    assert.ok(ref.includes(v), `${k} = ${D.params[k]} is not in docs/YL1_Spec_Reference.md`);
  }
});

test('the frame is empty when its rust is treated', () => {
  const r = run();
  const tl = S.partTimeline(r, reg);
  const start = r.days.find((d) => d.did.some((x) => x.id === 'frame.treat')).day;
  for (const id of ['front-end', 'front-wheel', 'rear-wheel', 'rear-suspension', 'bottom-end', 'gearbox', 'wiring', 'charging', 'tank', 'seat']) {
    assert.equal(tl.stateOn(id, start - 1), 'off', `${id} is on the frame when frame.treat starts on ${r.dateOf(start)}`);
  }
});

test('each strip-down job starts after the one before it is finished, so the bike can be seen after every step', () => {
  const r = run();
  const ids = STRIP;
  for (let k = 1; k < ids.length; k++) {
    const start = r.days.find((d) => d.did.some((x) => x.id === ids[k])).day;
    assert.ok(start > r.finish(ids[k - 1]), `${ids[k]} starts on day ${start}, the day ${ids[k - 1]} finishes`);
  }
});

test('every part of the bike sits in a section and has its own plan, and every open job belongs to a part', () => {
  for (const [id, part] of Object.entries(D.PARTS)) {
    assert.ok(part.section in D.SECTIONS, `${id} is in no section`);
    assert.ok(reg.get(`part.${id}`), `${id} has no plan`);
  }
  const inParts = new Set(Object.keys(D.PARTS).flatMap((id) => L.trace(`part.${id}`, reg).map((x) => x.id)));
  for (const p of reg.values()) if (p.status === 'open') assert.ok(inParts.has(p.id), `${p.id} is open but belongs to no part`);
});

test('every row of the Yamaha parts list sits under a part of the design, and every part but the work stand has rows', () => {
  assert.equal(CMSNL.length, 27);
  const rows = CMSNL.flatMap((d) => d.rows.map((r) => ({ ...r, diagram: d.code })));
  assert.equal(rows.length, 800);
  for (const r of rows) assert.ok(r.part in D.PARTS, `${r.diagram} ${r.ref} ${r.name} is under "${r.part}", which is not a part`);
  for (const id of Object.keys(D.PARTS)) {
    if (id === 'stand') continue;
    assert.ok(rows.some((r) => r.part === id), `no row of the parts list is under ${id}`);
  }
  assert.deepEqual(project.components('part.carbs').map((r) => r.diagram), Array(project.components('part.carbs').length).fill('B-03'));
  assert.equal(project.components('plan.yl1'), null);
});

test('rows that are a choice between parts are marked, and the two generators are marked by model', () => {
  const rows = CMSNL.flatMap((d) => d.rows.map((r) => ({ ...r, diagram: d.code })));
  const jets = rows.filter((r) => r.diagram === 'B-03' && /JET,\s*MAIN/.test(r.name));
  assert.ok(jets.length > 1 && jets.every((r) => r.oneOf), 'the main jets are one of several');
  assert.ok(rows.filter((r) => /ALTERNATE/.test(r.notes)).every((r) => r.oneOf));
  assert.ok(CMSNL.find((d) => d.code === 'B-08').rows.every((r) => r.variant === 'YL1'));
  assert.ok(CMSNL.find((d) => d.code === 'B-09').rows.every((r) => r.variant === 'YL1E'));
});
