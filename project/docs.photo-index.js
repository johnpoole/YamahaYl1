// Annotate the photo index
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/docs.photo-index.js');
  const procedure = {
    id: 'docs.photo-index',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    title: 'Annotate the photo index',
    purpose: 'Give every photo the job it shows, the part it belongs to and a caption.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'In media/photos.js, give every photo the job it shows and a caption.',
      'List every photo with its step, part and caption in docs/Photo_Index.md.',
    ],
    checks: [
      'Every photo is in the index with its step, part and caption.',
    ],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
