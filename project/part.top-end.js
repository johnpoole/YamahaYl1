// Cylinders, heads, pistons and rings
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.top-end',
    kind: 'plan',
    title: 'Cylinders, heads, pistons and rings',
    purpose: 'Everything done to the cylinders, heads, pistons and rings.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.top-end' },
      { call: 'measure.bores' },
      { call: 'engine.top-end' },
    ],
    checks: [
      'The cylinders, heads, pistons and rings are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
