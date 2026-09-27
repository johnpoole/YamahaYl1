// Take off the swingarm and shocks
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.swingarm',
    kind: 'task',
    removes: ['rear-suspension'],
    after: ['strip.rear-wheel'],
    title: 'Take off the swingarm and shocks',
    purpose: 'Empty the frame for the rust treatment and get the pivot bushes out to check.',
    requires: { tools: ['sockets', 'wrenches'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Rock the swingarm to feel for worn pivot bushes before it comes off.',
      'Take off both shocks. Mark them left and right.',
      'Pull the pivot bolt and take the swingarm out.',
    ],
    checks: [
      'Swingarm and shocks on the bench, pivot bolt and spacers bagged.',
    ],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
