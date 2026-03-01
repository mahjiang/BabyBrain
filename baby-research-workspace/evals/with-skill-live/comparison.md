# Live Search vs Training-Data Comparison

*Analyzed 2026-02-28*

## What Live Search Added

### Car Seat — New findings not in any training-data output

| Finding | Source | Why it matters |
|---------|--------|---------------|
| **European belt path** — 95% vs 20% secure baseless installation rate | Car Seat Lady, CHOP CChIPS study | Major transit-relevant safety finding. Chicco Fit2 and Nuna PIPA rx support this. Directly actionable for rideshare/transit families |
| **FMVSS 213a** — new side-impact standard, Dec 2026 deadline | The Car Seat Pros, Federal Register | New federal regulation. Context for buying now vs waiting |
| **Clek Liingo** — baseless-designed infant seat | Clek product page | Niche product specifically designed for transit/baseless use |
| **Weight corrections** — Nuna PIPA rx is 7.6 lb, not 8.5 lb | Nuna official page | Training data had wrong weight. Live data is more accurate |
| **Chicco Fit2** — 2-year rear-facing carrier, not just 1 year | Car Seat Lady recommendation | New option not in training data outputs; specifically recommended for transit families |

### Sleep — More precise numbers and direct citations

| Finding | Source | Why it matters |
|---------|--------|---------------|
| **Exact CDC 2022 SUID breakdown** — 1,529 SIDS + 1,131 unknown + 1,040 ASSB | CDC SUID data page | More precise than training data's approximations |
| **Pacifier NNT: 1 per 2,733** | PubMed meta-analysis | Specific number; training data said "40-60% reduction" without NNT |
| **Oster's room-sharing skepticism** — direct quote: "sensitive to assumptions" | ParentData article | Actual Oster position sourced, not paraphrased from training data |
| **INSIGHT Study** — room-sharing past 4mo = 45 min less sleep per night | PMC/Penn State | Specific study quantifying the sleep quality tradeoff |
| **SUID trend increasing since 2020** | CDC trends data | New finding — training data didn't flag this |

### Stroller — New products and verified rankings

| Finding | Source | Why it matters |
|---------|--------|---------------|
| **Nuna TRVL is CR 2025 Top Pick** | Consumer Reports | Confirmed #1 stroller pick from the most independent reviewer |
| **Joolz Aer+ discovered** — 13.2 lb, one-second fold | BabyGearLab | Not in ANY training data output. A top contender for transit families |
| **Verified folded dimensions** | Manufacturer pages | Training data didn't have fold dimensions; these matter for apartment storage |
| **Mockingbird Single 2.0** — 27 lb, poor transit fit | BabyGearLab | Correctly identified and ranked Poor; training data didn't include it |

### Carrier — Different #1 pick, new products

| Finding | Source | Why it matters |
|---------|--------|---------------|
| **Beco Gemini is Wirecutter's #1** (tested 16 carriers, 10 parents, 6 educators) | Wirecutter | Training data focused on Ergobaby/BabyBjorn. Live search found the actual current top pick |
| **WildBird ring sling** — linen, aluminum rings, best quick on/off | WildBird, Babylist | Specific ring sling recommendation not in training data |
| **Lillebaby fetal position NOT IHDI-recommended** | IHDI carrier page | Important safety caveat found via live IHDI search; training data missed this |
| **Solly TENCEL Modal** fabric details confirmed | Solly Baby page | Material verified; relevant for summer heat assessment |

---

## Timing Comparison (All Three Test Rounds)

| Eval | Baseline (no skill) | With Skill (training data) | With Skill (live search) |
|------|---------------------|---------------------------|-------------------------|
| Car seat | 90s / 16K tokens | 168s / 38K tokens | 313s / 54K tokens |
| Sleep | 156s / 19K tokens | 196s / 38K tokens | 471s / 58K tokens |
| Stroller + Carrier | 152s / 20K tokens | 232s / 36K tokens | 407s / 69K tokens |

Live search adds ~2-3x duration vs training-data-only skill runs. This is expected — web fetches take time. The quality improvement justifies the cost.

---

## Final Assertion Grading: Live Search

### Car Seat

| Assertion | Baseline | Skill (training) | Skill (live) |
|-----------|----------|-------------------|--------------|
| trusted-sources | PARTIAL | PARTIAL | **PASS** — actually searched CR, Car Seat Lady, NHTSA, manufacturer pages |
| evidence-evaluation | PARTIAL | PASS | **PASS+** — CHOP study cited, FMVSS 213a found |
| situation-filtering | PASS | PASS+ | **PASS+** — European belt path finding directly applicable |
| oster-framework | FAIL | PASS | **PASS** — same quality |
| options-table-filled | PASS | PASS | **PASS+** — new models (Chicco Fit2, Clek Liingo), corrected weights |

### Sleep

| Assertion | Baseline | Skill (training) | Skill (live) |
|-----------|----------|-------------------|--------------|
| trusted-sources | PASS | PASS | **PASS+** — AAP, CDC, ParentData actually fetched |
| evidence-evaluation | PASS | PASS+ | **PASS+** — NNT calculated, INSIGHT Study cited |
| oster-framework | PARTIAL | PASS | **PASS+** — Oster's actual positions sourced from ParentData |

### Stroller + Carrier

| Assertion | Baseline | Skill (training) | Skill (live) |
|-----------|----------|-------------------|--------------|
| trusted-sources | PARTIAL | PASS | **PASS** — CR, BabyGearLab, Wirecutter, IHDI actually searched |
| options-tables-filled | PASS | PASS | **PASS+** — new products found (Joolz Aer+, Beco Gemini, WildBird) |
| situation-filtering | PASS | PASS+ | **PASS+** — verified specs make filtering more reliable |

---

## Conclusion

The skill works across all three test conditions, with clear incremental improvement at each stage:

1. **Baseline** — good raw content, but no Oster framework, no situation fit ranking, Reddit sourced
2. **Skill + training data** — adds Oster framework, Situation Fit column, source discipline, cross-links
3. **Skill + live search** — adds verified data, new product discoveries, precise numbers, actual source citations

The biggest wins from live search are **new product discoveries** (Joolz Aer+, Beco Gemini, Chicco Fit2, WildBird) and **factual corrections** (weight specs, European belt path data, FMVSS 213a). These are exactly the kinds of findings that training data can't provide.

The skill is ready for production use.
