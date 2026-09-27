// Put the bike on a work stand
(function (root) {
  'use strict';
  const procedure = {
    id: 'shop.stand',
    kind: 'task',
    builds: ['stand'],
    title: 'Put the bike on a work stand',
    purpose: 'Hold the bike steady and off its wheels for the rest of the work.',
    requires: { tools: ['stands'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Set the stand on level floor.',
      'With a helper, lift the bike onto the stand and strap it.',
      'Chock anything that can roll.',
    ],
    checks: [
      'The bike does not move when pushed hard from either side.',
    ],
    safety: [
      'Never work on the bike on a single stand.',
    ],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
