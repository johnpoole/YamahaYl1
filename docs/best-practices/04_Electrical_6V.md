# Electrical System — Best Practices
## Yamaha YL1 (Points/Magneto System)

---

## System Overview

> **⚠️ VOLTAGE DISCREPANCY — VERIFY BEFORE ORDERING PARTS**
> The Intertec service manual (p.11 spec table, confirmed via OCR) lists **12V** for the YL-1 electrical system voltage. This conflicts with the commonly stated 6V assumption in many secondary sources. Early YL-1 production (1964–1966) may have used a 6V system; later models and US-market versions (1967–1968) may have been 12V. The physical battery in your specific bike is the definitive test. **Check the battery before buying replacement electrical parts (bulbs, battery, regulator).**

The YL1 uses a **points-and-condenser (contact-breaker) electrical system** with battery-and-coil ignition.

| Component | Type |
|---|---|
| Electrical system voltage | **12V** per Intertec manual p.11 — ⚠️ physically verify on your bike |
| Ignition type | Points and condenser (contact-breaker) |
| Charging system | AC magneto with rectifier |
| Battery | 12V lead-acid (if confirmed 12V); or 6V — verify before replacing |
| Lighting | Match bulbs to confirmed battery voltage |
| Spark plugs | NGK B7-HS (confirmed: Intertec manual p.11) |
| Spark plug gap | **0.6–0.7mm** (0.024–0.027 in.) (confirmed: Intertec manual p.11) |
| Points gap | **0.3–0.35mm** (0.012–0.014 in.) (confirmed: Intertec manual p.12) |
| Ignition timing | **1.8mm BTDC** (confirmed: Intertec manual p.11) |
| Battery ground | **Negative** ground (confirmed: Intertec manual p.11) |

---

## Why Vintage Electrical Systems Require Extra Attention

> *If the bike turns out to be 6V, note that 6V systems are especially sensitive: a 0.5V drop is an 8% loss (equivalent to 1V on a 12V system). All bulbs, relays, flashers, and the battery must match the system voltage exactly.*

- All bulbs, relays, flashers, and the battery must be **rated for the correct voltage** (12V or 6V — verify first). Voltage mismatch causes dim lights, failure, or charging damage.
- Clean, tight connections are mandatory — corroded connections cause voltage drop and are the #1 cause of electrical gremlins on vintage bikes.
- The charging system is often marginal by design. Running high-wattage accessories will overtax it.

---

## Safety

- Disconnect the battery (negative terminal first) before working on any electrical component.
- Never short the battery terminals — even a small 6V battery can deliver sufficient current to start a fire or cause burns.
- Inspect all wiring for cracked insulation, bare conductors, and heat damage before powering the system.

---

## Magneto / Stator

### Function
The stator (magneto) generates AC current via permanent magnets on the flywheel rotating past stator coils. The ignition coil(s) are triggered by the points, and the lighting/charging coils feed the rectifier.

### Inspection
- Inspect the flywheel magnets for chips or cracks (uncommon but critical).
- Inspect the stator coil windings for burned insulation or broken wires.
- Use a multimeter to check coil resistance:
  - Ignition coil primary: typically 1–5 Ω (low-resistance winding)
  - Lighting coil: typically 0.5–2 Ω
  - Charging coil: typically 0.5–2 Ω
- An open circuit (reads OL / infinite) = failed coil = requires rewinding or stator replacement.

---

## Ignition Points

### Why points fail
- The contact faces pit and oxidize over time (normal wear).
- The rubbing block (on the points arm that contacts the cam lobe) wears and changes the gap.
- The condenser can fail internally, causing misfires and arcing across the points.

### Specification
| Setting | Value |
|---|---|
| Points gap | 0.3–0.4mm (0.012–0.016 in) |
| Ignition timing (full advance) | Verify from manual — typically ~23° BTDC |

### Setting the gap
1. Rotate the engine to the point of maximum points opening (cam lobe pushes the rubbing block to maximum).
2. Insert a feeler gauge of the specified thickness — it should slide through with very slight drag.
3. Loosen the points plate screw, adjust the fixed plate, re-tighten, and re-check.
4. The YL1 has two cylinders and (typically) two sets of points — set both to the same gap.

### Condenser
Replace the condenser whenever you replace points. A failed condenser mimics a dozen other faults. Condensers are cheap; diagnostics are time-consuming.

### Point surface condition
- Light oxidation: clean with a point file or folded strip of 600-grit wet-dry paper.
- Deep pitting: replace the points assembly.
- Do not use emery cloth or sandpaper that leaves abrasive residue.

---

## Ignition Timing

### Static timing
1. Find TDC (Top Dead Centre) for the cylinder being set. Use a dial indicator through the spark plug hole, or use the timing mark on the flywheel aligned with the mark on the crankcase.
2. Without the engine running, rotate the engine backward (counterclockwise when viewed from flywheel) past TDC, then forward to the specified timing mark.
3. At this position, the points for that cylinder should be **just opening** — use a test light between the points terminal and ground; the light should just go dark as you reach the mark.

### Dynamic timing
Use a timing light with the engine running at idle (and at full advance rpm if the advance mechanism is functional). Compare the flywheel/stator timing marks to the specified advance figure.

### Timing relationship to carburetion
Ignition timing and carburetor jetting are interdependent on a 2-stroke. Set timing first to spec, then tune carburetion. Do not advance timing beyond spec to compensate for a lean condition.

---

## Battery

> **Verify voltage before ordering: physically read the markings on the original battery or measure the open-circuit voltage (12V system = ~12.6V fully charged; 6V system = ~6.3V).** The Intertec manual specifies 12V.

- Replace the battery if it is more than 5 years old or shows reduced capacity.
- Use a sealed AGM (absorbed glass mat) battery at the confirmed voltage — AGM provides highest reliability and vibration resistance with no electrolyte spillage risk.
- Charge with a smart charger rated for the correct voltage. Many modern chargers default to 12V only; if the bike turns out to be 6V, use a charger that explicitly supports 6V mode.
- When storing, use a trickle/maintenance charger at the correct voltage, or disconnect and store in a cool dry location.

---

## Rectifier / Charging System

- The original selenium rectifier is likely failed on a 50+ year old bike — replace with a modern silicon diode rectifier of equivalent or higher capacity.
- Test charging output with the engine running at ~3000 rpm: if 12V system, battery voltage should be **13.5–14.5V**; if 6V system, **6.5–7.5V**. Below minimum = weak charging (check coils, rectifier, connections). Above maximum = overcharging (check rectifier and any voltage regulator).

---

## Wiring

### Inspection protocol
- Unwrap all loom tape and inspect every bundled section.
- Look for: heat damage near exhaust, chafing at frame contact points, cracked or brittle insulation throughout.
- Color-code repairs to the original Yamaha wire color standard (documented in the wiring diagram in the service manual).

### Connections
- Clean all bullet connectors with electrical contact cleaner and a pick or small wire brush.
- Replace any corroded or deformed connectors.
- Use dielectric grease on all connectors before reassembly to prevent future corrosion.

### Grounds
- This is a single-wire (frame ground) system. Every ground point must be clean metal-to-metal contact — paint, rust, or corrosion at a ground = all downstream components fail.
- Add a dedicated ground strap from battery negative to frame if the original is missing or damaged.

---

## Spark Plugs

| Specification | Value |
|---|---|
| Type | NGK B7HS (or equivalent) |
| Gap | 0.6–0.7mm |
| Thread | M14 × 1.25 |

- Read the plug to diagnose combustion: light tan/grey = correct; white/clean = lean; black/sooty = rich; oily black = oil fouling (Autolube over-oiling or oil pump leak).
- Replace plugs at every top-end rebuild.
- Anti-seize on plug threads is optional but recommended for aluminum heads — use sparingly and reduce torque by ~30% if used.
