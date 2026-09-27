// Fit the exhaust
(function (root) {
  'use strict';
  const procedure = {
    id: 'exhaust.install',
    kind: 'task',
    builds: ['exhaust'],
    after: ['engine.install'],
    title: 'Fit the exhaust',
    purpose: 'Never run a two-stroke without its pipes.',
    requires: { tools: ['sockets'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit new exhaust gaskets if the old ones are crushed.',
      'Fit the pipes and mufflers and tighten them.',
    ],
    checks: [
      'Both pipes tight at the port, mufflers mounted.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
