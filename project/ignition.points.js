// Fit new points and set the timing
(function (root) {
  'use strict';
  const procedure = {
    id: 'ignition.points',
    kind: 'task',
    builds: ['ignition'],
    after: ['engine.install', 'ignition.assess', 'parts.order'],
    title: 'Fit new points and set the timing',
    purpose: 'New points and condensers on both sides, gapped and timed. Backlog B-036.',
    requires: { tools: ['feeler-gauges', 'timing-light', 'jis-drivers', 'dial-indicator', 'dial-adapter'], materials: [{ id: 'points-condensers', qty: 2 }, { id: 'spark-plugs', qty: 2 }], skills: ['skill.twin-matching'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fit new points and condensers for both cylinders.',
      'Set each points gap to {spec.pointsGap} mm at full opening.',
      'Screw the adapter into the spark plug hole and set the dial indicator on it to find top dead centre.',
      'Set static timing to {spec.timing} on each cylinder: the points just open when the piston is that far before top dead centre.',
      'Gap the new plugs to {spec.plugGap} mm and fit them.',
      'Fit the magneto cover.',
    ],
    checks: [
      'Both gaps and both timings the same and in spec.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
