// Main stand, side stand, footrests and brake pedal
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.main-stand',
    kind: 'plan',
    title: 'Main stand, side stand, footrests and brake pedal',
    purpose: 'Everything done to the main stand, side stand, footrests and brake pedal.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'stands.check' },
    ],
    checks: [
      'The main stand, side stand, footrests and brake pedal are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
