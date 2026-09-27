// Check the chain and sprockets
(function (root) {
  'use strict';
  const procedure = {
    id: 'chain.check',
    kind: 'task',
    status: 'open',
    after: ['strip.rear-wheel'],
    title: 'Check the chain and sprockets',
    purpose: 'Measure the #420 chain for stretch and the sprockets for wear, and decide whether to replace them as a set.',
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
