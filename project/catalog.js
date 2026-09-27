// Every tool and material the YL1 procedures can name. The kit is the minimum tool set from
// docs/best-practices/00_Overview_and_Safety.md. Parts and fluids are bought; prices are rough,
// in US dollars, from the budget table in docs/best-practices/06_Parts_Sourcing.md.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const engine = node ? require('../engine/catalog.js') : root.ProcCatalog;
  if (!engine) throw new Error('engine/catalog.js did not load before project/catalog.js');

  const KIT = [
    'caliper', 'telescoping-gauges', 'micrometer', 'dial-indicator', 'feeler-gauges',
    'impact-driver', 'jis-drivers', 'flywheel-puller', 'soft-mallet', 'ring-compressor', 'circlip-pliers', 'bearing-drivers',
    'wrenches', 'sockets', 'torque-wrench', 'heat-gun', 'multimeter', 'timing-light', 'point-file', 'stands', 'extinguisher',
  ];

  const TOOLS = {
    caliper: { name: 'Digital caliper, 0–150 mm', source: 'kit' },
    'telescoping-gauges': { name: 'Telescoping gauge set', source: 'kit' },
    micrometer: { name: 'Digital micrometer, 0–25 mm', source: 'kit' },
    'dial-indicator': { name: 'Dial indicator and magnetic base', source: 'kit' },
    'feeler-gauges': { name: 'Metric feeler gauges', source: 'kit' },
    'impact-driver': { name: 'Manual impact driver', source: 'kit' },
    'jis-drivers': { name: 'JIS screwdrivers', source: 'kit' },
    'flywheel-puller': { name: 'Flywheel puller with the right thread', source: 'kit' },
    'soft-mallet': { name: 'Soft-faced mallet', source: 'kit' },
    'ring-compressor': { name: 'Piston ring compressor', source: 'kit' },
    'circlip-pliers': { name: 'Circlip pliers, internal and external', source: 'kit' },
    'bearing-drivers': { name: 'Bearing and seal driver set', source: 'kit' },
    wrenches: { name: 'Metric combination wrenches, 6–22 mm', source: 'kit' },
    sockets: { name: 'Metric sockets, 6–19 mm', source: 'kit' },
    'torque-wrench': { name: 'Torque wrench, 0–25 N·m', source: 'kit' },
    'heat-gun': { name: 'Heat gun', source: 'kit' },
    multimeter: { name: 'Digital multimeter', source: 'kit' },
    'timing-light': { name: 'Timing light or test light', source: 'kit' },
    'point-file': { name: 'Point file', source: 'kit' },
    stands: { name: 'Work stand and wheel chocks', source: 'kit' },
    extinguisher: { name: 'ABC fire extinguisher', source: 'kit' },

    'vacuum-gauge': { name: 'Twin vacuum gauge for carb sync', source: 'bought', cost: 45 },
    'spoke-wrench': { name: 'Spoke nipple wrench', source: 'bought', cost: 10 },
  };

  const MATERIALS = {
    'penetrating-oil': { name: 'Penetrating oil', unit: 'cans', source: 'bought', cost: 12 },
    'carb-cleaner': { name: 'Carburetor cleaner', unit: 'cans', source: 'bought', cost: 10 },
    'crank-seals': { name: 'Crank seal set, both cylinders', unit: 'sets', source: 'bought', cost: 35 },
    gaskets: { name: 'Head, base and case gasket set', unit: 'sets', source: 'bought', cost: 40 },
    'case-sealant': { name: 'Three Bond 1215 case sealant', unit: 'tubes', source: 'bought', cost: 15 },
    'pistons-rings': { name: 'Pistons and rings, sized from the bore measurement', unit: 'sets', source: 'bought', cost: 120 },
    'machine-work': { name: 'Machine shop bore and hone, both cylinders', unit: 'jobs', source: 'bought', cost: 150 },
    'carb-kits': { name: 'Mikuni VM carb rebuild kit', unit: 'kits', source: 'bought', cost: 40 },
    'points-condensers': { name: 'Points and condenser set', unit: 'sets', source: 'bought', cost: 20 },
    'spark-plugs': { name: 'Spark plugs, {spec.plug}', unit: 'count', source: 'bought', cost: 5 },
    battery: { name: 'AGM battery at the confirmed voltage', unit: 'count', source: 'bought', cost: 45 },
    rectifier: { name: 'Silicon diode rectifier', unit: 'count', source: 'bought', cost: 30 },
    connectors: { name: 'Bullet connectors, wire and dielectric grease', unit: 'kits', source: 'bought', cost: 20 },
    'fork-seals': { name: 'Fork seals', unit: 'pairs', source: 'bought', cost: 20 },
    'sae30-oil': { name: 'SAE 30 motor oil', unit: 'litres', source: 'bought', cost: 8 },
    'two-stroke-oil': { name: 'Air-cooled two-stroke oil, JASO FC or FD', unit: 'litres', source: 'bought', cost: 15 },
    'brake-shoes': { name: 'Brake shoes, front and rear', unit: 'sets', source: 'bought', cost: 50 },
    'wheel-bearings': { name: 'Wheel bearings, both wheels', unit: 'sets', source: 'bought', cost: 40 },
    tires: { name: 'Tires, {spec.tire}', unit: 'count', source: 'bought', cost: 75 },
    'fuel-hose': { name: 'Fuel hose, 6 mm', unit: 'm', source: 'bought', cost: 5 },
    'tank-kit': { name: 'Tank cleaner and sealer kit', unit: 'kits', source: 'bought', cost: 60 },
    'rust-converter': { name: 'Rust converter and primer', unit: 'kits', source: 'bought', cost: 30 },
    fuel: { name: 'Fresh unleaded fuel, 91 octane or higher', unit: 'litres', source: 'bought', cost: 1.5 },
  };

  const api = engine.assemble({ KIT, TOOLS, MATERIALS });
  if (node) module.exports = api;
  else root.Catalog = api;
})(this);
