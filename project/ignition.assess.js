// Assess the points and timing marks
(function (root) {
  'use strict';
  const procedure = {
    id: 'ignition.assess',
    kind: 'task',
    after: ['strip.magneto-cover'],
    title: 'Assess the points and timing marks',
    purpose: 'Find what the ignition needs. Backlog B-016.',
    requires: { tools: ['feeler-gauges', 'multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check both sets of points for pitting and the rubbing blocks for wear.',
      'Measure each points gap at full opening.',
      'Check the timing marks on the flywheel and case can be read.',
      'Measure each stator coil. An open circuit means a failed coil.',
    ],
    checks: [
      'Points condition, gaps, coil readings and mark legibility recorded.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
