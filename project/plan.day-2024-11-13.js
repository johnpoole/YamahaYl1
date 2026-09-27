// Session of 13 November 2024
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.day-2024-11-13',
    kind: 'plan',
    window: { from: 1, to: 1 },
    title: 'Session of 13 November 2024',
    purpose: 'What was done on 13 November 2024.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.side-covers' },
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
