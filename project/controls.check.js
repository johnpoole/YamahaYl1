// Check the controls and cables
(function (root) {
  'use strict';
  const procedure = {
    id: 'controls.check',
    kind: 'task',
    builds: ['controls'],
    after: ['fork.rebuild', 'engine.install'],
    title: 'Check the controls and cables',
    purpose: 'Set the levers, grips and cables so every control works with the right free play.',
    requires: { tools: ['wrenches', 'jis-drivers'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Check each cable for frayed strands and kinks, and replace any that are damaged.',
      'Oil each cable and make sure it runs free through its whole travel.',
      'Set clutch lever free play to {spec.clutchPlay} mm with the adjusting screw under the rubber plug in the left cover and the cable guide.',
      'Set front brake lever free play to {spec.brakePlay} mm.',
      'Check the throttle snaps shut from full open.',
      'Check the grips and levers are tight and not cracked.',
    ],
    checks: [
      'Every control works, with free play in spec.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
