// Measure both bores
(function (root) {
  'use strict';
  const procedure = {
    id: 'measure.bores',
    kind: 'task',
    after: ['strip.top-end'],
    title: 'Measure both bores',
    purpose: 'Decide between honing and reboring. Backlog B-012.',
    requires: { tools: ['telescoping-gauges', 'micrometer'], materials: [], skills: ['skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean each bore.',
      'Measure at three depths: 10 mm from the top, the middle, and 10 mm from the bottom of ring travel.',
      'At each depth measure along the crank axis and across it.',
      'Record all six readings for each bore.',
      'Compare with the standard bore of {spec.bore} mm: within 0.05 mm hone, beyond that or scored rebore; taper over {spec.taper} mm means rebore.',
    ],
    checks: [
      'Twelve readings recorded, and a hone or rebore decision for each cylinder.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
