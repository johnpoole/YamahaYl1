// Free seized fasteners
(function (root) {
  'use strict';
  const procedure = {
    id: 'skill.seized-fasteners',
    kind: 'skill',
    title: 'Free seized fasteners',
    purpose: 'Fifty-year-old fasteners are corroded.',
    requires: { tools: ['heat-gun', 'soft-mallet'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Soak with penetrating oil and wait 24 to 48 hours.',
      'Warm aluminium around a stuck steel stud with the heat gun.',
      'Use the soft mallet, never a steel hammer, on aluminium.',
    ],
    checks: [],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
