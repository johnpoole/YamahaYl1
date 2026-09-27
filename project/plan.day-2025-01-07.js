// Session of 7 January 2025
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.day-2025-01-07',
    kind: 'plan',
    window: { from: 56, to: 56 },
    title: 'Session of 7 January 2025',
    purpose: 'What was done on 7 January 2025.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'engine.remove' },
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
