// Ride it in
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
    title: 'Ride it in',
    purpose: 'Easy first rides to shake out anything loose, and a full break-in only if new rings went in.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take the bike off the stand.',
      'Ride short, easy runs close to home under half throttle. After each, look for leaks and loose bolts.',
      'If new rings went in, ride the break-in: the first 20 km under a third throttle, cooling down every 5 to 10 km; 20 to 100 km up to half throttle; 100 to {breakIn.km} km building toward full throttle.',
    ],
    checks: [
      'The bike rides with no leak, no seizure and both cylinders firing, and stops straight.',
    ],
    safety: [
      'Ride only once the brakes, tires and lights pass their checks.',
    ],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
