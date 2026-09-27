// Check the Autolube pump
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/check.autolube.js');
  const procedure = {
    id: 'check.autolube',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Check the Autolube pump',
    purpose: 'Decide whether the engine runs on Autolube injection or premix. Backlog B-002.',
    requires: { tools: ['feeler-gauges', 'jis-drivers'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Turn the pump by hand and feel for smooth rotation.',
      'Check the drive gear meshes cleanly.',
      'Measure the plunger clearance: {spec.pumpClearance} mm.',
      'If the pump is seized or worn, write an ADR for running premix and plan to cap the injection ports.',
    ],
    checks: [
      'Pump judged good or not, and the decision written down.',
    ],
    safety: [
      'Never run the engine without oil delivery or premix.',
    ],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
