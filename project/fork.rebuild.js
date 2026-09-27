// Service the forks
(function (root) {
  'use strict';
  const procedure = {
    id: 'fork.rebuild',
    kind: 'task',
    builds: ['front-end'],
    after: ['parts.order'],
    title: 'Service the forks',
    purpose: 'Fresh oil in both legs, and new seals only where they leak.',
    requires: { tools: ['sockets', 'bearing-drivers'], materials: [{ id: 'sae30-oil', qty: 0.26 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Look for oil on each fork tube, and push the front end down hard. Weeping seals or a fork that bottoms mean the oil is gone.',
      'Drain the old oil from each leg.',
      'If a seal leaks, take that leg off, drive a new seal in square with the lip toward the oil, and refit the leg.',
      'Fill each leg with {spec.forkOil}.',
    ],
    checks: [
      'Both legs hold the same oil, no weeping at the seals.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
