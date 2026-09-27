// Chassis and electrics
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.chassis-electrics',
    kind: 'plan',
    window: { from: 690 },
    title: 'Chassis and electrics',
    purpose: 'Forks, suspension, wheels, tank, wiring and the bodywork back on.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'fork.remove' },
      { call: 'fork.rebuild' },
      { call: 'rear.suspension' },
      { call: 'wheels.rebuild' },
      { call: 'tank.restore' },
      { call: 'electrical.restore' },
      { call: 'bodywork.install' },
    ],
    checks: [
      'The chassis and electrics meet the success criteria in PRD.md.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
