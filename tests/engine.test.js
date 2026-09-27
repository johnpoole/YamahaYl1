const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../engine/lib.js');
const S = require('../engine/schedule.js');
const { checkProject } = require('../engine/check.js');
const { assemble } = require('../engine/catalog.js');
const C = require('../project/catalog.js');
const { load } = require('../project/index.js');
const project = require('../project/project.js');
const PHOTOS = require('../media/photos.js');

// A fresh, editable copy of the YL1 project to break in different ways.
const fresh = () => {
  const procs = load().map((p) => JSON.parse(JSON.stringify(p)));
  const cat = JSON.parse(JSON.stringify(C));
  return { reg: L.byId(procs), cat, root: project.root, params: project.params(), parts: { ...project.parts() }, sections: { ...project.sections() } };
};
const problems = (mutate) => { const p = fresh(); mutate(p); return checkProject(p).join('\n'); };

test('the unbroken project has no problems, so each break below is what the checker finds', () => {
  assert.equal(problems(() => {}), '');
});

test('the checker catches a call to a procedure that does not exist', () => {
  assert.match(problems(({ reg }) => reg.get('section.engine').steps.push({ call: 'engine.polish' })), /calls "engine\.polish", which does not exist/);
});

test('the checker catches a tool that nothing provides', () => {
  assert.match(problems(({ reg }) => reg.get('carbs.rebuild').requires.tools.push('ultrasonic-tank')), /unknown tool "ultrasonic-tank"/);
});

test('the checker catches a bought item with no price', () => {
  assert.match(problems(({ cat }) => { delete cat.MATERIALS['carb-kits'].cost; }), /material "carb-kits" is bought but has no cost/);
});

test('the checker catches a procedure that calls itself through others', () => {
  assert.match(problems(({ reg }) => reg.get('section.shop').steps.push({ call: 'plan.yl1' })), /cycle/);
});

test('the checker catches a procedure nothing calls', () => {
  assert.match(problems(({ reg }) => { reg.get('plan.yl1').steps = reg.get('plan.yl1').steps.filter((s) => s.call !== 'section.shop'); }),
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
  assert.match(problems(({ parts }) => { parts.fairing = { name: 'Fairing', section: 'body', draw: 'seat' }; }), /design part "fairing" is built by no procedure/);
  assert.match(problems(({ reg }) => { reg.get('fork.rebuild').builds = ['sidecar']; }), /fork\.rebuild builds "sidecar", which is not a part of the design/);
  assert.match(problems(({ reg }) => { reg.get('strip.carbs').removes = ['choke']; }), /strip\.carbs removes "choke", which is not a part of the design/);
  assert.match(problems(({ reg }) => { reg.get('section.engine').removes = ['gearbox']; }), /a plan cannot change a design part/);
  assert.match(problems(({ reg }) => { reg.get('strip.carbs').removes = 'carbs'; }), /removes must be a list/);
});

test('the checker catches an after that names nothing, names itself, or waits in a loop', () => {
  assert.match(problems(({ reg }) => { reg.get('measure.bores').after = ['strip.pistons']; }), /comes after "strip\.pistons", which does not exist/);
  assert.match(problems(({ reg }) => { reg.get('measure.bores').after = ['measure.bores']; }), /cannot come after itself/);
  // The engine cannot come out after it goes back in: engine.install waits, through the top end, on engine.remove.
  assert.match(problems(({ reg }) => { reg.get('engine.remove').after.push('engine.install'); }), /wait on each other in a loop: .*engine\.remove.*engine\.install|wait on each other in a loop: .*engine\.install.*engine\.remove/);
});

test('after may name a job in another part of the tree, earlier or later', () => {
  // exhaust.install sits in the engine section and would wait for a wheel in the chassis section.
  assert.equal(problems(({ reg }) => { reg.get('exhaust.install').after = ['wheel.rear-rebuild']; }), '');
});

test('the checker keeps the plan shaped like the bike', () => {
  assert.match(problems(({ reg }) => { reg.get('part.chain').steps = ['Look at the chain.']; }), /part\.chain holds no jobs/);
  assert.match(problems(({ reg }) => { reg.get('section.chassis').steps = reg.get('section.chassis').steps.filter((s) => s.call !== 'part.chain'); }), /section\.chassis does not call part\.chain/);
  assert.match(problems(({ reg }) => { reg.get('carbs.install').builds = ['carbs', 'chain']; }), /carbs\.install builds "chain", but section\.chassis does not run it/);
  assert.match(problems(({ parts }) => { parts.chain = { ...parts.chain, section: 'wheels' }; }), /part "chain" names section "wheels"/);
  assert.match(problems(({ reg }) => { reg.get('chain.check').status = 'open'; }), /an open task has no steps and 0 hours yet/);
});

test('a job with after starts only once the jobs it comes after are finished', () => {
  const reg = fresh().reg;
  const r = S.run(project.root, reg, C, L, project.calendar);
  const first = new Map();
  r.days.forEach((d) => d.did.forEach((x) => { if (!first.has(x.id)) first.set(x.id, d.day); }));
  let checked = 0;
  // An open job has no hours yet, so it has no start; it is done the day it is free to start.
  const start = (id) => (first.has(id) ? first.get(id) : r.finish(id));
  for (const p of reg.values()) for (const a of p.after || []) {
    assert.ok(start(p.id) >= r.finish(a), `${p.id} starts day ${start(p.id)}, but ${a} finishes day ${r.finish(a)}`);
    checked++;
  }
  assert.ok(checked > 30, `only ${checked} after links checked`);
});

test('a job held by after waits even when nothing it uses comes from the other job', () => {
  const reg = fresh().reg;
  const without = S.run(project.root, reg, C, L, project.calendar);
  assert.ok(without.finish('rear.suspension') < without.finish('engine.split-cases'), 'the shocks are done before the cases are split');
  reg.get('rear.suspension').after = ['engine.split-cases'];
  const withAfter = S.run(project.root, reg, C, L, project.calendar);
  assert.ok(withAfter.finish('rear.suspension') > withAfter.finish('engine.split-cases'),
    `shocks done day ${withAfter.finish('rear.suspension')}, cases split day ${withAfter.finish('engine.split-cases')}`);
});

test('the scheduler refuses jobs that wait on each other in a loop, rather than leave them undone', () => {
  const reg = fresh().reg;
  reg.get('engine.remove').after.push('engine.install');
  assert.throws(() => S.run(project.root, reg, C, L, project.calendar), /schedule: these jobs wait on each other in a loop: /);
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
  // The front wheel comes off and goes back on; the last event on the part wins.
  assert.equal(tl.stateOn('front-wheel', r.finish('strip.front-wheel')), 'off');
  assert.equal(tl.stateOn('front-wheel', r.finish('wheel.front-rebuild')), 'restored');
  const days = tl.events.map((e) => e.day);
  assert.deepEqual(days, [...days].sort((a, b) => a - b));
});

test('the page loader puts the procedures in index order whatever order the files arrive in', async () => {
  const vm = require('node:vm');
  const fs = require('node:fs');
  const path = require('node:path');
  const src = fs.readFileSync(path.join(__dirname, '..', 'engine', 'load.js'), 'utf8');
  const loadIn = async (ids, arrive) => {
    const scripts = [];
    const ctx = { document: { createElement: () => ({}), body: { appendChild: (s) => scripts.push(s) } } };
    vm.runInNewContext(src, ctx);
    const done = ctx.ProcLoad.procedures(ids);
    for (const id of arrive) {
      (ctx.PROCEDURES = ctx.PROCEDURES || []).push({ id });
      scripts.find((s) => s.src === `${id}.js`).onload();
    }
    await done;
    return ctx.PROCEDURES.map((p) => p.id);
  };
  assert.deepEqual(await loadIn(['a.one', 'b.two', 'c.three'], ['c.three', 'a.one', 'b.two']), ['a.one', 'b.two', 'c.three']);
});

test('jobs marked oneJobADay start at most one a day, and without it they share a day', () => {
  const ids = [...new Set(PHOTOS.map((p) => p.job))];
  const firstDays = (reg) => {
    const r = S.run(project.root, reg, C, L, project.calendar);
    return r.days.map((d) => d.did.filter((x) => ids.includes(x.id) && !r.days.slice(0, d.day).some((e) => e.did.some((y) => y.id === x.id))).length);
  };
  assert.ok(Math.max(...firstDays(fresh().reg)) <= 1);
  const reg = fresh().reg;
  for (const id of ids) delete reg.get(id).oneJobADay;
  assert.ok(Math.max(...firstDays(reg)) > 1, 'without oneJobADay the short strip-down jobs share an evening');
  assert.match(problems(({ reg }) => { reg.get('skill.torque').oneJobADay = true; }), /only a plan or a task can have oneJobADay/);
});
