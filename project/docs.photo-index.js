// Annotate the photo index
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/docs.photo-index.js');
  const procedure = {
    id: 'docs.photo-index',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Annotate the photo index',
    purpose: 'Give every photo a date, a system and a description. Backlog B-005.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Add date, system and description columns to the photo index.',
      'Fill them in for all 16 photos.',
    ],
    checks: [
      'Every row has a date, a system and a description.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
