// Assemble clean
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.clean-assembly',
    kind: 'skill',
    title: 'Assemble clean',
    purpose: 'One grain of grit in a needle bearing ends a two-stroke.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Work on a clean surface with clean hands and tools.',
      'Oil bearings and bores with fresh two-stroke oil as they go together.',
      'Never reuse a head or base gasket.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
