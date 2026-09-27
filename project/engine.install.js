// Put the engine back in the frame
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.install',
    kind: 'task',
    builds: ['engine', 'top-end'],
    after: ['engine.top-end', 'frame.treat'],
    title: 'Put the engine back in the frame',
    purpose: 'Mount the rebuilt engine and fill the gearbox.',
    requires: { tools: ['sockets', 'torque-wrench', 'stands'], materials: [{ id: 'sae30-oil', qty: 0.75 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Lift the engine into the frame and fit the mounting bolts.',
      'Torque the mounting bolts.',
      'Reconnect the clutch cable.',
      'Fill the gearbox with {spec.gearboxOil}.',
    ],
    checks: [
      'Engine mounted solid, gearbox full, clutch cable free play {spec.clutchPlay} mm at the lever.',
    ],
    safety: [
      'Get help lifting.',
    ],
    estimate: { hours: 3 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
