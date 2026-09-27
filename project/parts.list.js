// Compile the parts list
(function (root) {
  'use strict';
  const procedure = {
    id: 'parts.list',
    kind: 'task',
    after: [
      'check.voltage',
      'check.autolube',
      'measure.bores',
      'measure.crank',
      'carbs.assess',
      'ignition.assess',
      'wiring.inspect',
      'brakes.measure',
      'tires.check',
      'frame.inspect',
      'clutch.assess',
      'engine.covers-check',
      'chain.check',
    ],
    title: 'Compile the parts list',
    purpose: 'Turn the assessment into one list to order from. Backlog B-021.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Put every part the assessment called for into the parts log.',
      'Add the OEM number for each, and the cross-reference models to search.',
      'Size the pistons and rings from the bore decision, and the battery and bulbs from the voltage check.',
    ],
    checks: [
      'Every part listed with an OEM number or an equivalent.',
    ],
    safety: [],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
