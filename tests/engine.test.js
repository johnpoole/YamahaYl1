const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../engine/lib.js');
const S = require('../engine/schedule.js');
const { checkProject } = require('../engine/check.js');
const { assemble } = require('../engine/catalog.js');
const C = require('../project/catalog.js');
const { load } = require('../project/index.js');
const project = require('../project/project.js');

// A fresh, editable copy of the YL1 project to break in different ways.
const fresh = () => {
  const procs = load().map((p) => JSON.parse(JSON.stringify(p)));
  const cat = JSON.parse(JSON.stringify(C));
  return { reg: L.byId(procs), cat, root: project.root, params: project.params(), parts: { ...project.parts() } };
};
const problems = (mutate) => { const p = fresh(); mutate(p); return checkProject(p).join('\n'); };

test('the unbroken project has no problems, so each break below is what the checker finds', () => {
  assert.equal(problems(() => {}), '');
});

test('the checker catches a call to a procedure that does not exist', () => {
  assert.match(problems(({ reg }) => reg.get('plan.m2-engine').steps.push({ call: 'engine.polish' })), /calls "engine\.polish", which does not exist/);
});

test('the checker catches a tool that nothing provides', () => {
  assert.match(problems(({ reg }) => reg.get('carbs.rebuild').requires.tools.push('ultrasonic-tank')), /unknown tool "ultrasonic-tank"/);
});

test('the checker catches a bought item with no price', () => {
  assert.match(problems(({ cat }) => { delete cat.MATERIALS['carb-kits'].cost; }), /material "carb-kits" is bought but has no cost/);
});

test('the checker catches a procedure that calls itself through others', () => {
  assert.match(problems(({ reg }) => reg.get('plan.m5-complete').steps.push({ call: 'plan.yl1' })), /cycle/);
});

test('the checker catches a procedure nothing calls', () => {
  assert.match(problems(({ reg }) => { reg.get('plan.yl1').steps = reg.get('plan.yl1').steps.filter((s) => s.call !== 'plan.m5-complete'); }),
    /only top-level procedure should be "plan\.yl1"/);
});

test('the checker catches a quoted number the project does not define', () => {
  assert.match(problems(({ reg }) => reg.get('carbs.rebuild').steps.push('Fit a {spec.mainJet} main jet.')), /quotes \{spec\.mainJet\}/);
});

test('a kit tool must be on the kit list', () => {
  assert.match(problems(({ cat }) => { cat.KIT = cat.KIT.filter((t) => t !== 'jis-drivers'); }), /tool "jis-drivers" says kit but is not in the kit list/);
});

test('the catalog merger refuses a part that redefines something', () => {
  assert.throws(() => assemble({ KIT: [], TOOLS: { caliper: {} }, MATERIALS: {} }, { extra: { TOOLS: { caliper: {} } } }), /catalog part "extra" redefines tool "caliper"/);
});

test('calendars: fixed and weekly hours, and a clear error for a bad one', () => {
  assert.equal(S.workHours({ start: '2027-01-04', hours: { type: 'fixed', hours: 4 } }, 3).work, 4);
  // 3 October 2026 is a Saturday.
  assert.deepEqual([0, 1, 2].map((d) => S.workHours({ ...project.calendar, start: '2026-10-03' }, d).work), [4, 4, 1.5]);
  assert.throws(() => S.workHours({ start: '2027-01-01', hours: { type: 'moon' } }, 0), /fixed, weekly or daylight/);
  assert.throws(() => S.run(project.root, fresh().reg, C, L, { start: 'soon' }), /calendar\.start must be a date/);
});

test('the checker catches a part nothing builds, a part the design lacks, and a plan that changes a part', () => {
  assert.match(problems(({ parts }) => { parts.fairing = 'Fairing'; }), /design part "fairing" is built by no procedure/);
  assert.match(problems(({ reg }) => { reg.get('fork.rebuild').builds = ['sidecar']; }), /fork\.rebuild builds "sidecar", which is not a part of the design/);
  assert.match(problems(({ reg }) => { reg.get('strip.carbs').removes = ['choke']; }), /strip\.carbs removes "choke", which is not a part of the design/);
  assert.match(problems(({ reg }) => { reg.get('plan.m2-engine').removes = ['engine']; }), /a plan cannot change a design part/);
  assert.match(problems(({ reg }) => { reg.get('strip.carbs').removes = 'carbs'; }), /removes must be a list/);
});

test('the checker catches an after that names nothing, names itself, or cannot be kept', () => {
  assert.match(problems(({ reg }) => { reg.get('measure.bores').after = ['strip.pistons']; }), /comes after "strip\.pistons", which does not exist/);
  assert.match(problems(({ reg }) => { reg.get('measure.bores').after = ['measure.bores']; }), /cannot come after itself/);
  // The top end came off in January 2025; it cannot wait for a measurement taken in 2026.
  assert.match(problems(({ reg }) => { reg.get('strip.top-end').after = ['measure.crank']; }),
    /strip\.top-end comes after measure\.crank, but plan\.yl1 does not finish measure\.crank before starting strip\.top-end/);
});

test('a job with after starts only once the jobs it comes after are finished', () => {
  const reg = fresh().reg;
  const r = S.run(project.root, reg, C, L, project.calendar);
  const first = new Map();
  r.days.forEach((d) => d.did.forEach((x) => { if (!first.has(x.id)) first.set(x.id, d.day); }));
  let checked = 0;
  for (const p of reg.values()) for (const a of p.after || []) {
    assert.ok(first.get(p.id) >= r.finish(a), `${p.id} starts day ${first.get(p.id)}, but ${a} finishes day ${r.finish(a)}`);
    checked++;
  }
  assert.ok(checked > 30, `only ${checked} after links checked`);
});

test('a job held by after waits even when nothing it uses comes from the other job', () => {
  const reg = fresh().reg;
  const without = S.run(project.root, reg, C, L, project.calendar);
  assert.ok(without.finish('rear.suspension') < without.finish('engine.bore'), 'the shocks are done before the bores come back');
  reg.get('rear.suspension').after = ['engine.bore'];
  const withAfter = S.run(project.root, reg, C, L, project.calendar);
  assert.ok(withAfter.finish('rear.suspension') > withAfter.finish('engine.bore'),
    `shocks done day ${withAfter.finish('rear.suspension')}, bores back day ${withAfter.finish('engine.bore')}`);
});

test('the scheduler refuses an after it cannot keep, rather than drop it', () => {
  const reg = fresh().reg;
  reg.get('exhaust.install').after = ['wheels.rebuild'];
  assert.throws(() => S.run(project.root, reg, C, L, project.calendar),
    /exhaust\.install comes after wheels\.rebuild, but the plan does not run wheels\.rebuild before exhaust\.install/);
});

test('the part timeline gives each part as found, off and restored in the order the jobs finish', () => {
  const reg = fresh().reg;
  const r = S.run(project.root, reg, C, L, project.calendar);
  const tl = S.partTimeline(r, reg);
  const off = r.finish('strip.carbs'), back = r.finish('carbs.install');
  assert.equal(tl.stateOn('carbs', off - 1), 'original');
  assert.equal(tl.stateOn('carbs', off), 'off');
  assert.equal(tl.stateOn('carbs', back - 1), 'off');
  assert.equal(tl.stateOn('carbs', back), 'restored');
  // The forks come off and go back on; the last event on the part wins.
  assert.equal(tl.stateOn('front-end', r.finish('fork.remove')), 'off');
  assert.equal(tl.stateOn('front-end', r.finish('fork.rebuild')), 'restored');
  const days = tl.events.map((e) => e.day);
  assert.deepEqual(days, [...days].sort((a, b) => a - b));
});
