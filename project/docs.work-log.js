// Write the work log for the strip-down
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/docs.work-log.js');
  const procedure = {
    id: 'docs.work-log',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Write the work log for the strip-down',
    purpose: 'Record the November 2024 to January 2025 sessions from the photos. Backlog B-006.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Group the photos by date.',
      'For each date, write what was done and the state the bike was left in.',
    ],
    checks: [
      'A dated entry in the work log for each photo session.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
