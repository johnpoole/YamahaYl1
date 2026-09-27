// Find the side covers
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/covers.find.js');
  const procedure = {
    id: 'covers.find',
    kind: 'task',
    status: 'open',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find the side covers',
    purpose: 'The bike was found without its side covers. Find them or replacements.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
