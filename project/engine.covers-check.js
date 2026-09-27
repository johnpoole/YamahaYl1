// Check the crankcase covers
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/engine.covers-check.js');
  const procedure = {
    id: 'engine.covers-check',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['engine.remove'],
    title: 'Check the crankcase covers',
    purpose: 'Check the left and right crankcase covers for cracks, stripped threads and worn screws.',
    requires: { tools: ['jis-drivers', 'impact-driver'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean both covers inside and out.',
      'Look for cracks, especially around the screw bosses.',
      'Check each screw hole thread; mark any that are stripped.',
      'Check the oil level gauge and the oil drain plug and its washer.',
      'Add a new cover gasket and any worn or chewed screws to the parts list.',
    ],
    checks: [
      'Both covers checked, and every needed gasket and screw on the parts list.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
