# Documentation Protocol — Yamaha YL1 Restoration

## Purpose
Consistent documentation makes it possible to:
- Reconstruct the state of the bike before any given change
- Identify when and why a problem was introduced
- Communicate with other restorers or shops
- Satisfy future owners or judges if the bike is shown

---

## Photo Protocol

### Before you touch anything
- Photograph **every surface, fastener, routing, and label** before disassembly.
- Shoot from multiple angles. What looks obvious now will be unclear in six months.
- Include a reference object (ruler, coin) in photos when documenting damage, wear patterns, or measurements.

### During disassembly
- Photograph assemblies as they come apart, not just the final state.
- When removing a component that has a specific orientation (e.g., piston, crankshaft key, cam chain), photograph it in-situ before removal.
- Photograph wire routing, cable routing, and hose routing while still connected.

### Photo naming convention
```
[DATE]_[SYSTEM]_[SUB-ASSEMBLY]_[DESCRIPTION]_[SEQ].jpg
```
Examples:
- `20260221_Engine_CrankcaseRH_BeforeOpeningCases_01.jpg`
- `20260221_Carb_LH_Float_Removed_02.jpg`
- `20260221_Electrical_IgnitionPoints_Gap_03.jpg`

> The existing photos use Pixel timestamp names (e.g., `PXL_20241112_205515274.jpg`). These are acceptable as originals but should be described in the photo index.

### Photo storage
- All photos go into `06_Reference_Images/` (original filenames) as the archival copy.
- Working/annotated copies or renamed copies go into the relevant sub-folder (`02_Engine_L1-47603/Photos/`, `03_Carburetion/Photos/`, etc.).
- Update `photo_index.csv` for every newly added photo.

### photo_index.csv format
```
filename,date,system,description,included_in
PXL_20241112_205515274.jpg,2024-11-12,General,Initial received condition (overview),06_Reference_Images
```

---

## Measurement Log

### Purpose
Record all measurements taken during disassembly so wear can be assessed against specification and so final assembly measurements can be compared.

### Location
`02_Engine_L1-47603/Measurements.md` (create per component as work progresses)

### Format
```markdown
## [Component] — [Date]

| Measurement | Location | Reading (mm) | Spec (mm) | Condition |
|---|---|---|---|---|
| Cylinder bore | LH, top of travel | 38.04 | 38.00 +0.00/-0.00 | 0.04 over — acceptable |
| Piston OD | LH, 90° to pin, 10mm up | 37.96 | 37.965 | check clearance vs. spec 0.035–0.040mm |
```

---

## Parts Tracking

### Parts log
Maintain `02_Engine_L1-47603/Parts_Log.md` with:
- Part name and OEM part number (if known)
- Source (NOS, reproduction, used, salvage)
- Supplier and order date
- Received date
- Condition upon receipt
- Installation date

### Format
```markdown
| Date ordered | Part | OEM # | Source | Supplier | Status |
|---|---|---|---|---|---|
| 2026-02-21 | Crank seals (pair) | 93101-20070 | Reproduction | Vintage Yamaha | Ordered |
```

---

## Work Log

### Location
`02_Engine_L1-47603/Work_Log.md`

### Entry format
Each session gets a dated entry:
```markdown
## 2026-02-21

**Hours:** 2.5
**System:** Engine — disassembly
**Work performed:**
- Removed LH and RH head studs (all free, no damage)
- Measured cylinder bore LH: 38.04mm, RH: 38.02mm — within service limit
- Found scoring on LH cylinder wall, ~5mm × 2mm, 40mm from top — documented in Measurements.md

**Issues found:**
- LH cylinder has light scoring — evaluate for re-bore vs. honing at next session

**Next steps:**
- Complete RH side measurements
- Source bore spec piston options if re-bore needed
```

---

## Version Control (Git)

### Commit discipline
- Commit after each work session with a meaningful message.
- Commit format: `[DATE] [SYSTEM] — brief description`
  - Example: `20260221 Engine — disassembly measurements, found LH scoring`
- Never commit photos into Git (use `.gitignore` for image files — or use Git LFS if photos must be tracked).

### What to track in Git
- All `.md` files (notes, logs, best practices)
- All `.csv` files (photo index, parts log if CSV)
- `.gitignore` file

### What NOT to track
- JPG/PNG image files (use separate cloud storage or Git LFS)
- PDF manuals (use Git LFS or keep outside repo)

### Recommended .gitignore
```
*.jpg
*.jpeg
*.png
*.gif
*.pdf
*.zip
```

---

## Communication Notes

When sharing status with other restorers, shops, or forums:
- Always reference the engine serial (**L1-47603**) to pin the exact production variant.
- Specify whether measurements are in mm or inches (this manual uses both — prefer mm throughout this project).
- When posting photos for advice, annotate them (with an image editor or markup tool) with arrows or callouts identifying the specific issue.
