// Take off both wheels
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.wheels',
    kind: 'task',
    removes: ['front-wheel', 'rear-wheel'],
    after: ['shop.stand'],
    title: 'Take off both wheels',
    purpose: 'Get to the brakes, bearings and tires.',
    requires: { tools: ['sockets', 'wrenches', 'stands'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check the bike sits firm on the stand with both wheels clear.',
      'Disconnect the front brake cable and loosen the front axle.',
      'Drop the front wheel out.',
      'Split the chain at its master link and disconnect the rear brake rod.',
      'Loosen the rear axle and drop the rear wheel out.',
    ],
    checks: [
      'Both wheels off, axles and spacers bagged in order.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
