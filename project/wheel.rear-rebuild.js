// Service and refit the rear wheel and chain
(function (root) {
  'use strict';
  const procedure = {
    id: 'wheel.rear-rebuild',
    kind: 'task',
    builds: ['rear-wheel', 'chain'],
    after: ['brakes.measure', 'tires.check', 'parts.order', 'rear.suspension', 'chain.check'],
    title: 'Service and refit the rear wheel and chain',
    purpose: 'A new tire, with the bearings, shoes and spokes seen to only where the checks find wear.',
    requires: { tools: ['sockets', 'wrenches', 'bearing-drivers', 'spoke-wrench', 'dial-indicator', 'tire-irons', 'pressure-gauge'], materials: [{ id: 'tires', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Spin the wheel on its axle and feel the bearings. Replace them only if they are rough or loose.',
      'Check the runout with the dial indicator. True the wheel only if it is over 1.5 mm.',
      'Fit new brake shoes only if the brake check found them under the limit.',
      'Fit a new {spec.tire} tire.',
      'Refit the wheel and the chain and the brake rod.',
      'Set the chain free play to {spec.chainPlay} mm and the tire pressure to {spec.pressureRear}.',
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
