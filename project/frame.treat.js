// Treat the frame rust
(function (root) {
  'use strict';
  const procedure = {
    id: 'frame.treat',
    kind: 'task',
    builds: ['frame'],
    after: ['frame.inspect', 'engine.remove', 'fork.remove', 'strip.swingarm', 'wiring.inspect'],
    title: 'Treat the frame rust',
    purpose: 'Stop the rust while the frame is empty. Paint waits until the bike runs.',
    requires: { tools: ['heat-gun'], materials: [{ id: 'rust-converter', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Wire-brush the rusted areas to firm metal.',
      'Have any cracked joint welded.',
      'Apply rust converter and let it cure.',
      'Prime the treated areas.',
    ],
    checks: [
      'No loose rust left, treated areas primed.',
    ],
    safety: [
      'Gloves and eye protection with rust converter.',
    ],
    estimate: { hours: 6 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
