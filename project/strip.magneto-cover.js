// Take off the magneto cover
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.magneto-cover',
    kind: 'task',
    oneJobADay: true,
    after: ['strip.headlight'],
    removes: ['ignition'],
    title: 'Take off the magneto cover',
    purpose: 'See the points and flywheel on the left of the engine.',
    requires: { tools: ['jis-drivers', 'impact-driver'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Clean the outside of the cover before opening it.',
      'Take out the cover screws and lift the cover off.',
      'Photograph the points, the flywheel and the timing marks.',
      'Leave the points and flywheel alone until they are assessed.',
    ],
    checks: [
      'Points, flywheel and timing marks photographed.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
