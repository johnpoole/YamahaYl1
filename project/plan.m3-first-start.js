// M3: First start
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.m3-first-start',
    kind: 'plan',
    window: { from: 690 },
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
