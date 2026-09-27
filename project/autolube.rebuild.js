// Rebuild or retire the Autolube
(function (root) {
  'use strict';
  const procedure = {
    id: 'autolube.rebuild',
    kind: 'task',
    builds: ['autolube'],
    after: ['check.autolube', 'engine.install'],
    title: 'Rebuild or retire the Autolube',
    purpose: 'Put the Autolube back in service and bleed it, or retire it for premix as the pump check decided.',
    requires: { tools: ['jis-drivers', 'feeler-gauges'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'If the pump check retired the pump, cap the injection ports and mark the tank for premix at 32:1, 20:1 for break-in. Stop here.',
      'Clean out the oil tank and fit new oil lines.',
      'Set the plunger clearance to {spec.pumpClearance} mm with the shims.',
      'Fill the tank with air-cooled two-stroke oil, JASO FC or FD.',
      'Take out the bleeder screw, lift the pump control cable out of its guide and turn the starter plate until oil without bubbles runs from the bleeder hole. Refit the screw.',
    ],
    checks: [
      'Oil runs from the bleeder without bubbles and the lines are full, or the premix decision is written down and the ports are capped.',
    ],
    safety: [
      'Never run the engine without oil delivery or premix.',
    ],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
