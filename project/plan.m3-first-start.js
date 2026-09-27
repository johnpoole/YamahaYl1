// M3: First start
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/plan.m3-first-start.js');
  const procedure = {
    id: 'plan.m3-first-start',
    kind: 'plan',
    window: { from: design.dayOf(design.RESUME) },
    title: 'M3: First start',
    purpose: 'Start the engine and set the idle.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'start.checklist' },
      { call: 'start.first' },
    ],
    checks: [
      'Both cylinders fire, no leaks.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
