// The YL1 rebuild as a project for the engine.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const design = node ? require('./design.js') : root.YL1Design;

  const project = {
    id: 'yamaha-yl1',
    root: 'plan.yl1',
    pageTitle: 'YL1 Rebuild',
    heading: 'Yamaha YL1 rebuild',
    intro: 'A 1966–1967 Yamaha YL1 Twin Jet 100, engine {spec.serial}, taken from the bike as found to a safe, road-legal machine. The strip-down sessions are recorded on the days their photos were taken. The rest is the plan from the backlog, milestones M1 to M5. Each job lists the tools, parts and skills it needs. The shop tools are assumed. Parts are bought, and the prices are rough. Start from the plan.',
    labels: {
      kitHeading: 'Tools in the shop',
      kitIntro: 'Already owned. Anything else is bought.',
      kit: 'owned',
      site: 'on hand',
      carried: 'Shop tools',
      carriedNone: 'No shop tools',
      fromSite: 'On hand',
      fromSiteNone: 'Nothing on hand is used',
      removes: 'Takes off',
      builds: 'Puts back on',
    },
    currency: '$',
    // Four hours on Saturday and Sunday, an hour and a half on weekday evenings.
    calendar: {
      start: design.START,
      days: 920,
      hours: { type: 'weekly', hours: [4, 1.5, 1.5, 1.5, 1.5, 1.5, 4] },
    },
    schedule: {
      pageTitle: 'YL1 Schedule',
      heading: 'Schedule',
      linkText: 'Schedule',
      planLinkText: 'The plan',
      intro: 'The strip-down sessions on the days they happened, then the plan run day by day from 3 October 2026: four hours on weekend days, an hour and a half on weekday evenings. Riding waits for 1 May 2027. Each job starts only when the parts it needs are in and the jobs it follows are done. Hours are estimates.',
      milestones: ['plan.strip-down', 'plan.m1-assessment', 'plan.m2-engine', 'plan.chassis-electrics', 'plan.m3-first-start', 'plan.m4-break-in', 'plan.m5-complete'],
    },
    parts: () => design.PARTS,
    params: () => design.params,
  };

  if (node) module.exports = project;
  else root.PROJECT = project;
})(this);
