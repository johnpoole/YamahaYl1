// Levers, grips and cables
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.controls',
    kind: 'plan',
    title: 'Levers, grips and cables',
    purpose: 'Everything done to the levers, grips and cables.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'controls.check' },
    ],
    checks: [
      'The levers, grips and cables are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
