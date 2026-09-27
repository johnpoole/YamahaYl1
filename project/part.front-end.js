// Forks, handlebars and front fender
(function (root) {
  'use strict';
  const procedure = {
    id: 'part.front-end',
    kind: 'plan',
    title: 'Forks, handlebars and front fender',
    purpose: 'Everything done to the forks, handlebars and front fender.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'fork.remove' },
      { call: 'fork.rebuild' },
    ],
    checks: [
      'The forks, handlebars and front fender are back on the bike and in spec.',
    ],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
