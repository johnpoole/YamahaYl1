// Inspect the wiring harness
(function (root) {
  'use strict';
  const procedure = {
    id: 'wiring.inspect',
    kind: 'task',
    removes: ['electrics'],
    after: ['strip.headlight', 'check.voltage'],
    title: 'Inspect the wiring harness',
    purpose: 'Find every crack, corroded connector and bad ground. Backlog B-017.',
    requires: { tools: ['multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Photograph the harness routing before disturbing it.',
      'Disconnect the battery and take it out.',
      'Unplug the harness, label each connector, and take the harness off the frame.',
      'Unwrap the loom tape.',
      'Look for cracked insulation, heat damage near the exhaust and chafing at the frame.',
      'Check every connector and every ground point.',
      'List what must be repaired or replaced.',
    ],
    checks: [
      'A written list of harness repairs.',
    ],
    safety: [
      'Keep the battery disconnected.',
    ],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
