// Measure the brakes
(function (root) {
  'use strict';
  const procedure = {
    id: 'brakes.measure',
    kind: 'task',
    after: ['strip.front-wheel', 'strip.rear-wheel'],
    title: 'Measure the brakes',
    purpose: 'Check drums and shoes against their limits. Backlog B-018.',
    requires: { tools: ['caliper'], materials: [], skills: ['skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Measure each drum inside diameter and look for scoring.',
      'Measure the lining thickness on each shoe. Under 2 mm or down to the rivets means replace.',
      'Check the springs and the brake cams for wear.',
    ],
    checks: [
      'Drum diameters and lining thicknesses recorded front and rear.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
