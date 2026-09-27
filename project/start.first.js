// Start the engine and set the idle
(function (root) {
  'use strict';
  const procedure = {
    id: 'start.first',
    kind: 'task',
    after: ['start.checklist'],
    title: 'Start the engine and set the idle',
    purpose: 'First start and initial tune. Backlog B-041.',
    requires: { tools: ['vacuum-gauge', 'timing-light'], materials: [], skills: ['skill.twin-matching'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Kick through a few times with the ignition off.',
      'Choke on, ignition on, kick. Stop after 5 kicks and find out why.',
      'Let it idle without blipping the throttle. Check for leaks and listen for knocks.',
      'Warm it 3 to 5 minutes. Feel both exhausts to check both cylinders fire.',
      'Set idle to {spec.idle} rpm and balance the carbs with the vacuum gauge.',
      'Check the timing with the timing light.',
    ],
    checks: [
      'Both cylinders fire, idle steady, carbs balanced, no leaks.',
    ],
    safety: [
      'Outdoors or with the door open. Never run it in a closed garage.',
    ],
    estimate: { hours: 3 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
