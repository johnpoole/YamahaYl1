// Take off the seat and fuel tank
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.tank-seat',
    kind: 'task',
    removes: ['tank', 'seat'],
    after: ['shop.stand'],
    title: 'Take off the seat and fuel tank',
    purpose: 'Get into the frame and the tank to see the rust.',
    requires: { tools: ['jis-drivers', 'sockets', 'extinguisher'], materials: [], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Drain the tank into a sealed can.',
      'Take off the seat.',
      'Disconnect the fuel line and lift the tank off.',
      'Look inside the tank with a light and photograph the rust.',
    ],
    checks: [
      'Tank empty and off, inside photographed.',
    ],
    safety: [
      'Do not blow air into the tank. Fuel vapour and a spark start fires.',
    ],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
