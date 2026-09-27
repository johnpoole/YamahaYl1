// Find out whether the bike is 6 or 12 volt
(function (root) {
  'use strict';
  const procedure = {
    id: 'check.voltage',
    kind: 'task',
    title: 'Find out whether the bike is 6 or 12 volt',
    purpose: 'The manual says 12 V but many sources say 6 V. Settle it before buying a battery, bulbs or a rectifier.',
    requires: { tools: ['multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Read the markings on the old battery.',
      'Measure its open-circuit voltage: about 12.6 V means a 12-volt system, about 6.3 V a 6-volt one.',
      'Check the bulbs and the rectifier markings agree.',
      'Write the answer in the electrical notes.',
    ],
    checks: [
      'System voltage recorded, with the reading that proves it.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
