// Find the fuel tank
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/tank.find.js');
  const procedure = {
    id: 'tank.find',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Find the fuel tank',
    purpose: 'The bike was found without its tank fitted. Find the original tank or a replacement.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Search the garage and storage for the original tank.',
      'If it is found, drain it, look inside and photograph the rust.',
      'If not, find a replacement from the parts list, diagram C-08 at CMSNL, or a used YL1 tank.',
    ],
    checks: [
      'A tank in hand, original or replacement, with the inside photographed.',
    ],
    safety: [
      'Do not blow air into a tank that has held fuel.',
    ],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
