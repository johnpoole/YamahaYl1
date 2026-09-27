// Headlight, speedometer and tail light
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.lights',
    kind: 'plan',
    title: 'Headlight, speedometer and tail light',
    purpose: 'Everything done to the headlight, speedometer and tail light.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.headlight' },
      { call: 'lights.check' },
    ],
    checks: [
      'The headlight, speedometer and tail light are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
