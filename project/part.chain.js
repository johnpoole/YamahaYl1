// Chain, sprockets and chain case
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.chain',
    kind: 'plan',
    title: 'Chain, sprockets and chain case',
    purpose: 'Everything done to the chain, sprockets and chain case.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'chain.check' },
    ],
    checks: [
      'The chain, sprockets and chain case are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
