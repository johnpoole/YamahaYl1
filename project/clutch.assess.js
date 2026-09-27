// Assess the clutch
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/clutch.assess.js');
  const procedure = {
    id: 'clutch.assess',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['engine.remove'],
    title: 'Assess the clutch',
    purpose: 'Measure the clutch plates and springs and decide what the clutch needs.',
    requires: { tools: ['jis-drivers', 'impact-driver', 'caliper'], materials: [], skills: ['skill.jis-screws', 'skill.measure'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take off the engine right side cover. The clutch sits on the right end of the transmission input shaft.',
      'Take out the spring screws and lift off the pressure plate and springs.',
      'Measure the free length of each clutch spring. Standard is {spec.clutchSpring} mm; renew any that is 1 mm or more shorter.',
      'Measure the thickness of each friction disc. Standard is 4 mm; renew any thinner than {spec.clutchDiscMin} mm.',
      'Check the steel plates for warping or blue heat marks, and the drum slots and hub splines for notches.',
      'Write every reading down and add what must be renewed to the parts list.',
    ],
    checks: [
      'Every spring and friction disc measured and recorded, and a keep or renew decision for each.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
