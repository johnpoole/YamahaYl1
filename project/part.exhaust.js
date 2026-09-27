// Exhaust pipes and mufflers
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.exhaust',
    kind: 'plan',
    title: 'Exhaust pipes and mufflers',
    purpose: 'Everything done to the exhaust pipes and mufflers.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'exhaust.clean' },
      { call: 'exhaust.install' },
    ],
    checks: [
      'The exhaust pipes and mufflers are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
