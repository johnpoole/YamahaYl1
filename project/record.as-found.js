// Photograph the bike as found
(function (root) {
  'use strict';
  const procedure = {
    id: 'record.as-found',
    kind: 'task',
    oneJobADay: true,
    removes: ['tank', 'seat', 'side-covers'],
    title: 'Photograph the bike as found',
    purpose: 'Record every system before anything is disturbed, so reassembly has a reference. Backlog B-010.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Photograph the whole bike from both sides, the front and the back.',
      'Note what is missing. The bike came with no fuel tank, seat or side covers fitted.',
      'Photograph the engine externals: left, right, top and front.',
      'Photograph the carburetor mounting, the cable routing and the fuel line routing.',
      'Photograph the wiring routing, the frame, the wheels, tires and brakes, and the instruments.',
    ],
    checks: [
      'Every system has at least one photo taken before any fastener was turned.',
    ],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
