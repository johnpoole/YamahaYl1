// M5: Complete
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/plan.m5-complete.js');
  const procedure = {
    id: 'plan.m5-complete',
    kind: 'plan',
    window: { from: design.dayOf(design.RIDING) },
    title: 'M5: Complete',
    purpose: 'Check every success criterion and finish the records.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'check.success' },
      { call: 'docs.finalize' },
    ],
    checks: [
      'The project is complete.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
