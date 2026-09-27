// Have the cylinders bored or honed
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.bore',
    kind: 'task',
    after: ['parts.order', 'measure.bores'],
    title: 'Have the cylinders bored or honed',
    purpose: 'Machine the bores to fit the new pistons. Backlog B-031.',
    requires: { tools: ['telescoping-gauges', 'micrometer-large'], materials: [{ id: 'machine-work', qty: 1 }, { id: 'pistons-rings', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take both cylinders and the new pistons to the machine shop.',
      'Ask for a bore to suit the pistons with {spec.pistonClearance} mm skirt clearance, or a hone if the bores were in limit.',
      'On return, check the clearance yourself before assembly.',
    ],
    checks: [
      'Both cylinders back, clearance measured and within spec.',
    ],
    safety: [],
    estimate: { hours: 2, waitDays: 14, note: 'Allow two weeks at the machine shop.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
