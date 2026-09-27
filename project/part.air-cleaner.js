// Air cleaner
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.air-cleaner',
    kind: 'plan',
    title: 'Air cleaner',
    purpose: 'Everything done to the air cleaner.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'filter.check' },
    ],
    checks: [
      'The air cleaner is back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
