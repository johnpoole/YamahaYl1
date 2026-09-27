// The strip-down photos. The date comes from the file name, which the phone writes in UTC.
(function (root) {
  'use strict';

  const LIST = [
    ['PXL_20241112_205515274.jpg', 'The bike as found, left side.'],
    ['PXL_20241113_001232294.jpg', 'Left side: carburetor, fuel line and cylinder fins.'],
    ['PXL_20241113_001240112.jpg', 'Left side with the side cover off, the pressed-steel frame over the engine.'],
    ['PXL_20241113_001253241.jpg', 'Right side: frame, cylinders and rear shock.'],
    ['PXL_20241114_003757290.MP.jpg', 'Headlight rim off, wiring inside the shell.'],
    ['PXL_20241114_215330686.jpg', 'Speedometer out with its wiring.'],
    ['PXL_20241215_235914398.jpg', 'Magneto cover off: points, flywheel and kickstart.'],
    ['PXL_20241223_184551594.MP.jpg', 'A carburetor off, on the bench.'],
    ['PXL_20241223_185240977.MP.jpg', 'The carburetor with its float bowl off. Varnish and dirt.'],
    ['PXL_20250106_203200195.jpg', 'Handlebar clamps and fork tops.'],
    ['PXL_20250106_203236199.jpg', 'Rear wheel, chain, brake and shock.'],
    ['PXL_20250106_203242634.jpg', 'The bike on the stand, frame and engine from the right.'],
    ['PXL_20250107_191402305.NIGHT.jpg', 'Frame and rear wheel on the stand, left side. The engine is out, on the floor below.'],
    ['PXL_20250108_183134527.MP.jpg', 'Cylinder block and heads off the engine.'],
    ['PXL_20250109_220023834.jpg', 'Pistons on the cases, engine L1-47603.'],
    ['PXL_20250110_221342751.jpg', 'Rust inside the frame.'],
  ];

  const PHOTOS = LIST.map(([file, caption]) => {
    const m = /^PXL_(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})/.exec(file);
    if (!m) throw new Error(`media/photos.js: cannot read a date from the file name ${file}`);
    return { file, caption, date: `${m[1]}-${m[2]}-${m[3]}`, time: `${m[4]}:${m[5]} UTC` };
  });

  if (typeof module !== 'undefined' && module.exports) module.exports = PHOTOS;
  else root.YL1Photos = PHOTOS;
})(this);
