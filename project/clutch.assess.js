// Assess the clutch
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/clutch.assess.js');
  const procedure = {
    id: 'clutch.assess',
    kind: 'task',
    status: 'open',
    window: { from: design.dayOf(design.RESUME) },
    after: ['engine.remove'],
    title: 'Assess the clutch',
    purpose: 'Decide whether the clutch needs new plates or springs. The limits are in the spec reference: spring free length 25 mm, friction plates no thinner than 3.9 mm.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
