// Clean the exhaust
(function (root) {
  'use strict';
  const design = typeof module !== 'undefined' && module.exports ? require('./design.js') : root.YL1Design;
  if (!design) throw new Error('project/design.js did not load before project/exhaust.clean.js');
  const procedure = {
    id: 'exhaust.clean',
    kind: 'task',
    window: { from: design.dayOf(design.RESUME) },
    after: ['engine.remove'],
    title: 'Clean the exhaust',
    purpose: 'Clear the carbon from the pipes and mufflers and find any rust-through.',
    requires: { tools: ['sockets', 'wrenches'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Take the baffles out of both mufflers.',
      'Scrape the carbon out of the baffles and the pipe ends at the port.',
      'Soak the baffles in degreaser and scrub them until the holes are clear.',
      'Look along each pipe and muffler for rust-through, dents and split seams.',
      'Refit the baffles.',
      'Add any pipe or muffler that cannot be saved to the parts list.',
    ],
    checks: [
      'Baffle holes clear, and each pipe and muffler judged sound or listed for replacement.',
    ],
    safety: [
      'Wear gloves and eye protection when scraping carbon.',
    ],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
