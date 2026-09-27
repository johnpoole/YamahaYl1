// Check the tires
(function (root) {
  'use strict';
  const procedure = {
    id: 'tires.check',
    kind: 'task',
    after: ['strip.front-wheel', 'strip.rear-wheel'],
    title: 'Check the tires',
    purpose: 'Old rubber fails whatever the tread looks like. Backlog B-020.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Read the DOT date code on each tire.',
      'Look for cracks in the sidewalls and tread.',
      'Mark any tire over 6 years old for replacement: {spec.tire} both wheels.',
    ],
    checks: [
      'Both tire ages recorded and a replace-or-keep decision for each.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
