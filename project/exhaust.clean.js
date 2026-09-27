// Clean the exhaust
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/exhaust.clean.js');
  const procedure = {
    id: 'exhaust.clean',
    kind: 'task',
    status: 'open',
    window: { from: design.dayOf(design.RESUME) },
    after: ['engine.remove'],
    title: 'Clean the exhaust',
    purpose: 'Decide how to clear the carbon from the pipes and baffles, and whether any part must be replaced.',
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
