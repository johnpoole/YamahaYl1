// Work safely around fuel
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.fuel-safety',
    kind: 'skill',
    title: 'Work safely around fuel',
    purpose: 'Fuel and vapour burn.',
    requires: { tools: ['extinguisher'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Drain fuel into a sealed can before opening the system.',
      'No flame or spark nearby.',
      'Keep the extinguisher in reach.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
