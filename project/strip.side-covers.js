// Take off the side covers
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.side-covers',
    kind: 'task',
    removes: ['side-covers'],
    title: 'Take off the side covers',
    purpose: 'Open up the frame and the engine bay.',
    requires: { tools: ['jis-drivers', 'impact-driver'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Photograph each cover in place.',
      'Take out the cover screws with a JIS driver. Use the impact driver on any that will not turn.',
      'Lift each cover off and bag its screws, labelled with the cover and the side.',
    ],
    checks: [
      'Both covers off, no screw heads rounded, every screw bagged and labelled.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
