// Check the swingarm and shocks
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/rear.suspension.js');
  const procedure = {
    id: 'rear.suspension',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    builds: ['rear-suspension'],
    title: 'Check the swingarm and shocks',
    purpose: 'Check the shocks and the swingarm pivot in place, and replace only what is worn.',
    requires: { tools: ['sockets'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Look for oil on each shock shaft.',
      'Check the springs for sag.',
      'Rock the swingarm side to side to feel for play at the pivot.',
      'Replace shocks only as a matched pair, and the pivot bushes only if there is play.',
    ],
    checks: [
      'No leaking shock, no play in the swingarm pivot.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
