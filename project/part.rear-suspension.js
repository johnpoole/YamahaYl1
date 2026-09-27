// Swingarm and shocks
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.rear-suspension',
    kind: 'plan',
    title: 'Swingarm and shocks',
    purpose: 'Everything done to the swingarm and shocks.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.swingarm' },
      { call: 'rear.suspension' },
    ],
    checks: [
      'The swingarm and shocks are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
