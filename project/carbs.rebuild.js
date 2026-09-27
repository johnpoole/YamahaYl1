// Rebuild both carbs
(function (root) {
  'use strict';
  const procedure = {
    id: 'carbs.rebuild',
    kind: 'task',
    after: ['carbs.assess', 'parts.order'],
    title: 'Rebuild both carbs',
    purpose: 'Clean passages and new wear parts, set up the same on both sides. Backlog B-035.',
    requires: { tools: ['jis-drivers', 'caliper'], materials: [{ id: 'carb-kits', qty: 2 }, { id: 'carb-cleaner', qty: 1 }], skills: ['skill.fuel-safety', 'skill.twin-matching'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Soak the metal parts and blow every passage through. Never push wire through a jet.',
      'Fit the new jets, needle, needle jet, float valve and O-rings from the kits.',
      'Set the needle clip to the {spec.clip}.',
      'Set the float level to {spec.floatLevel} mm on both carbs.',
      'Set both pilot screws to {spec.pilotTurns} turns out.',
    ],
    checks: [
      'Light shows through every passage, float levels match, both carbs set the same.',
    ],
    safety: [],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
