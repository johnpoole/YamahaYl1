// Read the frame number
(function (root) {
  'use strict';
  const procedure = {
    id: 'frame.number',
    kind: 'task',
    status: 'open',
    title: 'Read the frame number',
    purpose: 'Read the frame number off the steering head and record it. It settles whether the bike is a YL1 or a YL1E, which decides the generator parts and the footrest parts.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
