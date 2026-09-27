// Strip-down, November 2024 to January 2025
(function (root) {
  'use strict';
  const procedure = {
    id: 'plan.strip-down',
    kind: 'plan',
    title: 'Strip-down, November 2024 to January 2025',
    purpose: 'The work already done, each session on the day its photos were taken.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'plan.day-2024-11-12' },
      { call: 'plan.day-2024-11-13' },
      { call: 'plan.day-2024-11-14' },
      { call: 'plan.day-2024-12-15' },
      { call: 'plan.day-2024-12-23' },
      { call: 'plan.day-2025-01-06' },
      { call: 'plan.day-2025-01-07' },
      { call: 'plan.day-2025-01-08' },
      { call: 'plan.day-2025-01-10' },
    ],
    checks: [
      'The engine is out with its top end off, and the frame is on the stand, as in the photos of 7 to 9 January 2025.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
