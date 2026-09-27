// Service after the first rides
(function (root) {
  'use strict';
  const procedure = {
    id: 'service.post-break-in',
    kind: 'task',
    after: ['ride.break-in'],
    title: 'Service after the first rides',
    purpose: 'Re-set everything that settles once the engine has run hot.',
    requires: { tools: ['torque-wrench', 'feeler-gauges', 'timing-light', 'point-file'], materials: [{ id: 'sae30-oil', qty: 0.75 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Re-torque the head nuts to {spec.headTorque} when cold.',
      'Dress the points with the point file if they have pitted, then re-check both gaps and the timing.',
      'Read both plugs. They should match and be light tan.',
      'Drain the gearbox while it is warm and refill it with {spec.gearboxOil}. The old oil carries the break-in wear.',
      'If the engine runs on premix, go back to the normal ratio.',
    ],
    checks: [
      'Torque, gaps and timing in spec, plugs matched, fresh gearbox oil.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
