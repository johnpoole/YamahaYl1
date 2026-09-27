// Strip and assess both carbs
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/carbs.assess.js');
  const procedure = {
    id: 'carbs.assess',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['strip.carbs'],
    title: 'Strip and assess both carbs',
    purpose: 'Find what the carbs need. Backlog B-015.',
    requires: { tools: ['jis-drivers'], materials: [{ id: 'carb-cleaner', qty: 1 }], skills: ['skill.fuel-safety'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take off each float bowl and note the gasket.',
      'Lift out the float and needle valve together.',
      'Take out the main and pilot jets and record the sizes stamped on them.',
      'Count the pilot screw turns as you take it out and record them.',
      'Shake each float and listen for fuel inside.',
      'Check the needle and needle jet for wear and the slide for binding.',
    ],
    checks: [
      'Jet sizes, pilot screw turns and the condition of each part recorded for both carbs.',
    ],
    safety: [
      'Keep rubber parts out of carb cleaner.',
    ],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
