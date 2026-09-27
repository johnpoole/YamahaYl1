// The strip-down photos in the order they were taken, each with the job it shows.
(function (root) {
  'use strict';

  const LIST = [
    ['PXL_20241112_205515274.jpg', 'record.as-found', 'The bike as found, with no tank, seat or side covers.'],
    ['PXL_20241113_001232294.jpg', 'record.as-found', 'Left side: carburetor, fuel line and cylinder fins.'],
    ['PXL_20241113_001240112.jpg', 'record.as-found', 'Left side: the oil tank and the pressed-steel frame over the engine.'],
    ['PXL_20241113_001253241.jpg', 'record.as-found', 'Right side: frame, cylinders and rear shock.'],
    ['PXL_20241114_003757290.MP.jpg', 'strip.headlight', 'Headlight rim off, wiring inside the shell.'],
    ['PXL_20241114_215330686.jpg', 'strip.headlight', 'Speedometer out with its wiring.'],
    ['PXL_20241215_235914398.jpg', 'strip.magneto-cover', 'Magneto cover off: points, flywheel and kickstart.'],
    ['PXL_20241223_184551594.MP.jpg', 'strip.carbs', 'A carburetor off, on the bench.'],
    ['PXL_20241223_185240977.MP.jpg', 'strip.carbs', 'The carburetor with its float bowl off. Varnish and dirt.'],
    ['PXL_20250106_203200195.jpg', 'shop.stand', 'Handlebar clamps and fork tops.'],
    ['PXL_20250106_203236199.jpg', 'shop.stand', 'Rear wheel, chain, brake and shock.'],
    ['PXL_20250106_203242634.jpg', 'engine.remove', 'The engine lowered from the frame, the oil tank resting on it.'],
    ['PXL_20250107_191402305.NIGHT.jpg', 'engine.remove', 'Frame and rear wheel on the stand, left side. The engine is out, on the floor below.'],
    ['PXL_20250108_183134527.MP.jpg', 'strip.top-end', 'Cylinder block and heads on the bench.'],
    ['PXL_20250109_220023834.jpg', 'strip.top-end', 'Pistons on the cases, engine L1-47603.'],
    ['PXL_20250110_221342751.jpg', 'inspect.frame-inside', 'Rust inside the frame.'],
  ];

  const PHOTOS = LIST.map(([file, job, caption]) => ({ file, job, caption }));

  if (typeof module !== 'undefined' && module.exports) module.exports = PHOTOS;
  else root.YL1Photos = PHOTOS;
})(this);
