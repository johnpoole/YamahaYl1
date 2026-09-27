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

const dir = path.join(__dirname, '..', 'project');
const reg = L.byId(load());
const run = () => S.run(project.root, reg, C, L, project.calendar);

test('the index lists every procedure file and nothing else', () => {
  const others = ['catalog', 'design', 'index', 'project'];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).filter((f) => !others.includes(f)).sort();
  assert.deepEqual([...IDS].sort(), files);
});

test('the project keeps every rule the engine checks', () => {
  assert.deepEqual(checkProject({ reg, cat: C, root: project.root, params: project.params(), parts: project.parts() }), []);
});

test('every job is scheduled, and none runs past its window', () => {
  const r = run();
  assert.deepEqual(r.unfinished, []);
  assert.deepEqual(r.late, []);
  assert.equal(r.dateOf(0), D.START);
});

test('each strip-down session falls on the day its photos were taken', () => {
  const r = run();
  const sessions = [...reg.values()].filter((p) => /^plan\.day-/.test(p.id));
  assert.equal(sessions.length, 9);
  const photoDates = new Set(PHOTOS.map((p) => p.date));
  for (const p of sessions) {
    const date = p.id.slice('plan.day-'.length);
    assert.equal(p.window.from, D.dayOf(date), `${p.id} window`);
    assert.equal(r.dateOf(r.finish(p.id)), date, `${p.id} finished on ${r.dateOf(r.finish(p.id))}`);
    assert.ok(photoDates.has(date), `no photo taken on ${date}`);
  }
});

test('the rebuild waits for its start date, and riding waits for the roads', () => {
  const r = run();
  const first = new Map();
  r.days.forEach((d) => d.did.forEach((x) => { if (!first.has(x.id)) first.set(x.id, d.day); }));
  const history = new Set();
  const walk = (id) => { history.add(id); for (const s of reg.get(id).steps) if (s.call) walk(s.call); };
  walk('plan.strip-down');
  for (const [id, day] of first) {
    if (history.has(id)) assert.ok(day < D.dayOf(D.RESUME), `${id} is history but runs on ${r.dateOf(day)}`);
    else assert.ok(day >= D.dayOf(D.RESUME), `${id} starts ${r.dateOf(day)}, before work resumes on ${D.RESUME}`);
  }
  assert.ok(first.get('ride.break-in') >= D.dayOf(D.RIDING), `break-in starts ${r.dateOf(first.get('ride.break-in'))}`);
  assert.ok(first.get('engine.top-end') - r.finish('engine.bore') >= 14,
    `the top end starts day ${first.get('engine.top-end')}, ${first.get('engine.top-end') - r.finish('engine.bore')} days after the cylinders go to the machine shop`);
});

test('on 10 January 2025 the bike stands as the last photos show it', () => {
  const r = run();
  const tl = S.partTimeline(r, reg);
  const day = D.dayOf('2025-01-10');
  const state = Object.fromEntries(Object.keys(D.PARTS).map((id) => [id, tl.stateOn(id, day)]));
  assert.deepEqual(state, {
    frame: 'original', 'front-end': 'original', headlight: 'off', 'front-wheel': 'original', 'rear-wheel': 'original',
    'rear-suspension': 'original', engine: 'off', 'top-end': 'off', 'magneto-cover': 'off', carbs: 'off',
    exhaust: 'off', electrics: 'original', tank: 'off', seat: 'off', 'side-covers': 'off', stand: 'restored',
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
  for (const id of ['front-end', 'front-wheel', 'rear-wheel', 'rear-suspension', 'engine', 'electrics', 'tank', 'seat']) {
    assert.equal(tl.stateOn(id, start - 1), 'off', `${id} is on the frame when frame.treat starts on ${r.dateOf(start)}`);
  }
});
