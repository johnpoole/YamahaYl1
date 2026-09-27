// Strip-down
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.strip-down',
    kind: 'plan',
    oneJobADay: true,
    title: 'Strip-down',
    purpose: 'The work already done, in the order of its photos.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'record.as-found' },
      { call: 'strip.headlight' },
      { call: 'strip.magneto-cover' },
      { call: 'strip.carbs' },
      { call: 'shop.stand' },
      { call: 'engine.remove' },
      { call: 'strip.top-end' },
      { call: 'inspect.frame-inside' },
    ],
    checks: [
      'The engine is out with its top end off, and the frame is on the stand, as in the last photos.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
