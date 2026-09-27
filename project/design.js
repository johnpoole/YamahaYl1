// The YL1 as the rebuild sees it: the parts that come off and go back on, the dates the
// timeline runs on, and the spec values the procedures quote.
// Spec values are from docs/YL1_Spec_Reference.md (Intertec manual OCR, pages cited there).
(function (root) {
  'use strict';

  // The timeline starts on the day of the first photo. Strip-down sessions are pinned to the
  // days their photos were taken (dates from the photo file names, which are in UTC). Work
  // resumes on RESUME; riding waits for the roads to clear.
  const START = '2024-11-12';
  const RESUME = '2026-10-03';
  const RIDING = '2027-05-01';
  const dayOf = (date) => Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${START}T00:00:00Z`)) / 86400000);

  // Parts of the bike a procedure takes off or builds back on. Everything starts as found.
  const PARTS = {
    frame: 'Frame',
    'front-end': 'Forks, handlebars and front fender',
    headlight: 'Headlight and speedometer',
    'front-wheel': 'Front wheel and brake',
    'rear-wheel': 'Rear wheel, brake and chain',
    'rear-suspension': 'Swingarm and shocks',
    engine: 'Engine cases and gearbox',
    'top-end': 'Cylinders and heads',
    'magneto-cover': 'Magneto cover and points',
    carbs: 'Carburetors',
    exhaust: 'Exhaust pipes and mufflers',
    electrics: 'Battery and wiring',
    tank: 'Fuel tank',
    seat: 'Seat',
    'side-covers': 'Side covers',
    stand: 'Work stand',
  };

  // Numbers the procedures quote as {placeholders}.
  const params = {
    'spec.bore': '38.00',
    'spec.pistonClearance': '0.035–0.040',
    'spec.taper': '0.05',
    'spec.ringGap': '0.10–0.30',
    'spec.ringGroove': '0.03–0.07',
    'spec.bigEndShake': '0.8–1.0',
    'spec.bigEndLimit': '2.0',
    'spec.headTorque': '103 kg-cm (10.1 N·m)',
    'spec.plug': 'NGK B7-HS',
    'spec.plugGap': '0.6–0.7',
    'spec.pointsGap': '0.3–0.35',
    'spec.timing': '1.8 mm BTDC',
    'spec.floatLevel': '23',
    'spec.pilotTurns': '2.5',
    'spec.clip': '3rd groove from the top',
    'spec.idle': '1200–1500',
    'spec.forkOil': '130 cc of SAE 30 motor oil',
    'spec.gearboxOil': '750 cc of SAE 30 motor oil',
    'spec.tire': '2.50 × 17',
    'spec.pressureFront': '1.5 kg/cm² (22 psi)',
    'spec.pressureRear': '1.9 kg/cm² (28 psi)',
    'spec.chainPlay': '20',
    'spec.pumpClearance': '0.25–0.35',
    'spec.clutchPlay': '2–3',
    'spec.serial': 'L1-47603',
    'breakIn.km': 300,
  };

  const design = { START, RESUME, RIDING, dayOf, PARTS, params };
  if (typeof module !== 'undefined' && module.exports) module.exports = design;
  else root.YL1Design = design;
})(this);
