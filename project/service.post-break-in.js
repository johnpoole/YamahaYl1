// Service after break-in
(function (root) {
  'use strict';
  const procedure = {
    id: 'service.post-break-in',
    kind: 'task',
    after: ['ride.break-in'],
    title: 'Service after break-in',
    purpose: 'Re-set everything that settles in the first {breakIn.km} km. Backlog B-051.',
    requires: { tools: ['torque-wrench', 'feeler-gauges', 'timing-light'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Re-torque the head nuts to {spec.headTorque} when cold.',
      'Re-check both points gaps and the timing.',
      'Read both plugs. They should match and be light tan.',
      'Change the Autolube oil or return premix to normal.',
    ],
    checks: [
      'Torque, gaps and timing in spec, plugs matched.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
