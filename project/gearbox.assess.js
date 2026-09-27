// Assess the gearbox, shifter and kickstart
(function (root) {
  'use strict';
  const procedure = {
    id: 'gearbox.assess',
    kind: 'task',
    after: ['engine.split-cases'],
    title: 'Assess the gearbox, shifter and kickstart',
    purpose: 'Inspect the gears, shift forks and kickstarter while the cases are apart.',
    requires: { tools: ['caliper'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'With the cases split, leave the gears and shafts in the left case half.',
      'Check every gear for chipped or broken teeth and for rounded dogs.',
      'Check each shift fork for wear or blueing where it rides in its gear groove, and that it is straight.',
      'Turn the shafts in their bearings and feel for roughness.',
      'Check the kickstarter gear, ratchet and return spring.',
      'Add every worn part to the parts list before the cases go back together.',
    ],
    checks: [
      'Every gear, fork and kickstarter part judged sound or listed for replacement.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
