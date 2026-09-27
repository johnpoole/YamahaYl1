// Take off the heads and cylinders
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.top-end',
    kind: 'task',
    oneJobADay: true,
    removes: ['top-end'],
    after: ['engine.remove'],
    title: 'Take off the heads and cylinders',
    purpose: 'Get to the pistons and bores for measuring. Backlog B-011.',
    requires: { tools: ['sockets', 'soft-mallet', 'heat-gun'], materials: [], skills: ['skill.seized-fasteners'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Loosen the head nuts, soaked the day before, in a crossing pattern, half a turn at a time.',
      'If a head sticks, warm the fins around the studs. Never pry on the gasket face.',
      'Lift each cylinder straight up, holding the piston as it clears the rings.',
      'Stuff clean rag into the crankcase mouths.',
      'Mark each cylinder and head left or right.',
    ],
    checks: [
      'Heads and cylinders off without a cracked fin, rag in both crankcase mouths.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
