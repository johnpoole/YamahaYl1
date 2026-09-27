// Engine
(function (root) {
  'use strict';
  const procedure = {
    id: 'section.engine',
    kind: 'plan',
    title: 'Engine',
    purpose: 'Engine: its parts and the jobs that span them.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'part.top-end' },
      { call: 'part.bottom-end' },
      { call: 'part.gearbox' },
      { call: 'part.clutch' },
      { call: 'part.autolube' },
      { call: 'part.exhaust' },
      { call: 'part.case-covers' },
      { call: 'engine.remove' },
      { call: 'engine.install' },
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
