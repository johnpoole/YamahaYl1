// Assess the gearbox, shifter and kickstart
(function (root) {
  'use strict';
  const procedure = {
    id: 'gearbox.assess',
    kind: 'task',
    status: 'open',
    after: ['engine.split-cases'],
    title: 'Assess the gearbox, shifter and kickstart',
    purpose: 'Decide what the gearbox needs while the cases are split: gears, shift forks, shift drum and kickstart.',
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
