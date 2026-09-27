// Wiring harness and grounds
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.wiring',
    kind: 'plan',
    title: 'Wiring harness and grounds',
    purpose: 'Everything done to the wiring harness and grounds.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'wiring.inspect' },
    ],
    checks: [
      'The wiring harness and grounds are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
