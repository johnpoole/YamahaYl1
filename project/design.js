// The YL1 as the rebuild sees it: the parts that come off and go back on, the dates the
// timeline runs on, and the spec values the procedures quote.
// Spec values are from docs/YL1_Spec_Reference.md (Intertec manual OCR, pages cited there).
(function (root) {
  'use strict';

  // The timeline starts with the strip-down. Work resumes on RESUME; riding waits for the roads
  // to clear.
  const START = '2024-11-12';
  const RESUME = '2026-10-03';
  const RIDING = '2027-05-01';
  const dayOf = (date) => Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${START}T00:00:00Z`)) / 86400000);

  // The bike as code: sections hold parts, and each part has a plan, part.<id>, holding the jobs
  // that take it off, assess it, rebuild it and put it back. section.<id> runs the jobs that span
  // several of its parts. draw is the group the 3D bike shows the part in.
  const SECTIONS = {
    bike: 'The whole bike',
    engine: 'Engine',
    fuel: 'Carburetion and fuel',
    electrical: 'Electrical',
    chassis: 'Frame, chassis and wheels',
    body: 'Bodywork',
    shop: 'Workshop',
  };

  const PARTS = {
    'top-end': { name: 'Cylinders, heads, pistons and rings', section: 'engine', draw: 'top-end' },
    'bottom-end': { name: 'Crankcases, crankshaft and crank seals', section: 'engine', draw: 'engine' },
    gearbox: { name: 'Gearbox, shifter and kickstart', section: 'engine', draw: 'engine' },
    clutch: { name: 'Clutch', section: 'engine', draw: 'engine' },
    autolube: { name: 'Autolube pump, oil tank and lines', section: 'engine', draw: 'engine' },
    exhaust: { name: 'Exhaust pipes and mufflers', section: 'engine', draw: 'exhaust' },
    carbs: { name: 'Carburetors', section: 'fuel', draw: 'carbs' },
    tank: { name: 'Fuel tank, petcock and fuel lines', section: 'fuel', draw: 'tank' },
    ignition: { name: 'Magneto, points and condensers', section: 'electrical', draw: 'magneto-cover' },
    charging: { name: 'Battery and rectifier', section: 'electrical', draw: 'electrics' },
    wiring: { name: 'Wiring harness and grounds', section: 'electrical', draw: 'electrics' },
    lights: { name: 'Headlight, speedometer and tail light', section: 'electrical', draw: 'headlight' },
    frame: { name: 'Frame', section: 'chassis', draw: 'frame' },
    'front-end': { name: 'Forks, handlebars and front fender', section: 'chassis', draw: 'front-end' },
    'rear-suspension': { name: 'Swingarm and shocks', section: 'chassis', draw: 'rear-suspension' },
    'front-wheel': { name: 'Front wheel, hub, brake and tire', section: 'chassis', draw: 'front-wheel' },
    'rear-wheel': { name: 'Rear wheel, hub, brake and tire', section: 'chassis', draw: 'rear-wheel' },
    chain: { name: 'Chain and sprockets', section: 'chassis', draw: 'rear-wheel' },
    controls: { name: 'Throttle, clutch and brake cables', section: 'chassis', draw: 'front-end' },
    seat: { name: 'Seat', section: 'body', draw: 'seat' },
    'side-covers': { name: 'Side covers', section: 'body', draw: 'side-covers' },
    stand: { name: 'Work stand', section: 'shop', draw: 'stand' },
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

  const design = { START, RESUME, RIDING, dayOf, SECTIONS, PARTS, params };
  if (typeof module !== 'undefined' && module.exports) module.exports = design;
  else root.YL1Design = design;
})(this);
