// Go through the first-start checklist
(function (root) {
  'use strict';
  const procedure = {
    id: 'start.checklist',
    kind: 'task',
    after: [
      'ignition.points',
      'carbs.install',
      'exhaust.install',
      'bodywork.install',
      'wheel.front-rebuild',
      'wheel.rear-rebuild',
      'autolube.rebuild',
      'controls.check',
      'filter.check',
      'stands.check',
    ],
    title: 'Go through the first-start checklist',
    purpose: 'Nothing gets a kick until every item is checked. Backlog B-040.',
    requires: { tools: ['extinguisher'], materials: [{ id: 'two-stroke-oil', qty: 1 }, { id: 'fuel', qty: 5 }], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Fill and bleed the Autolube tank and lines, or mix premix if the pump was retired.',
      'Put fresh fuel in the tank and check for leaks.',
      'Check the plugs, timing, carb settings and exhaust are all as set.',
      'Check the battery is charged.',
      'Put the extinguisher in reach.',
    ],
    checks: [
      'Every item in the first-start checklist in 07_Break_In_and_Tuning.md is ticked.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
