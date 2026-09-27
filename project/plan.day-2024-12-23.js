// Session of 23 December 2024
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.day-2024-12-23',
    kind: 'plan',
    window: { from: 41, to: 41 },
    title: 'Session of 23 December 2024',
    purpose: 'What was done on 23 December 2024.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.carbs' },
    ],
    checks: [
      'The session\'s photos match the steps.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
