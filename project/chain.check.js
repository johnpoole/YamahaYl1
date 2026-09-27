// Check the chain and sprockets
(function (root) {
  'use strict';
  const procedure = {
    id: 'chain.check',
    kind: 'task',
    after: ['strip.rear-wheel'],
    title: 'Check the chain and sprockets',
    purpose: 'Decide whether the chain and sprockets are reused or replaced as a set.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean the chain and lay it flat.',
      'Look for stiff links, rust and cracked side plates.',
      'Check the sprocket teeth for hooking or thinning.',
      'Fit a replacement {spec.chainSize} chain and sprockets as a set if either is worn, and add them to the parts list.',
    ],
    checks: [
      'The chain and sprockets are judged fit to reuse or listed for replacement.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
