// Session of 15 December 2024
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.day-2024-12-15',
    kind: 'plan',
    window: { from: 33, to: 33 },
    title: 'Session of 15 December 2024',
    purpose: 'What was done on 15 December 2024.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.magneto-cover' },
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
