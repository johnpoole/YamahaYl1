// M1: Assessment
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.m1-assessment',
    kind: 'plan',
    window: { from: 690 },
    title: 'M1: Assessment',
    purpose: 'Measure and assess every system, and turn what you find into a parts list.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'docs.work-log' },
      { call: 'docs.photo-index' },
      { call: 'check.voltage' },
      { call: 'check.autolube' },
      { call: 'measure.bores' },
      { call: 'measure.pistons' },
      { call: 'measure.crank' },
      { call: 'carbs.assess' },
      { call: 'ignition.assess' },
      { call: 'wiring.inspect' },
      { call: 'strip.tank-seat' },
      { call: 'strip.wheels' },
      { call: 'brakes.measure' },
      { call: 'tires.check' },
      { call: 'frame.inspect' },
      { call: 'parts.list' },
    ],
    checks: [
      'Every system assessed and the parts list final.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
