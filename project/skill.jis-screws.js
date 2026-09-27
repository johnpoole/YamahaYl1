// Turn JIS screws without rounding them
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.jis-screws',
    kind: 'skill',
    title: 'Turn JIS screws without rounding them',
    purpose: 'The YL1 uses JIS cross-head screws, not Phillips.',
    requires: { tools: ['jis-drivers', 'impact-driver'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Use a JIS driver that fills the head.',
      'Press hard and turn slowly.',
      'If a screw will not turn, use the impact driver rather than more force.',
    ],
    checks: [],
    safety: [
      'A Phillips driver will round a JIS screw.',
    ],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
