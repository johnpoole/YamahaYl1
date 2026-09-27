// Match both sides
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.twin-matching',
    kind: 'skill',
    title: 'Match both sides',
    purpose: 'A parallel twin only runs smoothly when both sides are set the same.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Set carbs, points, timing and ring gaps on one side, then copy them exactly to the other.',
      'Record both sides together.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
