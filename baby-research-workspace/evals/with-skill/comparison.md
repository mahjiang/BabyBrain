# Baseline vs With-Skill Comparison

*Analyzed 2026-02-28*

## Assertion Grading: With-Skill Tests

### Eval 1: Car Seat (Gear)

| Assertion | Baseline | With Skill | Improved? |
|-----------|----------|------------|-----------|
| trusted-sources | PARTIAL — named sources but didn't search | PARTIAL — same (WebSearch unavailable), but curated sources only, no Reddit | Marginal |
| evidence-evaluation | PARTIAL — used flags but shallow | PASS — evidence quality rated on every claim (strong/moderate/weak) | Yes |
| situation-filtering | PASS | PASS+ — explicit constraints listed, Situation Fit column, ordered by fit | Yes |
| formatting-conventions | PASS | PASS | Same |
| content-preservation | PASS | PASS | Same |
| options-table-filled | PASS | PASS — with Situation Fit column added | Yes |
| **oster-framework** | **FAIL** | **PASS** — FMVSS 213 insight, installation as real safety lever, absolute risk numbers, "What Oster would say" sections | **Yes — biggest improvement** |

### Eval 2: Sleep (Health)

| Assertion | Baseline | With Skill | Improved? |
|-----------|----------|------------|-----------|
| trusted-sources | PASS | PASS | Same |
| evidence-evaluation | PASS | PASS+ — more consistent quality labels | Marginal |
| situation-filtering | PASS | PASS+ — cat barrier table with Situation Fit column | Yes |
| formatting-conventions | PASS | PASS | Same |
| content-preservation | PASS | PASS | Same |
| **oster-framework** | **PARTIAL** | **PASS** — absolute SIDS rate (1 in 2,500–3,000), cumulative intervention math, Owlet teardown, room-sharing duration nuance | **Yes** |
| no-fear-mongering | PASS | PASS | Same |

### Eval 3: Batch — Stroller + Carrier

| Assertion | Baseline | With Skill | Improved? |
|-----------|----------|------------|-----------|
| both-files-updated | PASS | PASS | Same |
| **trusted-sources** | **PARTIAL — cited Reddit** | **PASS — curated sources only, no Reddit** | **Yes** |
| **situation-filtering** | **PASS** | **PASS+ — Situation Fit column in both tables, explicit constraints** | **Yes** |
| cross-referencing | PARTIAL | PASS — dedicated Cross-Links section in both files | Yes |
| formatting-conventions | PASS | PASS | Same |
| options-tables-filled | PASS | PASS — with Situation Fit column | Yes |

---

## Summary: What the Skill Fixed

| Gap from Baseline | Fixed? | How |
|-------------------|--------|-----|
| **Oster framework absent** | **YES** | "What Oster would say" callouts throughout; absolute risk numbers; evidence quality on every claim; FMVSS 213 / installation insight for car seats |
| **No Situation Fit column** | **YES** | Every comparison table now has a Situation Fit column (Excellent/Good/Fair/Poor with reasoning), ordered by fit |
| **Reddit cited as source** | **YES** | No non-curated sources cited in any with-skill output |
| **Cross-linking shallow** | **YES** | Dedicated Cross-Links section in every file with specific dependency notes |
| **No live web research** | **NOT TESTABLE** | WebSearch/WebFetch were unavailable in both tests. Skill's fallback protocol worked correctly (explicit disclaimer added) |
| **Active constraints not stated** | **YES** | Every file now opens with an explicit constraints bullet list |

## What Was Already Good (Skill Didn't Break It)

- Content preservation — both baseline and with-skill preserved existing content perfectly
- Formatting conventions — both followed CLAUDE.md conventions well
- Tone — calm, practical, evidence-based throughout
- Table completeness — both filled options tables with real products and specs
- Situation awareness from CLAUDE.md — both picked up apartment/transit/cat/budget

## Timing Comparison

| Eval | Baseline Duration | With-Skill Duration | Delta |
|------|-------------------|---------------------|-------|
| Car seat | 90s | 168s | +87% (reading 4 reference files adds overhead) |
| Sleep | 156s | 196s | +26% |
| Stroller + Carrier | 152s | 232s | +53% |

Skill adds ~30-90% to execution time due to reading 4 reference files upfront. This is acceptable given the quality improvements.

## Net Assessment

The skill's biggest wins are structural, not content-depth:
1. **Oster framework** — from absent to consistently applied (the largest quality gap in baseline)
2. **Situation Fit column** — from absent to present in every comparison table
3. **Source discipline** — Reddit dropped, curated sources only
4. **Cross-linking** — from shallow to structured

The agents already produced good raw content without the skill. The skill's value is in **framing, structure, and evidence evaluation discipline** — exactly what the plan intended.

### What We Can't Test Yet

Live web research (WebSearch/WebFetch) was unavailable in all test runs. The skill's search guidance (site-specific queries, curated source priorities) and fallback protocol (explicit disclaimer) are in place but untested against live search results. This will need real-world validation when the skill is used in production.
