// Check the crankcase covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.covers-check',
    kind: 'task',
    status: 'open',
    after: ['engine.remove'],
    title: 'Check the crankcase covers',
    purpose: 'Decide what the left and right crankcase covers need: gaskets, screws, and any crack or stripped thread.',
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
