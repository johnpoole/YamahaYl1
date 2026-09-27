// Test the charging
(function (root) {
  'use strict';
  const procedure = {
    id: 'charging.test',
    kind: 'task',
    after: ['start.first'],
    title: 'Test the charging',
    purpose: 'Check the rectifier charges the battery.',
    requires: { tools: ['multimeter'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'With the engine warm, measure battery voltage at idle.',
      'Hold the engine at about 3000 rpm and measure again.',
      'On 12 volts it should read 13.5 to 14.5 V; on 6 volts, 6.5 to 7.5 V.',
      'If it is low, check the generator coils, the rectifier and the connections. If it is high, check the rectifier and the regulator.',
    ],
    checks: [
      'The charging voltage at 3000 rpm is recorded and in range.',
    ],
    safety: [
      'Run the engine outdoors or with the door open.',
    ],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
