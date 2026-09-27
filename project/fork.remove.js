// Take the forks off
(function (root) {
  'use strict';
  const procedure = {
    id: 'fork.remove',
    kind: 'task',
    removes: ['front-end'],
    after: ['strip.wheels'],
    title: 'Take the forks off',
    purpose: 'The fork seals and oil need changing.',
    requires: { tools: ['sockets', 'wrenches'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take off the handlebars and hang them clear.',
      'Loosen the pinch bolts and slide each fork leg out.',
      'Drain the old oil from each leg.',
    ],
    checks: [
      'Both legs out and drained.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
