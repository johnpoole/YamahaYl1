// Measure and record
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.measure',
    kind: 'skill',
    title: 'Measure and record',
    purpose: 'Every measurement goes in the log with where and how it was taken.',
    requires: { tools: ['caliper', 'micrometer'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean the part and the tool before measuring.',
      'Take each reading twice.',
      'Write the reading, the place and the date in the measurement log at once.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
