// Check every light
(function (root) {
  'use strict';
  const procedure = {
    id: 'lights.check',
    kind: 'task',
    after: ['electrical.restore'],
    title: 'Check every light',
    purpose: 'Check every light, the horn and the switches work.',
    requires: { tools: ['multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check every bulb matches the system voltage.',
      'Check the headlight high and low beam, the tail light, the brake light from both the lever and the pedal, the neutral light and the horn.',
      'Check the fuses.',
      'Trace any fault back to its bulb, switch, connector or ground.',
    ],
    checks: [
      'Every light, the horn and the brake light switches work.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
