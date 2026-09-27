// Rebuild and refit the rear wheel and chain
(function (root) {
  'use strict';
  const procedure = {
    id: 'wheel.rear-rebuild',
    kind: 'task',
    builds: ['rear-wheel', 'chain'],
    after: ['brakes.measure', 'tires.check', 'parts.order', 'rear.suspension', 'chain.check'],
    title: 'Rebuild and refit the rear wheel and chain',
    purpose: 'Bearings, brake and tire, and the wheel and chain back on.',
    requires: { tools: ['sockets', 'wrenches', 'bearing-drivers', 'spoke-wrench'], materials: [{ id: 'wheel-bearings', qty: 1 }, { id: 'brake-shoes', qty: 1 }, { id: 'tires', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Replace the wheel bearings.',
      'True the wheel to under 1.5 mm runout.',
      'Fit new shoes and springs.',
      'Fit a new {spec.tire} tire.',
      'Refit the wheel, the chain and the brake rod.',
      'Set the chain free play to {spec.chainPlay} mm and the tire pressure to {spec.pressureRear}.',
    ],
    checks: [
      'The wheel spins free with the brake off and stops firm with it on, chain play in spec.',
    ],
    safety: [],
    estimate: { hours: 3 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
