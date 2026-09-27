// Ride the break-in
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/ride.break-in.js');
  const procedure = {
    id: 'ride.break-in',
    kind: 'task',
    window: { from: design.dayOf(design.RIDING) },
    removes: ['stand'],
    after: ['start.first'],
    title: 'Ride the break-in',
    purpose: 'Seat the rings over {breakIn.km} km. Backlog B-050.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take the bike off the stand.',
      'First 20 km: vary the throttle, under a third open, cool down every 5 to 10 km.',
      '20 to 100 km: up to half throttle, brief bursts to two thirds.',
      '100 to {breakIn.km} km: build toward full throttle, no long full-throttle runs.',
    ],
    checks: [
      '{breakIn.km} km ridden with no seizure, no leak and both cylinders firing.',
    ],
    safety: [
      'Ride only once the brakes, tires and lights pass their checks.',
    ],
    estimate: { hours: 12 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
