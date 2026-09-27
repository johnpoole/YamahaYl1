// Split the cases and replace the crank seals
(function (root) {
  'use strict';
  const procedure = {
    id: 'engine.split-cases',
    kind: 'task',
    after: ['engine.remove', 'parts.order'],
    title: 'Split the cases and replace the crank seals',
    purpose: 'New crank seals, whatever the old ones look like. Backlog B-032.',
    requires: { tools: ['flywheel-puller', 'soft-mallet', 'bearing-drivers', 'heat-gun'], materials: [{ id: 'crank-seals', qty: 1 }], skills: ['skill.clean-assembly', 'skill.seized-fasteners'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Pull the flywheel with the puller. Never hit the crank end.',
      'Take out the case screws in the manual\'s order.',
      'Tap round the parting line with the soft mallet to split the cases. No screwdrivers in the joint.',
      'Check the main bearings for roughness and colour.',
      'Drive out the old seals.',
      'Clean each seal bore, drive the new seals in square, and oil their lips.',
    ],
    checks: [
      'New seals in all positions, bearings judged good or replaced.',
    ],
    safety: [
      'A steel hammer on aluminium cracks the cases.',
    ],
    estimate: { hours: 5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
