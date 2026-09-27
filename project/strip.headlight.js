// Take out the headlight and speedometer
(function (root) {
  'use strict';
  const procedure = {
    id: 'strip.headlight',
    kind: 'task',
    removes: ['headlight'],
    title: 'Take out the headlight and speedometer',
    purpose: 'See the wiring in the headlight shell, and free the speedometer.',
    requires: { tools: ['jis-drivers'], materials: [], skills: ['skill.jis-screws'] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Disconnect the battery, negative terminal first.',
      'Take off the headlight rim and lift out the reflector.',
      'Photograph the wiring inside the shell before unplugging anything.',
      'Unplug the connectors, labelling each wire where the colour has faded.',
      'Unscrew the speedometer cable and lift out the speedometer with its wiring.',
    ],
    checks: [
      'Wiring photographed and labelled, speedometer out without a broken wire.',
    ],
    safety: [
      'Never short the battery terminals.',
    ],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
