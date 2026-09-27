// Take off the rear wheel and chain
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/strip.rear-wheel.js');
  const procedure = {
    id: 'strip.rear-wheel',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    removes: ['rear-wheel', 'chain'],
    after: ['shop.stand'],
    title: 'Take off the rear wheel and chain',
    purpose: 'Get to the rear brake, bearings, tire and chain.',
    requires: { tools: ['sockets', 'wrenches', 'stands'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check the bike sits firm on the stand with the rear wheel clear.',
      'Split the chain at its master link and disconnect the rear brake rod.',
      'Loosen the rear axle and drop the rear wheel out.',
    ],
    checks: [
      'Rear wheel and chain off, axle and spacers bagged in order.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
