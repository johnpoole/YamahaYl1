// Torque in a crossing pattern
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.torque',
    kind: 'skill',
    title: 'Torque in a crossing pattern',
    purpose: 'Even clamping keeps heads and cases flat.',
    requires: { tools: ['torque-wrench'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Use the calibrated torque wrench, never feel.',
      'Tighten in a crossing pattern in two or three steps.',
      'Never exceed the figure on aluminium threads.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
