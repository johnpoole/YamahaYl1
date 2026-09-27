// Clean the fuel tank
(function (root) {
  'use strict';
  const procedure = {
    id: 'tank.restore',
    kind: 'task',
    after: ['tank.find', 'parts.order'],
    title: 'Clean the fuel tank',
    purpose: 'No rust left to reach the carbs.',
    requires: { tools: [], materials: [{ id: 'tank-kit', qty: 1 }], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Rinse the tank with the cleaner from the kit until no rust comes out.',
      'Dry it completely.',
      'If the inside is pitted, coat it with the sealer from the kit and let it cure.',
    ],
    checks: [
      'No loose rust inside.',
    ],
    safety: [
      'Work outside, away from flame.',
    ],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
