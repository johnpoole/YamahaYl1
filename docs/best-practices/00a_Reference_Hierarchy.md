# Reference Hierarchy & Foundations
## Yamaha YL1 Restoration — Best Practices Basis

The best practices in this folder are grounded in a four-level reference hierarchy. Each level inherits the applicable principles of the level above it. The YL1-specific procedures only document what diverges from, or specializes, the higher-level standards.

---

## Level 1 — General Process Principles

These apply to any complex, multi-step project regardless of domain.

### Core frameworks
- **5S Workplace Organization** (Sort, Set in Order, Shine, Standardize, Sustain) — applied to shop setup, tooling, and parts storage.
- **Plan–Do–Check–Act (PDCA / Deming cycle)** — applied to any rebuild step: plan the procedure, execute, measure the result, adjust before proceeding.
- **Configuration management** — document the state of every component before changing it. This is the basis of the photo and measurement log protocols.
- **Traceability** — every decision (part substitution, clearance accepted, procedure deviated from spec) should be recorded with a reason. This is the basis of the work log format.
- **Fail-safe ordering** — safety-critical steps (crank seal installation, torque sequences) are prerequisites, not optional checkboxes. No subsequent step is valid if a prior safety step was skipped.

### General references in this category
- *The Checklist Manifesto* — Atul Gawande (discipline of pre-flight / pre-operation checklists; applied here as the First Start Checklist in `07_Break_In_and_Tuning.md`)
- ISO 9001 quality management principles — traceability, documented procedures, non-conformance recording

---

## Level 2 — General Mechanical Process

These apply to any precision mechanical work, regardless of whether it is a motorcycle, engine, or other machine.

### Core principles
- **Measure before cutting** — take all measurements before deciding on a course of action. A worn bore may still be within service limits; an assumed "bad" part may be fine.
- **Cleanliness is a specification** — contamination during assembly is a defect. This is not a preference; it is a standard that, if violated, invalidates the assembly.
- **Sequential disassembly documentation** — always document the state of a fastener, component, or assembly before it is disturbed. Reconstruction from memory is not acceptable.
- **Torque is a specification, not a feeling** — all fasteners into aluminum or with a stated value must be torque-wrench tightened. "Snug" is not a procedure.
- **Matched pairs must be matched** — components that work as a pair (bearings, cylinders, pistons, shims) must always be measured and set together. One side does not represent the other.
- **Replace seals on every rebuild** — seals are serviceable items. A seal that is "probably still OK" in a reassembled engine is a leak waiting to happen.

### General references in this category
- *Machinery's Handbook* (Industrial Press) — fastener standards, fits and tolerances, measurement procedure discipline
- OSHA 29 CFR 1910 Subpart O — machinery and machine guarding; applied to bench safety, compressed air use, and press work
- ISO 286 / ANSI B4.1 — limits, fits and tolerances for cylindrical parts (bore/piston clearance standards derive from this)

---

## Level 3 — General Motorcycle Repair

These apply to any motorcycle, regardless of era or configuration.

### Core principles
- **Read the factory service manual for the specific model before disassembly.** Procedures that seem obvious often have a required sequence, special tool, or torque pattern that is not obvious.
- **JIS vs. Phillips** — all Japanese motorcycles produced before the late 1980s use JIS cross-head screws. Standard Phillips drivers will strip them. This is a near-universal error on first-time vintage Japanese restorations.
- **Document all wire routing and cable routing photographically before disconnecting anything** — routing is rarely shown adequately in service manuals.
- **Fuel system rubber must be replaced on any bike that has been stored** — old rubber is a fire hazard, regardless of appearance.
- **Bearings are consumables** — wheel bearings, steering head bearings, and swingarm pivots should be replaced on any bike that has been sitting for more than 5 years.
- **Brake lines and shoes are safety items** — inspect and replace on a defined service interval, not on "looks OK."

### General references in this category
- *How to Restore Classic Japanese Motorcycles* — Theo Doorn (general process for vintage Japanese bike restoration)
- *The Motorcycle Bible* — general workshop reference
- **Haynes / Clymer general motorcycle manuals** — procedural baseline for strip-and-rebuild sequences
- FMVSS 122 (Federal Motor Vehicle Safety Standard — motorcycle brakes) — minimum brake performance standards; used as a floor for brake system acceptance criteria

---

## Level 4 — Vintage Japanese Motorcycle / Small 2-Stroke Specific

These apply to air-cooled 2-stroke Japanese motorcycles of the 1960s–1970s, and specifically to the YL1.

### Core principles
- **Crank seal integrity is the primary reliability variable on any 2-stroke.** Unlike a 4-stroke, the crankcase is part of the induction system. Air leaks are not just oil leaks — they are tuning and seizure events.
- **Port timing is fixed by cylinder geometry.** On a piston-port engine there is no timing adjustability in the valve train (there is none). Port edge condition and piston ring-to-locating-pin fit are the only variables to manage.
- **The Autolube system is not optional — it requires commissioning, not just installation.** Priming, bleeding, and verifying pump output rate are required steps, not assumptions.
- **6-volt systems are sensitive to ground quality in a way that 12-volt systems tolerate.** Voltage drop across corroded connections is proportionally twice as impactful at 6V.
- **Parallel twins must be tuned as a system, not as two singles.** Carburetor synchronization, ignition timing match, and equal cylinder compression are interdependent.

### Specific references in this category
- **Yamaha YL1 / YL2 / AS1 Factory Service Manual** — primary specification source. This project's copy: `01_Documentation/2Cyl2StrMan.pdf`
- *Two-Stroke Tuner's Handbook* — Gordon Jennings (port timing, mixture formation, ring behavior, crank seal theory)
- **Mikuni VM-series Carburetor Tuning Manual** (Mikuni American Corp.) — authoritative source for VM16 circuit operation, jetting methodology, pilot screw function
- **Vintage Japanese Motorcycle Club (VJMC)** — community standards and technical bulletins for vintage Japanese machines
- **JASO FC/FD 2-stroke oil specification** (Japan Automobile Standards Organization) — air-cooled 2-stroke oil rating standard referenced in the Autolube and break-in sections

---

## How This Hierarchy Is Used

When a procedure in these best practices documents does not cite a specific YL1 source, it derives from Level 1–3 principles above. When a procedure references a specific measurement, torque value, or jet size, it should be verified against the Level 4 factory manual before use.

If a conflict exists between levels, the **more specific level takes precedence** — the factory service manual overrides general motorcycle practice, which overrides general mechanical practice.

> **Action item:** Confirm that `01_Documentation/2Cyl2StrMan.pdf` is readable and extract torque values, bore specs, and jet sizes to replace the estimated values currently flagged with "verify from manual" in the other best practices documents.
