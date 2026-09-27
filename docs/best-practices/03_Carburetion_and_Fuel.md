# Carburetion & Fuel System — Best Practices
## Yamaha YL1

---

## Carburetor Overview

The YL1 uses **two Mikuni VM16SC slide-type carburetors**, one per cylinder, mounted on short rubber/metal manifolds. Each carb feeds one cylinder independently.

| Carburetor | Specification | Source |
|---|---|---|
| Make/type | Mikuni VM (round-slide, slide-type) | Intertec manual p.11 |
| Bore | 16mm | Estimated — verify |
| Main jet | Not recovered from OCR (table layout issue) | ⚠️ Verify from printed manual |
| Pilot jet | Not recovered from OCR | ⚠️ Verify from printed manual |
| Needle jet | Not recovered from OCR | ⚠️ Verify from printed manual |
| Valve needle clip | **3rd groove from top** | Intertec manual p.11 |
| Float height | **23mm (0.906 in.)** | Intertec manual p.11 ✅ |
| Idle speed | **1200–1500 RPM** (100cc models) | Intertec manual p.11 ✅ |
| Idle mixture initial setting | **2.5 turns open** (needle counter-clockwise = lean) | Intertec manual p.11 ✅ |
| Carburetor sync | Both slides must open simultaneously | Intertec manual p.11 ✅ |

> The main jet and pilot jet sizes were listed in a table column in the manual (p.11) that was not captured by OCR due to multi-column layout. These values **must be verified from the printed manual** before ordering jets.

---

## Fuel System — Safety First

- Completely drain the fuel tank and bowls before any carb work.
- Work with the petcock closed and a drain pan in place.
- Do not use compressed air to blow out the tank without venting first — fuel vapor + air + a static spark = fire.
- Dispose of old fuel properly — do not pour down drains.

---

## Carburetor Disassembly

### Tools needed
- JIS screwdrivers (#1 and #2)
- Small flat-blade screwdriver (for pilot screw)
- Needle-nose pliers
- Carb cleaner and soak tank
- Compressed air at ≤ 30 PSI with blow gun

### Disassembly sequence
1. Remove the float bowl (typically two screws). Note gasket condition.
2. Remove the float pivot pin (slide out laterally or push out with a punch). Lift float and needle valve assembly out as one unit — do not separate unless replacing.
3. Remove main jet (center of the bowl cavity, flat-blade screwdriver). Note the size stamped on the jet.
4. Remove the pilot jet (adjacent to main jet).
5. Remove the pilot/air screw — count the turns out as you remove it and **record the number** (baseline setting). Typical: 1.5–2.5 turns out.
6. Remove the top cap and lift out the slide and needle.
   - Note needle clip position (count grooves from top).
   - Inspect needle for straightness and wear (oval cross-section where the needle jet contacts = worn).
7. Remove needle jet / needle jet holder from inside carb body.

---

## Cleaning

### What to clean
- All passages in the carb body: main bore, pilot circuit, float bowl chamber, emulsion tube holes.
- All jets: blow through with compressed air after soaking — do not use wire or drill bits to "ream" jets (this enlarges them and ruins calibration).
- Float bowl, float pivot, and bowl groove for the O-ring/gasket.

### Soaking
- Use a proper carb-dip or ultrasonic cleaner for heavily fouled carbs.
- Do not soak rubber parts (O-rings, diaphragms if present, fuel hoses) in carb cleaner — they will swell or dissolve.
- Do not soak plastic parts in aggressive solvents.

### Inspecting passages
- Hold the body up to a light and confirm you can see light through the pilot circuit and all small holes.
- The pilot circuit is the most common failure point — it is a small, winding passage that clogs with varnish from old fuel.

---

## Inspection

### Float and needle valve
- Shake the float — if you hear liquid inside, the float is punctured and must be replaced.
- Check the needle valve rubber tip for grooves or a ridge (worn valve = flooding).
- Check the float pivot pin bore in the body for wear.

### Slide
- The slide (throttle valve) should move freely in the bore with no binding.
- Check the cutaway on the bottom of the slide — this affects off-idle mixture. If the carbs were previously re-jetted, the slide cutaway may have been modified.

### Needle and needle jet
- Replace both needle and needle jet together if there is visible wear.

### Carb body
- Inspect the main bore for wear or scoring from a stuck slide.
- Inspect all threaded passages (jets, pilot screw) for thread damage.

---

## Synchronization (Critical for a Twin)

Both carbs must be synchronized so that:
1. The slides open simultaneously (equal throttle input to both cylinders).
2. The pilot screws are set to equal turns out, producing equal idle mixture.
3. Float heights are set identically (equal fuel level = equal mixture at any throttle position).

### Sync procedure
- Use a vacuum gauge set (twin port manometer) to verify equal manifold vacuum at idle after all other settings are confirmed.
- Adjust sync via the slide adjustment screw at the top of each carb, or via throttle cable adjustment at the junction (if a junction box or equal-pull splitter is used).
- **Do not attempt to tune carbs on a poorly sealing engine** — crank seal leaks produce false-lean conditions that cannot be carbed out.

---

## Float Height Setting

Incorrect float height is the most common source of rich or lean running that cannot be tuned with the pilot screw.

1. Invert the carb body with the float bowl off.
2. Allow the float to hang down under its own weight until the needle valve just contacts its seat (do not compress the valve spring if present).
3. Measure the distance from the carb body mating surface to the bottom of the float at the horizontal pont.
4. Compare to spec (typically 22–24mm on a VM16 — verify).
5. Adjust by carefully bending the tab on the float arm that contacts the needle valve. Bend in small increments.

---

## Pilot Screw (Air/Fuel Screw)

The pilot screw on a VM-series Mikuni controls the **air** side of the pilot circuit (it is an air screw):
- Turning **out** = richer idle mixture
- Turning **in** = leaner idle mixture

Starting point is 1.5 turns out. Fine-tune at warm idle by turning out in ¼-turn increments until idle speeds up, then back in ¼ turn.

> On a new build, set both carbs to **identical** pilot screw positions as a baseline before first start.

---

## Fuel Tank

- Inspect internally for rust. Light surface rust: treat with phosphoric acid (Kreem or POR-15 tank sealer) after thorough cleaning. Heavy flake rust: requires media blasting internally, or tank replacement.
- **Do not seal a tank with internal rust remaining** — sealant over rust will lift and deposit particles in the carbs.
- Replace the petcock if the diaphragm (if vacuum-operated) is cracked or if the fuel strainer screen is damaged.
- Replace all fuel lines — 50+ year old rubber fuel hose is a fire hazard.

---

## Fuel Specification

- 91+ octane unleaded pump fuel is acceptable.
- If the Autolube system is operational, no oil is added to the fuel.
- If running premix (Autolube disabled/removed): mix at 32:1 (JASO FC/FD oil) for normal use, 20:1 for break-in.
- Ethanol content: E10 (10% ethanol) pump fuel is generally acceptable with the rubber seals found in these carbs, but monitor for swelling or deterioration. E15 and above is **not recommended** — replace all rubber fuel system components with ethanol-compatible equivalents if E15+ fuel is unavoidable.
