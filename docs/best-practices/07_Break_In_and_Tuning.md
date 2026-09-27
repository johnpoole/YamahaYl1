# Break-In & Tuning — Best Practices
## Yamaha YL1 (97cc 2-Stroke Twin)

---

## Prerequisites Before First Start

Do **not** attempt to start the engine until all of the following are verified:

- [ ] Crank seals installed and cases fully sealed — no exceptions
- [ ] Cylinder head nuts torqued to spec in crossing pattern
- [ ] Base gaskets installed and base nuts torqued
- [ ] Autolube oil pump lines bled and fully primed (or confirmed premix if Autolube is disabled)
- [ ] Fresh 2-stroke oil in Autolube tank (if using injection)
- [ ] Fuel system clean, fresh fuel, no leaks
- [ ] Both carbs clean, assembled, and set to baseline (pilot screws 1.5 turns out, float heights equal)
- [ ] Ignition points clean and gapped correctly (both cylinders)
- [ ] Ignition timing set statically and verified
- [ ] Spark plugs installed (new NGK B7HS, gapped to 0.6–0.7mm)
- [ ] All electrical connections clean and secure
- [ ] Battery charged
- [ ] Exhaust pipes and mufflers installed (never run an open-pipe 2-stroke — it destroys the carb tune)
- [ ] Fire extinguisher on hand
- [ ] Engine stand or bike secured on centerstand with rear wheel clear of ground

---

## First Start Procedure

### Pre-start
1. Confirm choke (enrichener) is functional — it should fully close the air passage.
2. Turn fuel petcock to PRI (prime) or ON — verify fuel reaches the float bowl (you hear the bowl filling).
3. Open choke fully (choke ON = air closed = richer).

### Starting
1. Kick through several times with the ignition OFF to distribute oil and fuel through the system.
2. Turn ignition ON.
3. Kick-start. If no start within 5 kicks:
   - Check that fuel is reaching the bowls (open a drain screw).
   - Check for spark (remove plug, ground to engine, kick — look for spark).
   - Do not flood — if the engine has been kicked many times and is wet, remove both plugs and kick through 10 times to clear the bores before re-installing.
4. On start, **do not blip the throttle**. Let it idle.

### Immediate post-start checks (do these within the first 30 seconds)
- Verify fuel is not leaking anywhere.
- Verify no exhaust smoke that is excessive or colored (light blue/white smoke is normal for a new build; black smoke = running rich).
- Verify oil pump is pumping (trace line from tank — should be empty area near pump filling slightly as it pumps).
- Listen for any knock or rattle — shut off immediately if anything sounds wrong.

---

## Warm-Up

- Allow the engine to idle and warm up for **3–5 minutes** before adjusting anything.
- A cold 2-stroke will idle unevenly — this is normal until it warms up.
- Once warm, the idle should stabilize. Both cylinders should be firing.

### Identifying a dead cylinder at idle
- Place a hand near each exhaust pipe outlet. Both should be equally warm and have equal exhaust pulse.
- A cool pipe = that cylinder is not firing. Likely causes: fouled plug, points not triggering, carb flooding or misfire.

---

## Initial Carb Tuning

### Idle speed
Set idle speed with the throttle stop screw until the engine idles smoothly at the lowest stable rpm (~1,000–1,200 rpm).

### Pilot screw adjustment (warm engine, stable idle)
1. Start at 1.5 turns out on each carb.
2. Turn one carb's pilot screw out in ¼-turn increments; if idle speed increases, you had a lean idle on that side. Continue until idle peaks, then back in ¼ turn.
3. Repeat on the second carb.
4. After both sides are set, re-adjust idle speed to target with the throttle stop screw.

### Basic synchronization check
- Listen for an even firing cadence. A parallel twin with correct, matched carbs and timing should sound like a smooth, even "bap-bap-bap."
- Slight differences can be equalized by adjusting throttle cable slack (both slides should lift simultaneously).

---

## Break-In Protocol

### Why break-in matters on a 2-stroke
The cylinder wall, rings, and piston skirt must seat properly during break-in. This establishes the microscopic surface finish that holds oil film and ensures long engine life. Running too hard immediately prevents proper seating.

### Break-in for a freshly rebuilt top end (new rings, freshly honed or bored cylinder):

**Phase 1 — First 20 km (12 miles)**
- Vary throttle constantly — do not hold a steady throttle for more than 30 seconds.
- Keep throttle below 1/3 open.
- Allow engine to cool fully (15–20 min) after every 5–10 km.
- Check for any fuel or oil leaks after every cool-down.

**Phase 2 — 20–100 km (12–60 miles)**
- Throttle up to 1/2 open; brief excursions to 2/3 open are acceptable.
- Continue varying throttle (engine braking and light acceleration are good for seating).
- No sustained high-rpm running.

**Phase 3 — 100–300 km (60–180 miles)**
- Gradually increase maximum throttle opening toward full.
- Still avoid prolonged full-throttle runs.
- At 300 km: drain and refill the gearbox oil (it carries the break-in wear; Autolube oil is burned once and never returns to the tank); re-check all torque values; re-check ignition timing and valve (N/A for 2-stroke) / carburetor settings.

**After 300 km:** Normal operation resumes. The engine is now broken in.

### Break-in oil
If running premix for break-in, use 20:1 (50ml oil per 1L fuel) for the first tank. Return to 32:1 after break-in is complete.

---

## Jetting Reference

Jetting must be appropriate for your altitude and ambient temperature. These are approximate baselines for sea level, ~20°C (68°F):

| Circuit | Jet / Setting | Effect of going richer | Effect of going leaner |
|---|---|---|---|
| Pilot (idle–1/8 throttle) | Pilot jet + pilot screw | Smooth idle, may blubber | Hanging idle, stumble |
| Needle (1/8–3/4 throttle) | Clip position | Smooth mid-range | Flat spot mid-range |
| Main (3/4–full throttle) | Main jet size | Four-stroke at WOT | Lean seizure risk at WOT |

**Altitude correction:** Jet richer at high altitude (thinner air = richer mixture needed) — or, counterintuitively, jet **leaner** when riding at altitude because the air is thinner. Remove a jet size (e.g., 75 → 72) for every ~1,500m / 5,000ft gain. Use an online jetting calculator as reference.

---

## Reading the Plugs

After the first full-throttle run (Post Phase 3), remove and read both spark plugs:

| Plug appearance | Interpretation | Action |
|---|---|---|
| Light tan/grey on insulator | Correct mixture | None |
| White or very clean | Lean | Richer main jet; check timing |
| Black sooty, dry | Rich | Leaner main jet; check Autolube |
| Black oily, wet | Oil fouling | Check Autolube pump output rate; ensure crank seals are good |
| Melted/eroded electrode | Severe lean or over-advance | Investigate immediately — pre-seizure condition |

Both plugs should read identically. A difference between cylinders indicates a carburetion or timing imbalance between sides.

---

## Post-Break-In Service

At 300–500km after rebuild:
- Re-torque cylinder head nuts (they can relax after heat cycling).
- Re-check and re-set points gap (break-in heat cycles can cause slight movement).
- Re-check ignition timing.
- Inspect and clean (or replace) spark plugs.
- Change the gearbox oil. Re-check the premix ratio if applicable.
- Inspect for any new leaks or fastener loosening.
