// Look inside the frame
(function (root) {
  'use strict';
  const procedure = {
    id: 'inspect.frame-inside',
    kind: 'task',
    title: 'Look inside the frame',
    purpose: 'See how far rust has gone inside the pressed-steel frame.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Shine a light into the frame openings.',
      'Photograph the rust you can see.',
    ],
    checks: [
      'Photos of the inside of the frame.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
