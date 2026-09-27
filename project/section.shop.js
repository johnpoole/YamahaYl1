// Workshop
(function (root) {
  'use strict';
  const procedure = {
    id: 'section.shop',
    kind: 'plan',
    title: 'Workshop',
    purpose: 'Workshop: its parts and the jobs that span them.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'part.stand' },
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
