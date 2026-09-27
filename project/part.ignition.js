// Magneto, points and condensers
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.ignition',
    kind: 'plan',
    title: 'Magneto, points and condensers',
    purpose: 'Everything done to the magneto, points and condensers.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.magneto-cover' },
      { call: 'ignition.assess' },
      { call: 'ignition.points' },
    ],
    checks: [
      'The magneto, points and condensers are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
