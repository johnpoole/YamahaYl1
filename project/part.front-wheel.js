// Front wheel, hub, brake and tire
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.front-wheel',
    kind: 'plan',
    title: 'Front wheel, hub, brake and tire',
    purpose: 'Everything done to the front wheel, hub, brake and tire.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'strip.front-wheel' },
      { call: 'wheel.front-rebuild' },
    ],
    checks: [
      'The front wheel, hub, brake and tire are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
