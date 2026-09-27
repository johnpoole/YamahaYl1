// Take off the front wheel
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/strip.front-wheel.js');
  const procedure = {
    id: 'strip.front-wheel',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    removes: ['front-wheel'],
    after: ['shop.stand'],
    title: 'Take off the front wheel',
    purpose: 'Get to the front brake, bearings and tire.',
    requires: { tools: ['sockets', 'wrenches', 'stands'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check the bike sits firm on the stand with the front wheel clear.',
      'Disconnect the front brake cable and loosen the front axle.',
      'Drop the front wheel out.',
    ],
    checks: [
      'Front wheel off, axle and spacers bagged in order.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
