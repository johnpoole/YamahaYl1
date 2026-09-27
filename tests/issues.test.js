const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../engine/lib.js');
const { load } = require('../project/index.js');
const project = require('../project/project.js');
const PHOTOS = require('../media/photos.js');
const { desired } = require('../tools/issues.js');

const reg = L.byId(load());
const want = desired(reg, 'https://example.test/YamahaYl1/', project.params());
const byKey = new Map(want.map((w) => [w.key, w]));

test('every task in the plan is one job issue, and nothing else is', () => {
  const tasks = [...reg.values()].filter((p) => p.kind === 'task').map((p) => p.id).sort();
  const jobs = want.filter((w) => w.labels.includes('job')).map((w) => w.key).sort();
  assert.deepEqual(jobs, tasks);
  assert.equal(want.length, byKey.size, 'a plan id appears twice');
  assert.ok(!want.some((w) => reg.get(w.key).kind === 'skill'));
});

test('every issue but the top one has a parent that comes before it, within GitHub\'s limits', () => {
  const seen = new Set();
  for (const w of want) {
    if (w.key === project.root) assert.equal(w.parentKey, null);
    else assert.ok(seen.has(w.parentKey), `${w.key}: parent ${w.parentKey} is not made first`);
    seen.add(w.key);
  }
  const children = new Map();
  for (const w of want) if (w.parentKey) children.set(w.parentKey, (children.get(w.parentKey) || 0) + 1);
  for (const [k, n] of children) assert.ok(n <= 100, `${k} has ${n} sub-issues`);
  const depth = (w) => (w.parentKey ? 1 + depth(byKey.get(w.parentKey)) : 1);
  assert.ok(Math.max(...want.map(depth)) <= 8);
});

test('the open label marks exactly the open jobs, and only the photographed jobs start closed', () => {
  for (const w of want) {
    assert.equal(w.labels.includes('open'), reg.get(w.key).status === 'open', w.key);
    assert.equal(w.closedAtCreation, PHOTOS.some((p) => p.job === w.key), w.key);
  }
});

test('each issue links to its page and carries its marker', () => {
  for (const w of want) {
    assert.ok(w.body.includes(`https://example.test/YamahaYl1/project/#${w.key}`), w.key);
    assert.ok(w.body.endsWith(`<!-- plan:${w.key} -->`), w.key);
    assert.ok(!/\{[a-z]+\.[A-Za-z]+\}/.test(w.title + w.body), `${w.key} has an unfilled placeholder`);
  }
});

test('every job that comes after another is blocked by that job\'s issue', () => {
  let n = 0;
  for (const w of want) for (const a of w.blockedBy) {
    assert.ok(byKey.has(a) && byKey.get(a).labels.includes('job'), `${w.key} is blocked by ${a}, which is not a job issue`);
    n++;
  }
  assert.equal(n, [...reg.values()].reduce((t, p) => t + (p.after || []).length, 0));
});
