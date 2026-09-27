// Find the fuel tank
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/tank.find.js');
  const procedure = {
    id: 'tank.find',
    kind: 'task',
    status: 'open',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find the fuel tank',
    purpose: 'The bike was found without its tank fitted. Find the tank or a replacement before it can be restored.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
