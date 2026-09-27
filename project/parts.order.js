// Order and receive the parts
(function (root) {
  'use strict';
  const procedure = {
    id: 'parts.order',
    kind: 'task',
    after: ['parts.list'],
    title: 'Order and receive the parts',
    purpose: 'Buy everything on the parts list. Backlog B-030.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Order the critical parts first: seals, gaskets, pistons and rings, carb kits, points.',
      'Search NOS and cross-reference models for anything Yamaha no longer makes.',
      'Log each order with its number, supplier, price and date.',
      'Check each part against the list as it arrives.',
    ],
    checks: [
      'Every part on the list is on the shelf and checked.',
    ],
    safety: [],
    estimate: { hours: 3, waitDays: 21, note: 'Many parts are new old stock from overseas; allow three weeks for them to arrive.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
