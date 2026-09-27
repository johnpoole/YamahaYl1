// Rebuild and refit the wheels
(function (root) {
  'use strict';
  const procedure = {
    id: 'wheels.rebuild',
    kind: 'task',
    builds: ['front-wheel', 'rear-wheel'],
    after: ['brakes.measure', 'tires.check', 'parts.order', 'fork.rebuild', 'rear.suspension'],
    title: 'Rebuild and refit the wheels',
    purpose: 'Bearings, brakes and tires, and both wheels back on.',
    requires: { tools: ['sockets', 'wrenches', 'bearing-drivers', 'spoke-wrench'], materials: [{ id: 'wheel-bearings', qty: 1 }, { id: 'brake-shoes', qty: 1 }, { id: 'tires', qty: 2 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Replace the wheel bearings.',
      'True each wheel to under 1.5 mm runout.',
      'Fit new shoes and springs.',
      'Fit new {spec.tire} tires.',
      'Refit both wheels, the chain and the brake linkages.',
      'Set the chain free play to {spec.chainPlay} mm and the tire pressures: front {spec.pressureFront}, rear {spec.pressureRear}.',
    ],
    checks: [
      'Wheels spin free with the brakes off and stop firm with them on.',
    ],
    safety: [],
    estimate: { hours: 6 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
