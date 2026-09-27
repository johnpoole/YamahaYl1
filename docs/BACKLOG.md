# Project Backlog
## Yamaha YL1 Twin Jet 100 — L1-47603

Milestones and success criteria are defined in [PRD.md](PRD.md).
Item format follows [TODO_Backlog_Guide.md](YL1_Project_docs/Yamaha_YL1_Project/00_Best_Practices/Software_Docs/TODO_Backlog_Guide.md).

---

## Project / Documentation

### B-001 — Confirm PDF extractability

**Priority:** Critical
**Status:** Not Started
**System:** Docs

Attempt to extract text from `2Cyl2StrMan.pdf`. If text-extractable, pull all torque values, bore specs, jet sizes, and float heights and replace "verify from manual" estimates throughout best practices docs. If image-only, manually transcribe critical values.

---

### B-002 — Resolve Open Question: Autolube or premix?

**Priority:** Critical
**Status:** Not Started
**System:** Engine / Docs

Determine whether the Autolube pump is functional. If disabled or removed, write ADR-003 documenting the decision to run premix and update best practices docs accordingly.

---

### B-003 — Set up `.gitignore`

**Priority:** High
**Status:** Done
**Done:** 2026-02-21
**System:** Project

Create `.gitignore` at repo root excluding `*.jpg`, `*.jpeg`, `*.png`, `*.pdf`, `*.zip` from Git tracking. See RUNBOOK for the standard content.

---

### B-004 — Initialize Git repo and make first commit

**Priority:** High
**Status:** In Progress
**System:** Project
**Depends on:** B-003

Stage all current docs-only files and commit. Commit message: `20260221 Project — initial structure, best practices, PRD, CHANGELOG, BACKLOG, RUNBOOK`.

---

### B-005 — Annotate photo index

**Priority:** Medium
**Status:** Not Started
**System:** Docs

Update `photo_index.csv` with `date`, `system`, and `description` columns per the Documentation Protocol format. 16 photos currently have only filename and path.

### B-006 — Create retroactive work log from photos

**Priority:** Medium
**Status:** Not Started
**System:** Docs

Create a dated work log entry in `02_Engine_L1-47603/Work_Log.md` covering the Nov 2024 – Jan 2025 disassembly sessions. Use the 16 photo timestamps as the timeline anchor. Describe what is visible in each photo group and what state the bike is in.

---

### B-010 — Photograph current condition (complete set)

**Priority:** Critical
**Status:** Done
**Done:** 2024-11-12 through 2025-01-10
**System:** Engine / General

With bike in current state, photograph all systems before any disassembly: overall, engine externals (LH, RH, top, front), carburetor mounting, electrical routing, frame condition, wheels/tyres/brakes, instrument cluster.

> 16 photos captured (PXL timestamps). Not yet annotated — see B-005.

---

### B-011 — Engine disassembly — top end

**Priority:** Critical
**Status:** Done
**Done:** ~2025-01-10 (estimated from last photo)
**System:** Engine
**Depends on:** B-010

Remove heads, cylinders, pistons. Photograph each step. Record in Work Log.

> Bike is substantially disassembled as of 2026-02-21. Work Log entry outstanding — create retroactively from photos.

---

### B-012 — Measure cylinder bores

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-011

Measure LH and RH bore at 6 points each. Record in Measurement Log. Compare to spec (confirm spec from B-001 first).

---

### B-013 — Measure piston OD and ring end-gap

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-011

---

### B-014 — Assess crank big-end play and runout

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-011

Check big-end radial play. If cases need splitting, check main bearing condition and crank runout with dial indicator.

---

### B-015 — Disassemble and assess both carburetors

**Priority:** Critical
**Status:** Not Started
**System:** Carburetion

Full teardown per `03_Carburetion_and_Fuel.md`. Record jet sizes found. Assess float, needle valve, slide, and pilot circuit condition.

---

### B-016 — Assess ignition points and timing marks

**Priority:** Critical
**Status:** Not Started
**System:** Electrical

Check point condition and current gap. Verify timing marks are legible on flywheel and stator.

---

### B-017 — Inspect wiring harness

**Priority:** High
**Status:** Not Started
**System:** Electrical

Unwrap loom. Inspect for cracked insulation, damaged connectors, missing grounds. Photograph routing before any disturbance.

---

### B-018 — Measure brake drum IDs and shoe lining thickness

**Priority:** Critical
**Status:** Not Started
**System:** Frame / Chassis

Both front and rear. Compare to service limits.

---

### B-019 — Inspect frame welds and check alignment

**Priority:** Critical
**Status:** Not Started
**System:** Frame / Chassis

Check steering head, engine mounts, swingarm pivot. Dye-penetrant test if any questionable welds found.

---

### B-020 — Check tire age and condition

**Priority:** Critical
**Status:** Not Started
**System:** Frame / Chassis

Read DOT date codes. Replace if over 6 years old regardless of appearance.

---

### B-021 — Compile final parts list from assessment

**Priority:** Critical
**Status:** Not Started
**System:** Project
**Depends on:** B-011 – B-020

Consolidate all required parts into `02_Engine_L1-47603/Parts_Log.md`. Begin ordering Critical-priority parts.

---

## M2 — Engine Rebuild

### B-030 — Order and receive all engine parts

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-021

---

### B-031 — Cylinder bore or hone (machine work)

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-012, B-030

---

### B-032 — Split cases and replace crank seals

**Priority:** Critical
**Status:** Not Started
**System:** Engine

---

### B-033 — Reassemble bottom end

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-032

---

### B-034 — Reassemble top end (pistons, cylinders, heads)

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-031, B-033

---

### B-035 — Rebuild both carburetors

**Priority:** Critical
**Status:** Not Started
**System:** Carburetion
**Depends on:** B-015, B-030

---

### B-036 — Replace points, condensers, set gap and timing

**Priority:** Critical
**Status:** Not Started
**System:** Electrical

---

## M3 — First Start

### B-040 — Pre-start checklist

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-034, B-035, B-036

Complete the First Start Checklist from `07_Break_In_and_Tuning.md`. All items must be checked before first start attempt.

---

### B-041 — First start and initial tune

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-040

---

## M4 — Break-In

### B-050 — Complete 300km break-in protocol

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-041

Three phases per `07_Break_In_and_Tuning.md`.

---

### B-051 — Post-break-in service

**Priority:** Critical
**Status:** Not Started
**System:** Engine
**Depends on:** B-050

Re-torque heads, re-check timing and points gap, change Autolube oil/premix, read plugs.

---

## M5 — Project Complete

### B-060 — Verify all PRD success criteria

**Priority:** Critical
**Status:** Not Started
**Depends on:** B-051

Walk through every checkbox in `PRD.md` success criteria section.

---

### B-061 — Finalize all documentation

**Priority:** High
**Status:** Not Started

Ensure measurement log, parts log, work log, photo index, and CHANGELOG are all current and complete.

---

### B-062 — Final commit and tag

**Priority:** Medium
**Status:** Not Started
**Depends on:** B-061

Commit all final documentation. Tag the commit `v1.0-complete` or equivalent milestone tag.

---

## Completed

*(Items move here when Done, with completion date)*
