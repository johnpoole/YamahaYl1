// Rebuild or retire the Autolube
(function (root) {
  'use strict';
  const procedure = {
    id: 'autolube.rebuild',
    kind: 'task',
    status: 'open',
    builds: ['autolube'],
    after: ['check.autolube', 'engine.install'],
    title: 'Rebuild or retire the Autolube',
    purpose: 'Decide from the pump check whether the pump, lines and oil tank are rebuilt and bled, or the pump is retired for premix.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
