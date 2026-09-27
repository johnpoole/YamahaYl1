// Fuel tank, petcock and fuel lines
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.tank',
    kind: 'plan',
    title: 'Fuel tank, petcock and fuel lines',
    purpose: 'Everything done to the fuel tank, petcock and fuel lines.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'tank.find' },
      { call: 'tank.restore' },
      { call: 'tank.install' },
    ],
    checks: [
      'The fuel tank, petcock and fuel lines are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
