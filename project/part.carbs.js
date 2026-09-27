// Carburetors
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.carbs',
    kind: 'plan',
    title: 'Carburetors',
    purpose: 'Everything done to the carburetors.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.carbs' },
      { call: 'carbs.assess' },
      { call: 'carbs.rebuild' },
      { call: 'carbs.install' },
    ],
    checks: [
      'The carburetors are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
