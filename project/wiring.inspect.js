// Inspect the wiring harness
(function (root) {
  'use strict';
  const procedure = {
    id: 'wiring.inspect',
    kind: 'task',
    removes: ['charging'],
    after: ['strip.headlight', 'check.voltage'],
    title: 'Inspect the wiring harness',
    purpose: 'Find every crack, corroded connector and bad ground.',
    requires: { tools: ['multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Photograph the harness routing before disturbing it.',
      'Disconnect the battery and take it out.',
      'Unwrap the loom tape where it is cracked or loose.',
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
