---
name: human-web
description: Write human-sounding website copy and UI for the Solution Sahab site. Use when editing any page, component, blog post, or product content in this repo to avoid AI-generated look, jargon, and unverified claims.
---

# Human Web — Solution Sahab voice and design rules

Apply these rules to every page, component, and content edit in this repo.

## Facts only (never invent)

- Import shared facts from `@/lib/facts.ts`. Never hardcode years, job counts,
  warranty terms, areas, or phone numbers in components.
- Every claim must already exist on https://solutionsahab.com. No new specs,
  prices, counts, or certifications.
- One brand name: "Solution Sahab". Copyright year is dynamic, never hardcoded.

## Banned words and phrases

Never use: matrix, rigor, precision (as decoration), seamless, premium,
revolutionary, cutting-edge, landscape (metaphorical), elevate, delve,
tapestry, game-changer, "100%" absolutes ("100% safe", "100% rust-proof"),
"zero ..." absolutes ("zero outsourcing", "zero view obstruction"),
"obsolete", "prison-like", "mockups", "fenestration" in customer-facing copy
(engineering term — keep it in spec tables only).

Prefer plain words: strong, fitted, measured, warrantied, local.

## Copy patterns to avoid

- Choppy two-fragment headlines ("Modern Safety. Unobstructed Views.").
  Write one human sentence instead.
- Identical CTA closings across pages. Rotate: engineer callback /
  WhatsApp photos / related-job story.
- Ending every description with "Call 99711 43143." Vary or drop it.
- Em-dash stuffing (max one per paragraph).
- Strawman comparisons ("Why Traditional Grills Are Obsolete"). Use honest
  spec tables.
- Leading FAQ questions. Use short, real customer questions.
- Placeholder names like "e.g. Vikramaditya Sharma". Use "Your name".

## Design rules

- Section archetypes must differ: never repeat pill-badge + centered H2 +
  gray subtitle twice in a row. Kickers are plain small-caps text with a
  rule line, never pill badges.
- Max 2 card styles site-wide (flat-bordered white, untinted flat). No
  global hover-lift (`hover:-translate-y`, `group-hover:scale-105`).
- One primary CTA per viewport. Phone numbers as text links, not extra buttons.
- Bullets rotate by meaning (spec → straighten, safety → shield,
  service → schedule). Never `check_circle` for everything.
- No zebra-striping sections by index. Backgrounds assigned semantically.
- Photos get real captions (suburb + job + pitch). Never floating spec pills
  with jargon labels. Never reuse the same hero image on adjacent cards.
- Display serif (Fraunces) for H1s and big numerals only. Jakarta for
  everything else. Blue is links/info only; emerald is the single action color.
