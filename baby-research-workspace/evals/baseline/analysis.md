# Baseline Test Analysis

*Analyzed 2026-02-28*

## Grading Summary

### Eval 1: Car Seat (Gear)

| Assertion | Grade | Notes |
|-----------|-------|-------|
| trusted-sources | PARTIAL | Named Wirecutter/CR/NHTSA but didn't search them — used training data only |
| evidence-evaluation | PARTIAL | Used *Evidence:*/*Opinion:* flags, but shallow. "Outstanding safety testing results" with no actual scores |
| situation-filtering | PASS | Good transit weight analysis, budget tiers, ecosystem advice |
| formatting-conventions | PASS | Date stamps, citations, evidence flags, blockquotes, tables |
| content-preservation | PASS | All original content preserved, research appended |
| options-table-filled | PASS | 10 models with specs |
| oster-framework | FAIL | No Oster-style analysis at all. No baseline risk quantification, no "all seats pass the same federal test so marginal safety diff is minimal" framing |

### Eval 2: Sleep (Health)

| Assertion | Grade | Notes |
|-----------|-------|-------|
| trusted-sources | PASS | AAP 2022, peer-reviewed studies, Cochrane-level sourcing |
| evidence-evaluation | PASS | Evidence summary table with quality ratings; noted single case-control study limitations |
| situation-filtering | PASS | Cat + bedroom sharing + apartment temperature addressed well |
| formatting-conventions | PASS | Strong convention adherence |
| content-preservation | PASS | Original content preserved |
| oster-framework | PARTIAL | Quantified some numbers (3,400 deaths/year, percentage reductions) but didn't calculate absolute risk or compare to accepted baseline risks |
| no-fear-mongering | PASS | Calm, empowering tone |

### Eval 3: Batch — Stroller + Carrier

| Assertion | Grade | Notes |
|-----------|-------|-------|
| both-files-updated | PASS | Both complete |
| trusted-sources | PARTIAL | Named Wirecutter/BabyGearLab but also cited Reddit as a source. No live searches |
| situation-filtering | PASS | Transit weight, July heat, both-parents-wearing addressed |
| cross-referencing | PARTIAL | Mentioned car seat in stroller but shallow. No updates to related files |
| formatting-conventions | PASS | Good |
| options-tables-filled | PASS | 9 stroller models, 12 carrier models |

---

## Key Baseline Failures (What the Skill Must Fix)

### 1. NO LIVE WEB RESEARCH (Critical)

All three agents noted "web search was unavailable" and fell back to training data. This is the single biggest gap. The agents:
- Named trusted sources but didn't actually search them
- Acknowledged the limitation with a disclaimer but proceeded anyway
- Produced plausible-looking content from training data that may be outdated

**The skill must:** Mandate WebSearch + WebFetch for curated sources. Require site-specific queries (e.g., `site:nytimes.com/wirecutter "best infant car seat"`). Flag when search fails rather than silently falling back to training data.

### 2. OSTER FRAMEWORK ABSENT (Critical)

No agent applied Oster-style reasoning:
- No baseline risk quantification (e.g., "SIDS rate is ~0.33 per 1,000 live births in the US")
- No absolute vs relative risk distinction ("50% reduction sounds huge but absolute risk drops from 0.33 to ~0.17 per 1,000")
- No comparison to risks families already accept (driving, etc.)
- No "what's the actual measured risk vs. the marketing fear?" framing
- Car seat eval: missed the key Oster insight that all US seats pass the same federal test, so the marginal safety difference between a $170 and $500 seat is near-zero — the real safety lever is correct installation

**The skill must:** Include explicit Oster framework steps with examples. Require absolute risk numbers where data exists. Require "what would Oster say?" callout for safety topics.

### 3. NO SITUATION FIT RANKING IN TABLES (Moderate)

The plan calls for a **Situation Fit** column in comparison tables. None of the baselines included one. They had situation commentary in prose but didn't bake it into the table structure. A reader scanning the table can't quickly see which option fits best.

**The skill must:** Require a Situation Fit column (e.g., "Excellent / Good / Fair / Poor") with a one-line explanation in every comparison table.

### 4. REDDIT CITED AS SOURCE (Minor)

Stroller and carrier outputs cited Reddit communities (r/beyondthebump, r/NewParents). While flagged as *Anecdotal*, these are not curated trusted sources and dilute trust.

**The skill must:** Specify that Reddit, parenting forums, and affiliate blogs are NOT in the curated source list. Anecdotal should be de-emphasized, not given its own section.

### 5. CROSS-LINKING SHALLOW (Minor)

The batch test showed surface-level cross-references but didn't:
- Note when a finding in one file affects another file's decision
- Add "[Updated: stroller research affects car seat ecosystem choice]" type notes
- Create explicit dependency chains between decisions

**The skill must:** Require checking related files and adding cross-link notes when findings create dependencies.

---

## What Worked Well (Don't Break These)

- **Content preservation**: All agents preserved existing content perfectly
- **Formatting conventions**: Evidence/Opinion/Anecdotal flags, date stamps, blockquotes all followed well
- **Table structure**: Options tables were comprehensive with real products and specs
- **Situation awareness**: Agents picked up on apartment/transit/cat/budget from both the prompt and CLAUDE.md
- **Tone**: Calm, practical, non-judgmental — matched CLAUDE.md tone perfectly
- **Structure**: Research sections were well-organized with clear headers

## Timing Data

| Eval | Duration | Token Usage |
|------|----------|-------------|
| Car seat | 90s | 16,537 |
| Sleep | 156s | 19,151 |
| Stroller + Carrier (batch) | 152s | 19,538 |

---

## Implication for Skill Design

The baseline is surprisingly good on formatting and situation awareness — agents already read CLAUDE.md and follow its conventions. The skill's value-add is primarily:

1. **Forcing live web research** from curated sources (not training data)
2. **Oster framework** for evidence evaluation (the biggest quality gap)
3. **Situation Fit ranking** baked into table structure
4. **Source discipline** (curated list only, no Reddit)
5. **Cross-linking rigor** between related files

The skill should NOT try to improve formatting (already good) or content preservation (already good). Focus the skill's weight on the gaps.
