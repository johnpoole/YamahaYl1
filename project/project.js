// The YL1 rebuild as a project for the engine.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const design = node ? require('./design.js') : root.YL1Design;
  const partsList = () => {
    const list = node ? require('./cmsnl.js') : root.YL1PartsList;
    if (!list) throw new Error('project/cmsnl.js did not load before the parts list was needed');
    return list;
  };

  const project = {
    id: 'yamaha-yl1',
    root: 'plan.yl1',
    pageTitle: 'YL1 Rebuild',
    heading: 'Yamaha YL1 rebuild',
    intro: 'A 1966 Yamaha YL1 Twin Jet 100, engine {spec.serial}, frame {spec.frameNumber}, from the bike as found to a safe, road-legal machine. The prices are rough. Start from the plan.',
    labels: {
      kitHeading: 'Tools in the shop',
      kitIntro: 'Taken as owned: the minimum tool set from the overview guide.',
      notOwnedHeading: 'Tools not owned',
      notOwnedIntro: 'Each one has to be bought or borrowed, or the jobs that need it done by a shop.',
      kit: 'owned',
      boughtTool: 'not owned',
      site: 'on hand',
      carried: 'Shop tools',
      carriedNone: 'No shop tools',
      fromSite: 'On hand',
      fromSiteNone: 'Nothing on hand is used',
      removes: 'Takes off',
      builds: 'Puts back on',
      components: 'Parts list',
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
      intro: 'Work resumes 3 October 2026, four hours on weekend days and an hour and a half on weekday evenings. Riding starts 1 May 2027. Hours are estimates.',
      // Each stage ends with a job; the plan is shaped like the bike, not the stages.
      milestones: [
        ['frame.number', 'Strip-down'],
        ['parts.list', 'Assessment'],
        ['exhaust.install', 'Engine'],
        ['bodywork.install', 'Chassis and electrics'],
        ['start.first', 'First start'],
        ['service.post-break-in', 'Break-in'],
        ['docs.finalize', 'Complete'],
      ],
    },
    parts: () => design.PARTS,
    sections: () => design.SECTIONS,
    // The jobs whose issues are closed, from project/done.js.
    done: () => {
      const list = node ? require('./done.js') : root.YL1Done;
      if (!list) throw new Error('project/done.js did not load before the done jobs were needed');
      return list;
    },
    // The Yamaha parts list rows for a part plan, part.<id>, or null for any other procedure.
    components: (planId) => {
      const m = /^part\.(.+)$/.exec(planId);
      if (!m) return null;
      return partsList().flatMap((d) => d.rows.filter((r) => r.part === m[1]).map((r) => ({ ...r, diagram: d.code, diagramTitle: d.title })));
    },
    params: () => design.params,
  };

  if (node) module.exports = project;
  else root.PROJECT = project;
})(this);
