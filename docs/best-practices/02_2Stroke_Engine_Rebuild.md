# 2-Stroke Engine Rebuild — Best Practices
## Yamaha YL1 (97cc Parallel Twin, Piston-Port)

---

## Understanding the YL1 Engine

### Architecture
- **Type:** Air-cooled 2-stroke parallel twin, 180° firing order
- **Bore × Stroke:** 38mm × 43mm per cylinder  *(confirmed: Intertec manual p.11)*
- **Displacement:** 98cc total (49cc per cylinder)  *(confirmed: Intertec manual p.11)*
- **Induction:** Piston-port (transfers controlled by piston skirt position — no reed or rotary valve)
- **Oiling:** Yamaha Autolube — crankshaft-driven pump meters oil into the intake tracts based on throttle position and rpm. Each cylinder has its own oil delivery point.
- **Compression ratio:** ~7.3:1 (verify against your manual revision)
- **Crankshaft:** Pressed-together built-up crank; two separate crank pin assemblies sharing a common main bearing journal

### Why 2-stroke rebuilds differ from 4-stroke
1. **Crankcase sealing is critical.** The crankcase in a 2-stroke is the primary compression chamber for induction — any air leak past crank seals, gaskets, or the reed block (N/A here) causes a lean mixture and will result in seizure. Every seal and gasket must be perfect.
2. **No valves to adjust** — but port timing is fixed by cylinder position. A damaged port edge will affect power and reliability.
3. **Bearings are needle-roller** throughout (big end, small end, main bearings). There is no hydrodynamic oil film like a 4-stroke crank journal. Bearings must be in perfect condition.
4. **Ring sealing is power-critical.** On a piston-port engine, ring end-gap must be correct and ring locating pins must be intact, or a ring will snag in a transfer or exhaust port and shatter.

---

## Pre-Disassembly

1. Run the engine if possible. Note which cylinder (if either) fires, smoke color, any knocks or rattles, and throttle response. This guides disassembly priority.
2. Drain the Autolube tank and the fuel system completely.
3. Photograph all external assemblies, wire routing, cable routing, and fuel line routing.
4. Clean the exterior of the engine before opening anything.

---

## Top End Disassembly

### Cylinder heads
- Loosen head nuts in a crossing pattern, ½ turn at a time, to avoid warping the head.
- If the head is stuck, do not pry against the gasket surface. Apply heat to the head fins around the stud area and try again. Or flood with penetrating oil at the gasket line and wait.
- **Inspect:** combustion chamber for carbon buildup pattern (uneven = lean spot), stud condition, O-ring or gasket surfaces for erosion.

### Cylinders
- Lift straight up — do not cock the cylinder. The piston-to-bore clearance is tight and the rings can snag on the port edges if the cylinder is tilted.
- Control the piston as the cylinder clears the rings — do not let the naked piston slam against the crankcase mouth.
- **Inspect:** bore for scoring, taper, and out-of-round (measure at top, middle, and bottom of ring travel, in two axes). Port edges for cracks or chips. Skirt fit on studs.

### Pistons and rings
- Mark each piston L or R and up/down orientation before removal.
- Remove wrist pin circlips with needle-nose pliers — **do not use a pick, which can slip and score the piston boss**.
- Support the piston from below when driving the wrist pin out. Do not let the connecting rod take the bending load.
- **Inspect:** piston crown for burning or erosion, skirt for scoring or scuffing, wrist pin boss for cracks, ring grooves for wear (side clearance). Check small-end bearing needle cage for wear or corrosion.

---

## Bottom End / Crank Seals

### Why crank seals fail and why they matter
The primary crank seals (both inboard and outboard on each crank stub) contain crankcase pressure. Any leak means air dilutes the mixture, the engine runs lean, and pistons overheat. On an old bike, seals are the **first** thing to replace — regardless of apparent condition.

### Removal
- Remove the stator/flywheel (requires flywheel puller — do not hit the crank end), then pry or press out the outboard seals.
- Splitting the cases (required for inboard seals): follow the case bolt removal sequence in the service manual exactly. Lightly tap around the parting line with a rubber mallet — do not wedge screwdrivers into the gasket surface.

### Inspection — crankshaft
- Check main bearing surfaces for roughness, discoloration (blue = ran too hot), or play.
- Check crank pin needle bearings by rocking the connecting rod side-to-side — any detectable side-to-side play in the radial direction (perpendicular to the rod axis) indicates a worn big-end.
- Check for crank runout with a dial indicator in V-blocks. Runout > 0.05mm typically requires truing or replacement.
- **Do not attempt to true a crank without the proper truing stand and experience.** Incorrectly pressed cranks fail catastrophically.

### Seal installation
- Clean the seal bore thoroughly before installation.
- Lightly coat the outer rim of the new seal with gasket sealant (Three Bond 1211 or equivalent).
- Drive the seal in squarely with a seal driver or appropriate socket — never cock it in.
- Coat the seal lip with fresh 2-stroke oil before assembly.

---

## Cylinder Measurement Procedure

### Bore measurement
- Use a telescoping gauge and micrometer, or a dial bore gauge.
- Measure at three depths: 10mm from top, midpoint, 10mm from bottom of ring travel.
- Measure in two axes: parallel to the crank axis, and 90° to it.
- Record all six measurements in the measurement log.

### Confirmed specification limits (Intertec manual p.13)
| Parameter | Spec | Source |
|---|---|---|
| Piston skirt to cylinder clearance | **0.035–0.040mm** (0.0013–0.0016 in.) | ✅ Confirmed |
| Maximum cylinder taper or out-of-round | **0.05mm** (0.002 in.) | ✅ Confirmed |
| Piston ring end gap | **0.10–0.30mm** (0.004–0.012 in.) | ✅ Confirmed |
| Ring clearance in groove | **0.03–0.07mm** (0.0012–0.0027 in.) | ✅ Confirmed |
| Connecting rod side shake (big end) | **0.8–1.0mm** (0.032–0.039 in.); replace if >2mm | ✅ Confirmed |
| Con-rod side clearance (between counterweights) | **0.1–0.3mm** | ✅ Confirmed |

| Condition | Action |
|---|---|
| All readings within 0.05mm of nominal | Hone and reuse |
| Any reading 0.05–0.25mm over nominal | Evaluate — may need re-bore to first oversize |
| Scoring that cannot be honed out | Re-bore to first oversize |
| Taper > 0.05mm | Re-bore |

### Oversizes for the YL1
Standard bore is **38.00mm** *(confirmed: Intertec manual p.11 — bore=38mm)*. Oversize pistons are typically available in +0.25mm, +0.50mm, and +1.00mm increments — verify availability before committing to a bore size.

---

## Ring Fitting

- **Check ring end-gap** in the bore (square the ring with a piston, push to the bottom of ring travel). Spec is **0.10–0.30mm** *(confirmed: Intertec manual p.13)*. Too tight: file the ends carefully; never close a gap.
- **Check ring side clearance** in the groove. Excessive clearance (> 0.10mm) means the groove is worn — replace the piston.
- Rings must align with the locating pins in the ring grooves. If a pin is missing or broken, the piston must be replaced — do not run without pins.

---

## Assembly

### Cleanliness
All assembly must be done on a clean surface with clean hands and clean tools. One particle of grit in a needle bearing ends the engine.

### Lubrication at assembly
- Main bearings: pack with fresh 2-stroke grease or assembly lube.
- Big-end bearings and small-end: coat with 2-stroke oil.
- Cylinder wall and rings: coat generously with fresh 2-stroke oil.
- Do not use copper-based anti-seize on aluminum threads — use sparingly only on steel fasteners into aluminum, or use Yamaha Bond / Three Bond.

### Gaskets and seals
- Never reuse a head gasket or base gasket. Always use new.
- Do not use RTV (silicone gasket maker) on the cylinder head or base unless the manual specifically requires it. Excess silicone migrates into the engine.
- Use Three Bond 1215 or the original gasket on case mating surfaces (very thin coat on both surfaces, allow to tack before closing).

### Torque sequence
- Always follow the crossing-pattern torque sequence from the service manual.
- Use a calibrated torque wrench — do not estimate by feel on aluminum.
- Do not exceed the specified torque on aluminum studs. Over-torquing pulls threads.

### Reference torque values
| Fastener | Torque | Source |
|---|---|---|
| Cylinder head stud nuts | **103 kg-cm (90 in-lb / 7.5 ft-lb / 10.1 N·m)** | Intertec manual p.13 ✅ |
| Cylinder base nuts | ~1.0–1.2 kgf·m (7–9 ft-lb) | Estimate — verify from manual ⚠️ |
| Flywheel nut | ~3.5–4.0 kgf·m (25–29 ft-lb) | Estimate — verify from manual ⚠️ |
| Crankcase bolts | ~0.8–1.0 kgf·m (6–7 ft-lb) | Estimate — verify from manual ⚠️ |

> **Note:** Only cylinder head torque has been confirmed from the manual OCR. All other torque values are estimates. Verify remaining values from the printed manual before use.

---

## Autolube System

### Do not disable without a plan
The Autolube system provides precision-metered lubrication. If the pump is seized or removed, you must switch to **premix** (20:1 or 32:1 2-stroke oil in fuel) and seal or cap the oil injection ports. Running without oil lubrication is fatal to the engine.

### Inspection
- Check the oil pump for smooth rotation and that the drive gear meshes correctly.
- Prime the pump and lines with fresh 2-stroke oil before first start after a rebuild.
- Bleed the pump output lines to remove air before running — air lock starves the engine of oil.

### Oil type
Use a quality air-cooled 2-stroke oil. JASO FC or FD rated. Do not use outboard (water-cooled) 2-stroke oil, which is formulated differently and may carbonize in air-cooled engines.
