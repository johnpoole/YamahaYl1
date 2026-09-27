// Battery and rectifier
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.charging',
    kind: 'plan',
    title: 'Battery and rectifier',
    purpose: 'Everything done to the battery and rectifier.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'check.voltage' },
      { call: 'charging.test' },
    ],
    checks: [
      'The battery and rectifier are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
