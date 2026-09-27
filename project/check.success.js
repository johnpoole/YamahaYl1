// Check every success criterion
(function (root) {
  'use strict';
  const procedure = {
    id: 'check.success',
    kind: 'task',
    after: ['service.post-break-in'],
    title: 'Check every success criterion',
    purpose: 'Walk through every checkbox in PRD.md. Backlog B-060.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Go through the engine, carburetion, electrical, chassis and documentation criteria one by one.',
      'Fix anything that fails before ticking it.',
    ],
    checks: [
      'Every criterion ticked.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
