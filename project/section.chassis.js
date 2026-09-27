// Frame, chassis and wheels
(function (root) {
  'use strict';
  const procedure = {
    id: 'section.chassis',
    kind: 'plan',
    title: 'Frame, chassis and wheels',
    purpose: 'Frame, chassis and wheels: its parts and the jobs that span them.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'part.frame' },
      { call: 'part.front-end' },
      { call: 'part.rear-suspension' },
      { call: 'part.front-wheel' },
      { call: 'part.rear-wheel' },
      { call: 'part.chain' },
      { call: 'part.controls' },
      { call: 'brakes.measure' },
      { call: 'tires.check' },
    ],
    checks: [
      'Every part of this section is done.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
