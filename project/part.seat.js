// Seat
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.seat',
    kind: 'plan',
    title: 'Seat',
    purpose: 'Everything done to the seat.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'seat.find' },
    ],
    checks: [
      'The seat is back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
