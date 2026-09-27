// Rebuild the YL1
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.yl1',
    kind: 'plan',
    title: 'Rebuild the YL1',
    purpose: 'Get the YL1, engine {spec.serial}, running well and safe to ride, with every step recorded.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'section.bike' },
      { call: 'section.engine' },
      { call: 'section.fuel' },
      { call: 'section.electrical' },
      { call: 'section.chassis' },
      { call: 'section.body' },
      { call: 'section.shop' },
    ],
    checks: [
      'Every success criterion in PRD.md is checked off.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
