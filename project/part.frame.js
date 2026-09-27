// Frame
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.frame',
    kind: 'plan',
    title: 'Frame',
    purpose: 'Everything done to the frame.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'frame.number' },
      { call: 'inspect.frame-inside' },
      { call: 'frame.inspect' },
      { call: 'frame.treat' },
    ],
    checks: [
      'The frame is back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
