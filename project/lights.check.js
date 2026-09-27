// Check every light
(function (root) {
  'use strict';
  const procedure = {
    id: 'lights.check',
    kind: 'task',
    status: 'open',
    after: ['electrical.restore'],
    title: 'Check every light',
    purpose: 'Decide what the headlight, tail and brake light and any signals need, and check each works.',
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
