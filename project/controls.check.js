// Check the controls and cables
(function (root) {
  'use strict';
  const procedure = {
    id: 'controls.check',
    kind: 'task',
    status: 'open',
    builds: ['controls'],
    after: ['fork.rebuild', 'engine.install'],
    title: 'Check the controls and cables',
    purpose: 'Decide what the throttle, clutch and brake cables need, and set their free play.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
