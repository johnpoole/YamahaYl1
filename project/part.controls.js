// Throttle, clutch and brake cables
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.controls',
    kind: 'plan',
    title: 'Throttle, clutch and brake cables',
    purpose: 'Everything done to the throttle, clutch and brake cables.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'controls.check' },
    ],
    checks: [
      'The throttle, clutch and brake cables are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
