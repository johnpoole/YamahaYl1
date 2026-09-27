// The jobs whose GitHub issues are closed. Written by tools/issues.js; do not edit by hand.
(function (root) {
  'use strict';
  const DONE = [
    'docs.photo-index',
    'docs.work-log',
    'engine.remove',
    'frame.number',
    'inspect.frame-inside',
    'record.as-found',
    'shop.stand',
    'strip.carbs',
    'strip.headlight',
    'strip.magneto-cover',
    'strip.top-end'
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = DONE;
  else root.YL1Done = DONE;
})(this);
