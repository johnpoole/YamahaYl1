// Side covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.side-covers',
    kind: 'plan',
    title: 'Side covers',
    purpose: 'Everything done to the side covers.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'covers.find' },
    ],
    checks: [
      'The side covers are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
