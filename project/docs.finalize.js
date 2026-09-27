// Finish the records
(function (root) {
  'use strict';
  const procedure = {
    id: 'docs.finalize',
    kind: 'task',
    after: ['check.success'],
    title: 'Finish the records',
    purpose: 'Measurement log, parts log, work log, photo index and changelog all current. Backlog B-061.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Bring every log up to date.',
      'Tag the final commit.',
    ],
    checks: [
      'Every log complete through the last session.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
