// Read the frame number
(function (root) {
  'use strict';
  const procedure = {
    id: 'frame.number',
    kind: 'task',
    oneJobADay: true,
    after: ['inspect.frame-inside'],
    title: 'Read the frame number',
    purpose: 'Record the number stamped on the steering head. The footrest parts in the parts list change with the frame number.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Wipe the front of the steering head clean, between the fork legs.',
      'Read the stamped number and write it in the notes: {spec.frameNumber}.',
      'Photograph it.',
    ],
    checks: [
      'The frame number is recorded, with a photo.',
    ],
    safety: [],
    estimate: { hours: 0.25 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
