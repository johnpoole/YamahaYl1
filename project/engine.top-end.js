// Build the top end
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.top-end',
    kind: 'task',
    after: ['engine.bore', 'engine.bottom-end'],
    title: 'Build the top end',
    purpose: 'Fit pistons, rings, cylinders and heads. Backlog B-034.',
    requires: { tools: ['ring-compressor', 'circlip-pliers', 'torque-wrench', 'feeler-gauges'], materials: [{ id: 'gaskets', qty: 1 }, { id: 'two-stroke-oil', qty: 0.25 }], skills: ['skill.clean-assembly', 'skill.torque', 'skill.twin-matching'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check each ring end gap in its own bore: {spec.ringGap} mm.',
      'Fit the rings over their locating pins.',
      'Fit each piston with new circlips, arrow to the exhaust.',
      'Oil the bores and rings with two-stroke oil.',
      'Fit new base gaskets and slide the cylinders on with the ring compressor.',
      'Fit new head gaskets and the heads. Torque the nuts in a crossing pattern to {spec.headTorque}.',
    ],
    checks: [
      'Both head nuts sets at torque, engine turns over with even compression by hand.',
    ],
    safety: [],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
