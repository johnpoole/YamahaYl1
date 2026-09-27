// Close up the bottom end
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.bottom-end',
    kind: 'task',
    after: ['engine.split-cases'],
    title: 'Close up the bottom end',
    purpose: 'Reassemble the cases around the crank and gearbox. Backlog B-033.',
    requires: { tools: ['sockets', 'torque-wrench'], materials: [{ id: 'case-sealant', qty: 1 }], skills: ['skill.clean-assembly', 'skill.torque'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean both case faces.',
      'Spread a very thin coat of sealant on both faces and let it tack.',
      'Close the cases and fit the screws.',
      'Torque them in a crossing pattern.',
      'Turn the crank and the gearbox by hand to check nothing binds.',
    ],
    checks: [
      'Crank and gearbox turn freely, no sealant squeezed inside.',
    ],
    safety: [],
    estimate: { hours: 4 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
