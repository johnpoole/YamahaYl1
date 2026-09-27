// Repair the wiring and fit the battery
(function (root) {
  'use strict';
  const procedure = {
    id: 'electrical.restore',
    kind: 'task',
    builds: ['electrics', 'headlight'],
    after: ['wiring.inspect', 'check.voltage', 'parts.order', 'engine.install'],
    title: 'Repair the wiring and fit the battery',
    purpose: 'A sound harness, clean grounds, a working rectifier and a charged battery.',
    requires: { tools: ['multimeter'], materials: [{ id: 'connectors', qty: 1 }, { id: 'rectifier', qty: 1 }, { id: 'battery', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Repair or replace every wire and connector on the inspection list.',
      'Fit the harness back on the frame along the photographed routing.',
      'Clean every ground to bare metal.',
      'Fit the new rectifier.',
      'Charge the battery at the confirmed voltage and fit it.',
      'Refit the headlight and speedometer.',
      'Check every light works.',
    ],
    checks: [
      'All lights work, battery holds charge overnight.',
    ],
    safety: [
      'Connect the battery negative last.',
    ],
    estimate: { hours: 5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
