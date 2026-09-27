// M2: Engine
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.m2-engine',
    kind: 'plan',
    window: { from: 690 },
    title: 'M2: Engine',
    purpose: 'Rebuild the engine and put it back in the frame.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'parts.order' },
      { call: 'engine.remove' },
      { call: 'engine.bore' },
      { call: 'engine.split-cases' },
      { call: 'engine.bottom-end' },
      { call: 'engine.top-end' },
      { call: 'carbs.rebuild' },
      { call: 'frame.treat' },
      { call: 'engine.install' },
      { call: 'ignition.points' },
      { call: 'carbs.install' },
      { call: 'exhaust.install' },
    ],
    checks: [
      'The engine is back in the frame with carbs, ignition and exhaust fitted.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
