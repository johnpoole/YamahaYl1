// Clutch
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.clutch',
    kind: 'plan',
    title: 'Clutch',
    purpose: 'Everything done to the clutch.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'clutch.assess' },
    ],
    checks: [
      'The clutch is back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
