// Crankcase covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.case-covers',
    kind: 'plan',
    title: 'Crankcase covers',
    purpose: 'Everything done to the crankcase covers.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'engine.covers-check' },
    ],
    checks: [
      'The crankcase covers are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
