// Session of 6 January 2025
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.day-2025-01-06',
    kind: 'plan',
    window: { from: 55, to: 55 },
    title: 'Session of 6 January 2025',
    purpose: 'What was done on 6 January 2025.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'shop.stand' },
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
