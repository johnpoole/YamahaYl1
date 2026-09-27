// M4: Break-in
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.m4-break-in',
    kind: 'plan',
    window: { from: 900 },
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
