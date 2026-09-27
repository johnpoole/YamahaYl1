// Test the charging
(function (root) {
  'use strict';
  const procedure = {
    id: 'charging.test',
    kind: 'task',
    status: 'open',
    after: ['start.first'],
    title: 'Test the charging',
    purpose: 'Confirm the rectifier charges the battery at 6.5–7.5 V at 3000 rpm, the figure in the success criteria.',
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
