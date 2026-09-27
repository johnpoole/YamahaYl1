// Rebuild and refit the forks
(function (root) {
  'use strict';
  const procedure = {
    id: 'fork.rebuild',
    kind: 'task',
    builds: ['front-end'],
    after: ['fork.remove', 'parts.order'],
    title: 'Rebuild and refit the forks',
    purpose: 'New seals, fresh oil, and the forks back in the frame.',
    requires: { tools: ['sockets', 'bearing-drivers'], materials: [{ id: 'fork-seals', qty: 1 }, { id: 'sae30-oil', qty: 0.26 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check each tube for scoring or bending.',
      'Drive the new seals in square, lip toward the oil.',
      'Fill each leg with {spec.forkOil}.',
      'Refit the legs, the handlebars and the front fender.',
    ],
    checks: [
      'Both legs hold the same oil, no weeping at the seals.',
    ],
    safety: [],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
