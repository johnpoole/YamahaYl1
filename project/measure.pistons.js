// Measure the pistons and rings
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/measure.pistons.js');
  const procedure = {
    id: 'measure.pistons',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['strip.top-end'],
    title: 'Measure the pistons and rings',
    purpose: 'Check piston fit and ring wear. Backlog B-013.',
    requires: { tools: ['micrometer', 'feeler-gauges'], materials: [], skills: ['skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Measure each piston skirt across the thrust faces.',
      'Work out skirt clearance against its bore: spec {spec.pistonClearance} mm.',
      'Square each ring in its bore at the bottom of travel and measure the end gap: spec {spec.ringGap} mm.',
      'Measure each ring in its groove: spec {spec.ringGroove} mm.',
      'Check every ring locating pin is there.',
    ],
    checks: [
      'Clearances and gaps recorded for both pistons.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
