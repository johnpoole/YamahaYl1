// Electrical
(function (root) {
  'use strict';
  const procedure = {
    id: 'section.electrical',
    kind: 'plan',
    title: 'Electrical',
    purpose: 'Electrical: its parts and the jobs that span them.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'part.ignition' },
      { call: 'part.charging' },
      { call: 'part.wiring' },
      { call: 'part.lights' },
      { call: 'electrical.restore' },
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
