// Rebuild and refit the front wheel
(function (root) {
  'use strict';
  const procedure = {
    id: 'wheel.front-rebuild',
    kind: 'task',
    builds: ['front-wheel'],
    after: ['brakes.measure', 'tires.check', 'parts.order', 'fork.rebuild'],
    title: 'Rebuild and refit the front wheel',
    purpose: 'Bearings, brake and tire, and the wheel back on.',
    requires: { tools: ['sockets', 'wrenches', 'bearing-drivers', 'spoke-wrench'], materials: [{ id: 'wheel-bearings', qty: 1 }, { id: 'brake-shoes', qty: 1 }, { id: 'tires', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Replace the wheel bearings.',
      'True the wheel to under 1.5 mm runout.',
      'Fit new shoes and springs.',
      'Fit a new {spec.tire} tire.',
      'Refit the wheel and the brake cable.',
      'Set the tire pressure to {spec.pressureFront}.',
    ],
    checks: [
      'The wheel spins free with the brake off and stops firm with it on.',
    ],
    safety: [],
    estimate: { hours: 3 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
