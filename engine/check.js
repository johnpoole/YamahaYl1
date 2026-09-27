// The rules every project's procedures must keep, as one check. Returns a list of problems,
// empty when the project is sound. A project's tests call it and assert the list is empty.
//
//   project: { reg, cat, root, params, parts }
//     reg     Map of id → procedure (lib.byId)
//     cat     catalog { KIT, TOOLS, MATERIALS }
//     root    id of the one top-level plan
//     params  design numbers that {placeholders} in the text may quote
//     parts   optional { id: name } or { id: { name, section } } of the design's parts; each must
//             be built by a procedure the plan runs, and a procedure may build or remove only
//             parts on this list
//     sections optional { id: name }. With sections, the plan is shaped like the design: plan
//             section.<s> calls plan part.<p> for each of its parts, every part plan holds at least
//             one job, and a job that builds a part is run from that part's section
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const L = node ? require('./lib.js') : root.ProcLib;
  const S = node ? require('./schedule.js') : root.ProcSchedule;

  function checkProject({ reg, cat, root: top, params = {}, parts, sections }) {
    const e = [];
    const add = (list) => list.forEach((x) => e.push(x));

    // 1–2. Every procedure is well formed, every reference resolves, and every catalog source is real.
    for (const p of reg.values()) add(L.validate(p, reg, cat));
    add(L.validateCatalog(reg, cat));
    if (e.length) return e;

    // 3. No cycles.
    for (const id of reg.keys()) {
      try { L.trace(id, reg); } catch (err) { e.push(`${id}: ${err.message}`); }
    }
    if (e.length) return e;

    // One top-level plan, and everything else reachable from it.
    const roots = L.roots(reg);
    if (roots.length !== 1 || roots[0] !== top) e.push(`the only top-level procedure should be "${top}", found ${JSON.stringify(roots)}`);
    if (!reg.get(top)) return [...e, `the top-level plan "${top}" does not exist`];
    const reached = new Set(L.trace(top, reg).map((x) => x.id));
    for (const p of reg.values()) if (p.kind !== 'skill' && !reached.has(p.id)) e.push(`${p.id} is never called from ${top}`);
    const usedSkills = new Set([...reg.values()].flatMap((p) => p.requires.skills));
    for (const p of reg.values()) if (p.kind === 'skill' && !usedSkills.has(p.id)) e.push(`${p.id} is a skill that nothing requires`);

    // 4–5. Run on paper with a running stock: tools exist before use, materials are in stock when needed.
    const daily = L.dailyMaterials(top, reg);
    const r = L.run(top, reg, cat, { supplied: daily });
    add(r.errors);
    const makes = r.events.filter((x) => x.type === 'exit' && reg.get(x.id).kind === 'make').map((x) => x.id);
    for (const id of new Set(makes.filter((m, i) => makes.indexOf(m) !== i))) e.push(`${id} runs more than once; a tool should be made once`);

    // Nothing assumed beyond the kit, the site, purchases and what procedures make.
    const n = L.needs(top, reg, cat);
    for (const t of n.toMake) e.push(`${top} needs the tool "${t}" but nothing in it makes it`);
    for (const m of n.inputs) {
      const src = cat.MATERIALS[m.id].source;
      if (src !== 'site' && src !== 'bought') e.push(`${top} uses "${m.id}" from ${src}, which it never calls`);
    }

    // Each procedure calls the gathering for every material it uses, so it reads like a self-contained function.
    for (const p of reg.values()) {
      const calls = new Set(L.callsOf(p));
      for (const m of p.requires.materials) {
        const src = cat.MATERIALS[m.id].source;
        if (src === 'site' || src === 'bought' || daily.has(m.id) || src === p.id) continue;
        if (!calls.has(src)) e.push(`${p.id} uses ${m.id} but does not call ${src}`);
      }
    }

    // Every part of the design is built by something the plan runs, and nothing builds a part the design lacks.
    const builders = new Map();
    for (const p of reg.values()) {
      for (const b of p.builds || []) {
        if (parts && !(b in parts)) e.push(`${p.id} builds "${b}", which is not a part of the design`);
        if (!parts) e.push(`${p.id} builds "${b}", but the project lists no design parts`);
        (builders.get(b) || builders.set(b, []).get(b)).push(p.id);
      }
      for (const b of p.removes || []) {
        if (parts && !(b in parts)) e.push(`${p.id} removes "${b}", which is not a part of the design`);
        if (!parts) e.push(`${p.id} removes "${b}", but the project lists no design parts`);
      }
    }

    // after may name a job anywhere in the plan, but only one the plan runs, and never in a loop.
    for (const p of reg.values()) for (const a of p.after || []) {
      if (reached.has(p.id) && !reached.has(a)) e.push(`${p.id} comes after ${a}, which ${top} never runs`);
    }
    const ids = [...reg.keys()].filter((id) => reached.has(id));
    const loop = S.findLoop(ids.map((id) => (reg.get(id).after || []).map((a) => ids.indexOf(a)).filter((i) => i >= 0)));
    if (loop) e.push(`these jobs wait on each other in a loop: ${loop.map((i) => ids[i]).join(' → ')}`);

    // With sections, the plan has the shape of the design.
    if (sections && parts) {
      const runs = (plan) => (reg.get(plan) ? new Set(L.trace(plan, reg).map((x) => x.id)) : new Set());
      for (const s of Object.keys(sections)) {
        const sp = reg.get(`section.${s}`);
        if (!sp || sp.kind !== 'plan') e.push(`section "${s}" needs a plan with the id section.${s}`);
      }
      for (const [id, part] of Object.entries(parts)) {
        if (!part || !(part.section in sections)) { e.push(`part "${id}" names section ${JSON.stringify(part && part.section)}, which is not a section`); continue; }
        const pp = reg.get(`part.${id}`), sp = reg.get(`section.${part.section}`);
        if (!pp || pp.kind !== 'plan') { e.push(`part "${id}" needs a plan with the id part.${id}`); continue; }
        if (sp && !L.callsOf(sp).includes(pp.id)) e.push(`section.${part.section} does not call part.${id}`);
        if (!L.callsOf(pp).length) e.push(`part.${id} holds no jobs; give it at least an open one`);
      }
      for (const p of reg.values()) for (const b of p.builds || []) {
        const part = parts[b];
        if (part && part.section in sections && !runs(`section.${part.section}`).has(p.id)) e.push(`${p.id} builds "${b}", but section.${part.section} does not run it`);
      }
    }
    for (const id of Object.keys(parts || {})) {
      const by = (builders.get(id) || []).filter((pid) => reached.has(pid));
      if (!by.length) e.push(`design part "${id}" is built by no procedure that ${top} runs`);
    }

    // Every design number quoted in text is defined.
    for (const p of reg.values()) for (const k of L.placeholders(p)) if (!(k in params)) e.push(`${p.id} quotes {${k}}, which the project's params do not define`);
    for (const [id, x] of [...Object.entries(cat.TOOLS), ...Object.entries(cat.MATERIALS)]) {
      for (const m of String(x.name).matchAll(/\{([a-zA-Z.]+)\}/g)) if (!(m[1] in params)) e.push(`catalog entry "${id}" quotes {${m[1]}}, which the params do not define`);
    }
    return e;
  }

  const api = { checkProject };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcCheck = api;
})(this);
