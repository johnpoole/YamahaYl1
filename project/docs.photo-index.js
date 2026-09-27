// Annotate the photo index
(function (root) {
  'use strict';
  const procedure = {
    id: 'docs.photo-index',
    kind: 'task',
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
