// Fit the fuel tank
(function (root) {
  'use strict';
  const procedure = {
    id: 'tank.install',
    kind: 'task',
    builds: ['tank'],
    after: ['tank.restore', 'electrical.restore', 'carbs.install'],
    title: 'Fit the fuel tank',
    purpose: 'The restored tank on, with its fuel line.',
    requires: { tools: ['jis-drivers'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit the tank and connect the fuel line.',
    ],
    checks: [
      'No fuel leak at the petcock or lines.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
