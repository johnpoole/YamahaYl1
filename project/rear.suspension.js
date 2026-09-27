// Service the swingarm and shocks
(function (root) {
  'use strict';
  const procedure = {
    id: 'rear.suspension',
    kind: 'task',
    builds: ['rear-suspension'],
    after: ['strip.wheels'],
    title: 'Service the swingarm and shocks',
    purpose: 'Check the shocks and bushes, and replace the shocks as a pair if they leak.',
    requires: { tools: ['sockets'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Look for oil on each shock shaft.',
      'Check the springs for sag.',
      'Rock the swingarm to feel for worn pivot bushes.',
      'Replace shocks only as a matched pair.',
    ],
    checks: [
      'No leaking shock, no play in the swingarm pivot.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
