// Gearbox, shifter and kickstart
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.gearbox',
    kind: 'plan',
    title: 'Gearbox, shifter and kickstart',
    purpose: 'Everything done to the gearbox, shifter and kickstart.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'gearbox.assess' },
    ],
    checks: [
      'The gearbox, shifter and kickstart are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
