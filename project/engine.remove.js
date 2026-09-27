// Take the engine out
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.remove',
    kind: 'task',
    removes: ['engine', 'exhaust'],
    after: ['parts.list'],
    title: 'Take the engine out',
    purpose: 'The cases have to come apart for the crank seals.',
    requires: { tools: ['sockets', 'wrenches', 'stands'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Drain the gearbox oil.',
      'Take off the exhaust pipes and mufflers.',
      'Disconnect the clutch cable, the chain and the wiring to the engine.',
      'Support the engine from below and take out the mounting bolts.',
      'Lower the engine out and carry it to the bench.',
    ],
    checks: [
      'Engine on the bench, every bolt bagged by location.',
    ],
    safety: [
      'Get help lifting. Lift with your legs.',
    ],
    estimate: { hours: 3 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
