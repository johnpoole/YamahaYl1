// Chain and sprockets
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.chain',
    kind: 'plan',
    title: 'Chain and sprockets',
    purpose: 'Everything done to the chain and sprockets.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'chain.check' },
    ],
    checks: [
      'The chain and sprockets are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
