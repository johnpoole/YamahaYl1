// Inspect the frame
(function (root) {
  'use strict';
  const procedure = {
    id: 'frame.inspect',
    kind: 'task',
    after: ['strip.tank-seat', 'inspect.frame-inside'],
    title: 'Inspect the frame',
    purpose: 'Look for cracks and rust damage before building on it. Backlog B-019.',
    requires: { tools: ['caliper'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'The YL1 frame is pressed steel. Clean the paint and rust from the seams and joints you need to see.',
      'Check the steering head, the engine mounts and the swingarm pivot for cracks.',
      'Use dye penetrant on any joint you are not sure of.',
      'Measure how deep any pitting goes. Over 1 mm in a structural area needs a welder.',
      'Sight down the frame to check the wheels will line up.',
    ],
    checks: [
      'A written note on each joint, the rust found and whether the frame is sound.',
    ],
    safety: [
      'Any crack goes to a welder before the bike is ridden.',
    ],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
