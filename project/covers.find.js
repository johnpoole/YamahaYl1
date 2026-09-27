// Find the side covers
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/covers.find.js');
  const procedure = {
    id: 'covers.find',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find the side covers',
    purpose: 'The bike was found without its side covers. Find the originals or replacements.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Search the garage and storage for the original side covers.',
      'If not found, find replacements from the parts list, diagram C-01 at CMSNL, or used YL1 covers.',
    ],
    checks: [
      'Both side covers in hand.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
