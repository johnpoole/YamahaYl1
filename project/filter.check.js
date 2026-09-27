// Check the air cleaner
(function (root) {
  'use strict';
  const procedure = {
    id: 'filter.check',
    kind: 'task',
    builds: ['air-cleaner'],
    after: ['carbs.install'],
    title: 'Check the air cleaner',
    purpose: 'Clean the air cleaner and make sure it seals.',
    requires: { tools: ['jis-drivers'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take off the air cleaner cap and take out the element.',
      'Clean the case inside.',
      'Clean the element, or replace it if it is torn or will not come clean.',
      'Check the seals and the hoses to both carbs for cracks.',
      'Refit it so no air can pass around the element.',
    ],
    checks: [
      'A clean element, sealed at every joint.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
