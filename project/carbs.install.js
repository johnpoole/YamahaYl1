// Fit the carbs
(function (root) {
  'use strict';
  const procedure = {
    id: 'carbs.install',
    kind: 'task',
    builds: ['carbs'],
    after: ['carbs.rebuild', 'engine.install'],
    title: 'Fit the carbs',
    purpose: 'Put the rebuilt carbs on with new fuel lines.',
    requires: { tools: ['jis-drivers'], materials: [{ id: 'fuel-hose', qty: 1.5 }], skills: ['skill.twin-matching'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit each carb to its manifold and tighten the clamp.',
      'Fit the slides and top caps.',
      'Adjust the cables so both slides lift at the same moment.',
      'Fit new fuel lines.',
    ],
    checks: [
      'Both slides lift together, no fuel line older than this job.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
