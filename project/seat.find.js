// Find a seat
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/seat.find.js');
  const procedure = {
    id: 'seat.find',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find a seat',
    purpose: 'The bike was found without its seat. Find the original seat or a replacement.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Search the garage and storage for the original seat.',
      'If not found, find a replacement from the parts list, diagram C-10 at CMSNL, or a used YL1 seat.',
    ],
    checks: [
      'A seat in hand that fits the frame.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
