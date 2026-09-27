// Fit the seat and side covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'bodywork.install',
    kind: 'task',
    builds: ['seat', 'side-covers'],
    after: ['tank.install', 'seat.find', 'covers.find'],
    title: 'Fit the seat and side covers',
    purpose: 'Put the bike back together outside.',
    requires: { tools: ['jis-drivers'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit the seat.',
      'Fit the side covers with new screws where the old ones are worn.',
    ],
    checks: [
      'Seat latched, both covers firm.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
