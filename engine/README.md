# Procedures engine

Instructions for any hands-on job written as procedures: each says what it needs, what it
produces and what it does, and calls other procedures the way a function calls functions.
The engine knows nothing about any one project.

| File | What it does |
|---|---|
| `lib.js` | Checks each procedure, runs a plan on paper with a running stock, and works out everything a procedure needs, what must be bought and what it costs |
| `check.js` | The rules every project keeps, as one call a project's tests make |
| `catalog.js` | Builds a project's catalog from a base list and optional parts |
| `schedule.js` | Runs a plan day by day on the project's calendar |
| `viewer.js`, `viewer.css` | The Instructions page for any project |

## Where things come from

Each tool and material in a project's catalog names its `source`:

- `'kit'` — on hand at the start. The project's `KIT` lists them.
- `'site'` — free for the taking, as much as needed (lake water, snow, sticks from the yard).
- `'bought'` — bought before it is needed, at `cost` each, or per unit for a material.
- a procedure id — made or gathered by that procedure.

## Calendars

`schedule.run(root, reg, catalog, lib, calendar)` with `calendar.hours` one of:

- `{ type: 'fixed', hours }` — the same hours every day
- `{ type: 'weekly', hours: [Sun, Mon, … Sat] }` — hours by day of the week
- `{ type: 'daylight', latitude, overheadHours, maxWorkHours, minWorkHours }` — sunrise to sunset

A job waits for another through something the other makes: a tool, a material, or a state
such as a settled bed, or through `after`. A job with `estimate.waitDays` holds back the jobs that use what it makes.

## Design parts

A procedure may list the parts of the design it builds: `builds: ['walls']`, and the parts it
takes off: `removes: ['carbs']`. When the project gives its parts as `{ id: name }` or
`{ id: { name, section } }`, the checker makes sure every part is built by something the plan runs
and that nothing builds or removes a part the design lacks.

## A plan shaped like the design

When the project also gives `sections()` as `{ id: name }`, the plan is built like code from the
design: plan `section.<s>` calls plan `part.<p>` for each of its parts, and each part plan holds
the jobs done to that part. A job that spans several parts sits in their section's plan. The
checker fails a part with no plan, a part plan with no jobs, and a job that builds a part from
outside that part's section.

A task with `status: 'open'` stands for work not yet written: a purpose saying what needs deciding,
no steps and 0 hours. The Instructions page lists the open tasks together. Once a task has steps,
it drops the status.

`schedule.partDays(result, reg)` gives, for each part, the day building it started and the day it
was finished, or null if it was not finished by the end.

`schedule.partTimeline(result, reg)` gives every take-off and put-back in the order the schedule
finishes them, and `stateOn(part, day)`: `'original'` until something touches the part, `'off'`
once a job takes it off, `'restored'` once a job builds it. The bike's 3D view uses it.

## One job a day

A plan or task with `oneJobADay: true` starts at most one such job on any day, for work done in
separate sessions. A job that runs past its day carries on the next. A task may also carry its
own `window`.

## Order without a material

`after: ['strip.top-end']` makes a job wait until the named jobs are finished, for order that
nothing made or used explains, such as measuring the bores once the cylinders are off. It may
name any job the plan runs, in any part of the tree. The tree order only sets which ready job goes
first, so jobs in different parts run side by side. The checker and the scheduler fail jobs that
wait on each other in a loop.

## A project

A folder with:

- `project.js` — `{ root, pageTitle, heading, intro, labels, calendar, params(), parts(), sections(), schedule }`
- `catalog.js` — `{ KIT, TOOLS, MATERIALS }`, built with `engine/catalog.js`
- `index.js` — the list of procedure ids
- `<id>.js` — one procedure each
- `index.html` — loads the engine and the project files, then `engine/viewer.js`

The YL1 rebuild in [`../project`](../project/) uses it.
