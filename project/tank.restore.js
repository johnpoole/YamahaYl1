// Clean and seal the fuel tank
(function (root) {
  'use strict';
  const procedure = {
    id: 'tank.restore',
    kind: 'task',
    after: ['parts.order'],
    title: 'Clean and seal the fuel tank',
    purpose: 'No rust left to reach the carbs.',
    requires: { tools: [], materials: [{ id: 'tank-kit', qty: 1 }], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Rinse the tank with the cleaner from the kit until no rust comes out.',
      'Dry it completely.',
      'Coat the inside with the sealer and let it cure.',
    ],
    checks: [
      'No loose rust inside, the sealer cured hard.',
    ],
    safety: [
      'Work outside, away from flame.',
    ],
    estimate: { hours: 5, waitDays: 3, note: 'Allow three days for the sealer to cure.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
