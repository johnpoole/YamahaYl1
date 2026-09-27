// Autolube pump, oil tank and lines
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.autolube',
    kind: 'plan',
    title: 'Autolube pump, oil tank and lines',
    purpose: 'Everything done to the autolube pump, oil tank and lines.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'check.autolube' },
      { call: 'autolube.rebuild' },
    ],
    checks: [
      'The autolube pump, oil tank and lines are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
