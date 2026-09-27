// M5: Complete
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.m5-complete',
    kind: 'plan',
    window: { from: 900 },
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
