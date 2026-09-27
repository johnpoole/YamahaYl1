// Work stand
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.stand',
    kind: 'plan',
    title: 'Work stand',
    purpose: 'Everything done to the work stand.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'shop.stand' },
    ],
    checks: [
      'The work stand is back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
