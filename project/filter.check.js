// Check the air cleaner
(function (root) {
  'use strict';
  const procedure = {
    id: 'filter.check',
    kind: 'task',
    status: 'open',
    builds: ['air-cleaner'],
    after: ['carbs.install'],
    title: 'Check the air cleaner',
    purpose: 'Decide whether the air cleaner case and element are cleaned or replaced.',
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
