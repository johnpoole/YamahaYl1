// Lights, horn and speedometer
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.lights',
    kind: 'plan',
    title: 'Lights, horn and speedometer',
    purpose: 'Everything done to the lights, horn and speedometer.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.headlight' },
      { call: 'lights.check' },
    ],
    checks: [
      'The lights, horn and speedometer are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
