// Fit the tank, seat and side covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'bodywork.install',
    kind: 'task',
    builds: ['tank', 'seat', 'side-covers'],
    after: ['tank.restore', 'electrical.restore', 'carbs.install'],
    title: 'Fit the tank, seat and side covers',
    purpose: 'Put the bike back together outside.',
    requires: { tools: ['jis-drivers'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit the tank and connect the fuel line.',
      'Fit the seat.',
      'Fit the side covers with new screws where the old ones are worn.',
    ],
    checks: [
      'No fuel leak at the petcock or lines.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
