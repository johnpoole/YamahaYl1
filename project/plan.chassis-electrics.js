// Chassis and electrics
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/plan.chassis-electrics.js');
  const procedure = {
    id: 'plan.chassis-electrics',
    kind: 'plan',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Chassis and electrics',
    purpose: 'Forks, suspension, wheels, tank, wiring and the bodywork back on.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
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
