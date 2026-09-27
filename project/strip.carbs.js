// Take off the carburetors
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.carbs',
    kind: 'task',
    after: ['strip.magneto-cover'],
    removes: ['carbs'],
    title: 'Take off the carburetors',
    purpose: 'Get the carbs to the bench for assessment.',
    requires: { tools: ['jis-drivers', 'sockets', 'extinguisher'], materials: [], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Turn the petcock off and set a drain pan under the carbs.',
      'Drain each float bowl.',
      'Unscrew each top cap and lift out the slide and needle on its cable. Note the needle clip groove.',
      'Loosen the manifold clamps and pull each carb off. Label it left or right.',
      'Plug the manifolds with clean rag.',
    ],
    checks: [
      'Both carbs on the bench, labelled left and right, no fuel spilled.',
    ],
    safety: [
      'No flame near fuel. Keep the extinguisher in reach.',
    ],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
