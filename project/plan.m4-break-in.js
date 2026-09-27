// M4: Break-in
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/plan.m4-break-in.js');
  const procedure = {
    id: 'plan.m4-break-in',
    kind: 'plan',
    window: { from: design.dayOf(design.RIDING) },
    title: 'M4: Break-in',
    purpose: 'Ride the break-in once the roads are clear, and service after.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'ride.break-in' },
      { call: 'service.post-break-in' },
    ],
    checks: [
      'Break-in done and the post-break-in service complete.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
