// Find a seat
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/seat.find.js');
  const procedure = {
    id: 'seat.find',
    kind: 'task',
    status: 'open',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find a seat',
    purpose: 'The bike was found without its seat. Find the seat or a replacement.',
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
