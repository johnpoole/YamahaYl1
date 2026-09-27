// Check the bores, pistons and rings
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/measure.bores.js');
  const procedure = {
    id: 'measure.bores',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['strip.top-end'],
    title: 'Check the bores, pistons and rings',
    purpose: 'Decide whether the old pistons and rings go back in, or a cylinder goes to a machine shop.',
    requires: { tools: ['feeler-gauges'], materials: [], skills: ['skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean each bore and piston.',
      'Look at each bore and piston skirt in good light. Scoring deep enough to catch a fingernail means that cylinder is out.',
      'Check both rings on each piston move freely in their grooves, and every ring locating pin is there.',
      'Slide each ring into its own bore, square it with the piston crown, and measure the end gap with the feeler gauges: {spec.ringGap} mm.',
      'Measure each ring in its groove with the feeler gauges: {spec.ringGroove} mm.',
      'If a ring gap or groove clearance is over the limit, put new rings on the parts list.',
      'If a bore is scored, that cylinder goes to a machine shop to be bored for a new piston and rings: put them and the machining on the parts list.',
    ],
    checks: [
      'Every ring gap and groove clearance recorded, and a reuse or machine decision for each cylinder.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
