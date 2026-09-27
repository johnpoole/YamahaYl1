// The whole bike
(function (root) {
  'use strict';
  const procedure = {
    id: 'section.bike',
    kind: 'plan',
    title: 'The whole bike',
    purpose: 'The whole bike: the jobs that belong to no one part.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'record.as-found' },
      { call: 'docs.work-log' },
      { call: 'docs.photo-index' },
      { call: 'parts.list' },
      { call: 'parts.order' },
      { call: 'start.checklist' },
      { call: 'start.first' },
      { call: 'ride.break-in' },
      { call: 'service.post-break-in' },
      { call: 'check.success' },
      { call: 'docs.finalize' },
    ],
    checks: [
      'Every job here is done.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
