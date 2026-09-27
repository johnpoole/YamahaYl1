// Check the stands, footrests and brake pedal
(function (root) {
  'use strict';
  const procedure = {
    id: 'stands.check',
    kind: 'task',
    status: 'open',
    builds: ['main-stand'],
    after: ['frame.treat'],
    title: 'Check the stands, footrests and brake pedal',
    purpose: 'Decide what the main stand, side stand, footrests, rubbers and brake pedal and rod need.',
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
