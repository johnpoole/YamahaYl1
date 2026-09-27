// Check the crank big ends
(function (root) {
  'use strict';
  const procedure = {
    id: 'measure.crank',
    kind: 'task',
    after: ['strip.top-end'],
    title: 'Check the crank big ends',
    purpose: 'Find out whether the cases must be split for the crank. Backlog B-014.',
    requires: { tools: ['feeler-gauges', 'dial-indicator'], materials: [], skills: ['skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Rock each connecting rod side to side and measure the side shake: {spec.bigEndShake} mm, replace over {spec.bigEndLimit} mm.',
      'Feel for any up-and-down play in the big end. Any at all means a worn bearing.',
      'Turn the crank slowly and feel the main bearings for roughness.',
    ],
    checks: [
      'Side shake recorded for both rods, and a note on radial play and main bearings.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
