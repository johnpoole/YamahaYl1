// Crankcases, crankshaft and crank seals
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.bottom-end',
    kind: 'plan',
    title: 'Crankcases, crankshaft and crank seals',
    purpose: 'Everything done to the crankcases, crankshaft and crank seals.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'measure.crank' },
      { call: 'engine.split-cases' },
      { call: 'engine.bottom-end' },
    ],
    checks: [
      'The crankcases, crankshaft and crank seals are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
