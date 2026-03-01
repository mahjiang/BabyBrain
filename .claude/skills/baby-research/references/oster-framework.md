# Emily Oster Evidence Evaluation Framework

How to evaluate evidence the way Oster does in *Expecting Better* and *Cribsheet* — with statistical rigor, honest uncertainty, and practical decision-making for parents.

## The Five Questions

Apply these to every safety claim, health recommendation, or "you must/must never" statement:

### 1. What does the actual evidence say?

Strip away marketing, fear, tradition, and "everyone knows." Find the studies.

- What was the study design? (RCT, cohort, case-control, case report, expert opinion)
- Who was studied? (Sample size, demographics, setting)
- What was actually measured? (Often different from the headline claim)

### 2. How strong is the evidence?

Be explicit about the hierarchy:

| Level | Type | What it means |
|-------|------|--------------|
| **Strongest** | Systematic review / meta-analysis (Cochrane) | Pooled results from multiple RCTs |
| **Strong** | Randomized controlled trial (RCT) | Gold standard for causation |
| **Moderate** | Prospective cohort study | Association, not causation; confounders possible |
| **Weak** | Case-control / cross-sectional | Retrospective, higher bias risk |
| **Very weak** | Case reports / expert opinion | Anecdotal or consensus-based |

**Always state the level.** "This is based on a single case-control study" is critical context.

### 3. What are the real numbers?

This is where most parenting advice fails. Quantify with absolute risk, not just relative risk.

**Bad:** "Back sleeping reduces SIDS risk by 50%"
**Good:** "SIDS affects ~0.33 per 1,000 live births in the US. Back sleeping reduces this to ~0.17 per 1,000 — a reduction of about 1.6 fewer deaths per 10,000 babies. This is meaningful but the absolute risk is low either way."

**Bad:** "Car seat X has the best crash test scores"
**Good:** "All US car seats pass the same federal crash test (FMVSS 213). Consumer Reports finds measurable differences in their independent testing, but the gap between top-rated and mid-rated seats is small compared to the gap between correct and incorrect installation. NHTSA estimates 59% of seats are installed wrong — that's the real risk factor."

The formula:
```
Absolute risk = baseline rate × (1 - relative risk reduction)
Number needed to treat (NNT) = 1 / absolute risk reduction
```

When absolute numbers aren't available, say so: "Relative risk reduction is X%, but I couldn't find the baseline rate to calculate absolute risk."

### 4. Where is evidence genuinely mixed?

Don't manufacture consensus where none exists. Common areas where evidence is honestly mixed:

- **Room-sharing beyond 6 months** — AAP recommends 12 months but acknowledges weaker evidence past 6; some studies show worse sleep for both parent and baby
- **Breastfeeding benefits magnitude** — clear benefits for some outcomes (NEC in preemies, ear infections), less clear for others (IQ, long-term health) after controlling for confounders
- **Screen time under 2** — largely correlational evidence; context (interactive vs passive) likely matters more than binary exposure
- **Sleep training long-term effects** — RCTs show no harm at follow-up, but studies are relatively short-term

When you see "evidence is mixed," dig into why:
- Are studies measuring different things?
- Are they studying different populations?
- Are they simply small and underpowered?
- Is there genuine scientific disagreement?

### 5. What would Oster say?

For safety and health topics, apply Oster's decision framework:

1. **What's the actual measured risk?** (absolute numbers)
2. **How does it compare to risks you already accept?** (driving with baby in car, for instance)
3. **What's the cost of mitigation?** (money, time, stress, sleep deprivation)
4. **Is the mitigation actually effective?** (some "safety" products have no evidence of benefit)
5. **What are you giving up?** (every safety choice has opportunity costs — usually sleep or parental wellbeing)

Oster's core insight: **The question isn't "is this safe?" but "how does this risk compare to other risks I'm already taking, and what does mitigation cost me?"**

---

## Good vs Bad Evidence Reporting

### Example: Safe Sleep Products

**Bad (fear-based, no numbers):**
> The Owlet Smart Sock monitors your baby's heart rate and oxygen levels, giving you peace of mind that your baby is safe while sleeping. Many parents report sleeping better knowing their baby is being monitored.

**Good (Oster framework):**
> *Evidence:* The AAP does not recommend home cardiorespiratory monitors (including Owlet-type devices) for healthy infants as SIDS prevention. No study has demonstrated that consumer pulse oximeters reduce SIDS risk. The FDA has issued warnings about marketing these devices for this purpose. SIDS affects ~0.33 per 1,000 live births — the absolute risk is low, and no consumer monitoring device has been shown to change this number. These devices may increase parental anxiety without benefit. (Source: [AAP 2022](url))
>
> *What Oster would say:* The baseline SIDS risk is already very low (~1 in 3,000). The evidence-supported interventions (back sleeping, firm surface, room sharing, pacifier) collectively reduce this further. Adding a $300 monitor on top of these measures has no demonstrated additional benefit. The cost isn't just money — it's the anxiety of false alarms and the false sense of security that might reduce vigilance about the interventions that actually work.

### Example: Car Seat Safety

**Bad (price implies safety):**
> The UPPAbaby Mesa V2 ($400) has outstanding safety testing results and is clearly the safest option for your baby.

**Good (Oster framework):**
> *Evidence:* All car seats sold in the US must pass FMVSS 213, the federal crash test standard. This is a pass/fail test — there is no "safer" tier. Consumer Reports conducts additional independent crash testing and finds measurable but modest differences between top seats. The Chicco KeyFit 35 ($220) and UPPAbaby Mesa V2 ($400) both score well. (Source: [Consumer Reports](url), [NHTSA](url))
>
> The far larger safety variable is correct installation. NHTSA estimates up to 59% of car seats are installed incorrectly. Getting a $170 seat installed correctly is meaningfully safer than a $500 seat installed wrong. A free CPST inspection after purchase is the highest-ROI safety intervention available. (Source: [NHTSA](url))
>
> *What Oster would say:* The marginal safety difference between top-rated seats at different price points is small. The marginal safety difference between correct and incorrect installation is enormous. Spend your safety budget on getting the seat inspected, not on upgrading from a $200 seat to a $400 one.

### Example: Sleep Training

**Bad (hides evidence behind hedging):**
> Sleep training is controversial. Some parents swear by it, others worry about long-term harm. It's a personal choice.

**Good (Oster framework):**
> *Evidence:* Two well-designed RCTs (Price et al., 2012; Gradisar et al., 2016, both in *Pediatrics*) studied graduated extinction (Ferber method) and found: effective at improving infant sleep; no evidence of harm to attachment, cortisol levels, or behavioral outcomes at 5-year and 12-month follow-up respectively. The claim that sleep training causes lasting psychological harm is not supported by the peer-reviewed literature.
>
> *Evidence quality:* Moderate-strong (RCTs with follow-up). The studies are relatively small and follow-up periods are limited, which is an honest limitation.
>
> *What Oster would say:* The evidence says sleep training works and doesn't cause measurable harm. The decision is about parental preference and values, not safety. Frame it as "do we want to do this?" not "is this safe?" — because the safety question is answered.

---

## Common Traps to Avoid

| Trap | What it looks like | What to do instead |
|------|-------------------|-------------------|
| **Relative risk without baseline** | "Doubles the risk!" (from 1 in 10,000 to 2 in 10,000) | Always include the baseline rate |
| **Confusing correlation and causation** | "Breastfed babies score higher on IQ tests" | Note that breastfeeding correlates with higher parental education and income |
| **Appeal to authority without evidence** | "The AAP recommends..." without noting evidence strength | State what the evidence shows AND what the AAP recommends — they're not always the same strength |
| **False balance** | "Some experts say X, others say Y" when evidence strongly favors one side | State the evidence direction clearly; note dissent if it exists but don't give it equal weight |
| **Marketing as evidence** | "Clinically proven" on product packaging | Demand the actual study. "Clinically proven" is a marketing phrase, not an evidence standard |
| **Precautionary principle overreach** | "Better safe than sorry" as justification for anything | Every precaution has costs. Quantify both the risk and the cost of mitigation |
