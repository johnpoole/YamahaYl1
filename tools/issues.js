// Mirror the plan as GitHub issues, and read back which jobs are done.
//
//   node tools/issues.js
//
// plan.yl1 becomes one issue, each section a sub-issue of it, each part a sub-issue of its section,
// and each job a sub-issue of the plan that calls it, listed in the plan's order. A job that comes
// after another is marked as blocked by it. The job files stay the instructions; an issue
// carries the job's purpose, a link to its page, and its state. The first time a job's issue is
// made it is closed if the strip-down photos show the job done. After that the issue's state is
// the owner's: this script never opens or closes an issue it has made before, with one exception.
// When a job, part or section leaves the plan, its open issue is closed as not planned. It writes
// the jobs whose issues are closed to project/done.js.
'use strict';

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const L = require('../engine/lib.js');
const { load } = require('../project/index.js');
const project = require('../project/project.js');
const catalog = require('../project/catalog.js');
const PHOTOS = require('../media/photos.js');

const LABELS = {
  plan: { color: '5319e7', description: 'The whole rebuild' },
  section: { color: '1d76db', description: 'A section of the bike' },
  part: { color: '0e8a16', description: 'A part of the bike' },
  job: { color: 'fbca04', description: 'A job in the plan' },
  open: { color: 'd93f0b', description: 'A job whose steps are not written yet' },
};
const marker = (id) => `<!-- plan:${id} -->`;
const MARKER = /<!-- plan:([a-z0-9.-]+) -->/;

// Every issue the plan calls for, parents before children.
// What a person needs at the bike, from the job file: why, tools, parts, steps, when it is done.
function jobText(p, cat, params) {
  const t = (x) => L.render(x, params).replace(/\s*Backlog B-\d+\.?/g, '').trim();
  const list = (title, items) => (items.length ? `**${title}**\n${items.map((x) => `- ${x}`).join('\n')}\n\n` : '');
  if (p.status === 'open') return `**Not written yet.** ${t(p.purpose)}\n\n`;
  const steps = p.steps.map((s, i) => `${i + 1}. ${L.isCall(s) ? t(s.note || s.call) : t(s)}`).join('\n');
  const tool = (id) => { const x = cat.TOOLS[id]; if (!x) throw new Error(`issues: ${p.id} needs tool ${id}, which the catalog lacks`); return t(x.name); };
  const mat = (m) => { const x = cat.MATERIALS[m.id]; if (!x) throw new Error(`issues: ${p.id} uses ${m.id}, which the catalog lacks`); return `${t(x.name)}, ${+m.qty.toFixed(2)}${x.unit === 'count' ? '' : ' ' + x.unit}`; };
  return `${t(p.purpose)}\n\n`
    + list('Tools', p.requires.tools.map(tool))
    + list('Parts and supplies', p.requires.materials.map(mat))
    + `**Steps**\n${steps}\n\n`
    + list('Done when', p.checks.map(t))
    + list('Safety', p.safety.map(t))
    + `About ${+p.estimate.hours.toFixed(2)} h.\n\n`;
}

function desired(reg, base, params, cat) {
  const callers = new Map();
  for (const p of reg.values()) for (const c of L.callsOf(p)) callers.set(c, [...(callers.get(c) || []), p.id]);
  const done = new Set(PHOTOS.map((x) => x.job));
  const out = [];
  const visit = (id, parentKey) => {
    const p = reg.get(id);
    const by = callers.get(id) || [];
    if (parentKey && by.length !== 1) throw new Error(`issues: ${id} is called by ${by.length ? by.join(', ') : 'nothing'}; an issue can have only one parent`);
    const kind = id === project.root ? 'plan' : /^section\./.test(id) ? 'section' : /^part\./.test(id) ? 'part' : p.kind === 'task' ? 'job' : null;
    if (!kind) throw new Error(`issues: ${id} is a ${p.kind} under ${parentKey}; only sections, parts and tasks become issues`);
    out.push({
      key: id,
      title: L.render(p.title, params),
      body: `${kind === 'job' ? jobText(p, cat, params) : `${L.render(p.purpose, params)}\n\n`}Full page: ${base}project/#${id}\n\n${marker(id)}`,
      labels: kind === 'job' && p.status === 'open' ? ['job', 'open'] : [kind],
      parentKey,
      closedAtCreation: kind === 'job' && done.has(id),
      blockedBy: kind === 'job' ? [...(p.after || [])] : [],
    });
    for (const c of L.callsOf(p)) visit(c, id);
  };
  visit(project.root, null);
  return out;
}

function gh(args, input) {
  try {
    return execFileSync('gh', args, { input: input === undefined ? undefined : JSON.stringify(input), encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  } catch (err) {
    throw new Error(`gh ${args.join(' ')} failed: ${(err.stderr || err.message).trim()}${/secondary rate limit/i.test(err.stderr || '') ? ' (GitHub rate limit: wait a few minutes and run again; it picks up where it stopped)' : ''}`);
  }
}
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

function main() {
  const repo = gh(['repo', 'view', '--json', 'nameWithOwner', '-q', '.nameWithOwner']).trim();
  const base = gh(['api', `repos/${repo}/pages`, '-q', '.html_url']).trim();
  if (!/^https:\/\//.test(base)) throw new Error(`issues: GitHub Pages gave no site URL for ${repo}, got ${JSON.stringify(base)}`);
  const reg = L.byId(load());
  const want = desired(reg, base, project.params(), catalog);
  let writes = 0;
  const write = (method, url, payload) => { writes++; sleep(1000); return JSON.parse(gh(['api', '-X', method, url, '--input', '-'], payload)); };

  for (const [name, l] of Object.entries(LABELS)) gh(['label', 'create', name, '--repo', repo, '--color', l.color, '--description', l.description, '--force']);

  const listIssues = () => gh(['api', '--paginate', `repos/${repo}/issues?state=all&per_page=100`, '--jq', '.[] | select(.pull_request == null) | {number, id, title, body, state, labels: [.labels[].name]}'])
    .split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const byKey = new Map();
  for (const i of listIssues()) {
    const m = MARKER.exec(i.body || '');
    if (!m) continue;
    if (byKey.has(m[1])) throw new Error(`issues: #${byKey.get(m[1]).number} and #${i.number} both carry ${marker(m[1])}; close one and remove its marker`);
    byKey.set(m[1], i);
  }

  let created = 0, updated = 0, linked = 0, blocked = 0, unblocked = 0, reordered = 0;
  for (const w of want) {
    let issue = byKey.get(w.key);
    if (!issue) {
      issue = write('POST', `repos/${repo}/issues`, { title: w.title, body: w.body, labels: w.labels });
      if (w.closedAtCreation) write('PATCH', `repos/${repo}/issues/${issue.number}`, { state: 'closed', state_reason: 'completed' });
      byKey.set(w.key, { ...issue, labels: w.labels });
      created++;
      continue;
    }
    const current = issue.labels.map((x) => (typeof x === 'string' ? x : x.name));
    const ours = current.filter((x) => x in LABELS).sort().join(',');
    const patch = {};
    if (issue.title !== w.title) patch.title = w.title;
    if (issue.body !== w.body) patch.body = w.body;
    if (ours !== [...w.labels].sort().join(',')) patch.labels = [...current.filter((x) => !(x in LABELS)), ...w.labels];
    if (Object.keys(patch).length) { write('PATCH', `repos/${repo}/issues/${issue.number}`, patch); updated++; }
  }

  for (const w of want) {
    if (!w.parentKey) continue;
    const parent = byKey.get(w.parentKey), child = byKey.get(w.key);
    const have = gh(['api', '--paginate', `repos/${repo}/issues/${parent.number}/sub_issues?per_page=100`, '--jq', '.[].id']).split('\n').filter(Boolean).map(Number);
    if (have.includes(child.id)) continue;
    write('POST', `repos/${repo}/issues/${parent.number}/sub_issues`, { sub_issue_id: child.id, replace_parent: true });
    linked++;
  }

  const ids = (url) => gh(['api', '--paginate', url, '--jq', '.[].id']).split('\n').filter(Boolean).map(Number);

  // Sub-issues in the plan's order.
  const kids = new Map();
  for (const w of want) if (w.parentKey) kids.set(w.parentKey, [...(kids.get(w.parentKey) || []), byKey.get(w.key).id]);
  for (const [pk, order] of kids) {
    const parent = byKey.get(pk);
    // Retired issues stay under their parent, closed; only the plan's own sub-issues are ordered.
    const planned = new Set(order);
    const have = ids(`repos/${repo}/issues/${parent.number}/sub_issues?per_page=100`).filter((id) => planned.has(id));
    if (have.join() === order.join()) continue;
    if (have[0] !== order[0]) write('PATCH', `repos/${repo}/issues/${parent.number}/sub_issues/priority`, { sub_issue_id: order[0], before_id: have[0] });
    for (let i = 1; i < order.length; i++) write('PATCH', `repos/${repo}/issues/${parent.number}/sub_issues/priority`, { sub_issue_id: order[i], after_id: order[i - 1] });
    reordered++;
  }

  // A job that comes after another is blocked by it. Links between plan issues that the plan no
  // longer has are removed; links to any other issue are left alone.
  const keyOfId = new Map([...byKey].map(([k, i]) => [i.id, k]));
  for (const w of want) {
    const issue = byKey.get(w.key);
    const have = ids(`repos/${repo}/issues/${issue.number}/dependencies/blocked_by?per_page=100`);
    const wantIds = w.blockedBy.map((a) => {
      if (!byKey.has(a)) throw new Error(`issues: ${w.key} comes after ${a}, which has no issue`);
      return byKey.get(a).id;
    });
    for (const id of wantIds) if (!have.includes(id)) { write('POST', `repos/${repo}/issues/${issue.number}/dependencies/blocked_by`, { issue_id: id }); blocked++; }
    for (const id of have) if (keyOfId.has(id) && !wantIds.includes(id)) {
      writes++; sleep(1000);
      gh(['api', '-X', 'DELETE', `repos/${repo}/issues/${issue.number}/dependencies/blocked_by/${id}`]);
      unblocked++;
    }
  }

  // Issues whose job, part or section has left the plan are closed as not planned.
  const gone = retired(byKey, want);
  if (gone.length) console.log(`Closing as not planned, no longer in the plan: ${gone.map((i) => `#${i.number} ${i.key}`).join(', ')}`);
  for (const i of gone) {
    write('POST', `repos/${repo}/issues/${i.number}/comments`, { body: `${i.key} is no longer in the plan.` });
    write('PATCH', `repos/${repo}/issues/${i.number}`, { state: 'closed', state_reason: 'not_planned' });
  }

  // Read back: the jobs whose issues are closed.
  const jobs = new Set(want.filter((w) => w.labels.includes('job')).map((w) => w.key));
  const done = listIssues().filter((i) => i.state === 'closed').map((i) => (MARKER.exec(i.body || '') || [])[1]).filter((id) => jobs.has(id)).sort();
  fs.writeFileSync(path.join(__dirname, '..', 'project', 'done.js'), `// The jobs whose GitHub issues are closed. Written by tools/issues.js; do not edit by hand.
(function (root) {
  'use strict';
  const DONE = ${JSON.stringify(done, null, 2).replace(/"/g, "'").replace(/\n/g, '\n  ')};
  if (typeof module !== 'undefined' && module.exports) module.exports = DONE;
  else root.YL1Done = DONE;
})(this);
`);
  const top = byKey.get(project.root);
  console.log(`${want.length} issues in the plan: ${created} created, ${updated} updated, ${linked} linked, ${reordered} reordered, ${blocked} blocks added, ${unblocked} removed, ${writes} writes. ${done.length} jobs done. Top issue: https://github.com/${repo}/issues/${top.number}`);
}

// The open issues that carry a plan marker the plan no longer has.
function retired(byKey, want) {
  const keys = new Set(want.map((w) => w.key));
  return [...byKey].filter(([k, i]) => !keys.has(k) && i.state === 'open').map(([k, i]) => ({ key: k, number: i.number }));
}

module.exports = { desired, retired, LABELS };
if (require.main === module) main();
