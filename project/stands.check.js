// Check the stands, footrests and brake pedal
(function (root) {
  'use strict';
  const procedure = {
    id: 'stands.check',
    kind: 'task',
    builds: ['main-stand'],
    after: ['frame.treat'],
    title: 'Check the stands, footrests and brake pedal',
    purpose: 'Check the main stand, side stand, footrests and brake pedal.',
    requires: { tools: ['sockets', 'wrenches'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check the main stand and side stand pivots for wear, and their springs for pull.',
      'Grease the pivots.',
      'Check the footrest rubbers and brackets. The footrest parts in the parts list are for later bikes, so match any replacement to this one.',
      'Check the brake pedal pivot and rod, and grease the pivot.',
      'Set rear brake pedal free play to {spec.brakePlay} mm.',
    ],
    checks: [
      'Both stands hold and spring back, the footrests are firm and the pedal moves freely with free play in spec.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
