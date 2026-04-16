# Phase 2 — Analysis

## Summary
Analyzed 11 pages across 5 archetypes. Identified 8 blocks for the palette (7 from Block Collection, 1 custom). Created migration blueprint with archetype blueprints, content models, and site conventions.

## Phase 2a — Scrape Samples
Scraped representative pages per archetype using Playwright:
- homepage: /nl (1 page — single-page archetype)
- treatment: lips, eye-area, male (3 pages)
- faq: /nl/qa (1 page — single-page archetype)
- find-a-clinic: /nl/find-a-clinic (1 page — single-page archetype)
- legal: contact-us, disclaimer, algemene-voorwaarden-kliniekzoeker (3 pages)

All pages produced screenshot.png, metadata.json, cleaned.html, and images/.

## Phase 2b — Block Inventory

### Block Palette (8 blocks)

| Block | Source | Purpose |
|-------|--------|---------|
| hero | block-collection | Full-width hero with background image and heading |
| cards | block-collection | Grid of feature/USP cards with icons |
| carousel | block-collection | Product showcase slider |
| before-after | custom | Before/after photo comparison |
| accordion | block-collection | Expandable FAQ sections |
| tabs | block-collection | Male/female treatment area tabs |
| columns | block-collection | Side-by-side content layouts |
| fragment | block-collection | Reusable shared content sections |

### Key Observations
- 7 of 8 blocks are available from Block Collection (proven, accessible)
- Only `before-after` needs custom development
- Heavy use of shared sections (treatment tabs, clinic finder) → perfect for `fragment` block
- FAQ page uses extensive default content with some columns — minimal blocking needed

## Phase 2c — Migration Blueprint
See `blueprint.json` for full details.

### Archetype Structure Summary

**homepage**: hero → cards (USPs) → before-after → tabs (treatments) → clinic finder → references
**treatment**: hero → columns (intro) → before-after → carousel (products) → accordion (FAQ) → fragment (tabs) → fragment (clinic finder) → references
**faq**: hero → default (topic nav) → columns (Q&A with images) → references
**find-a-clinic**: default (heading + search + city links) + columns
**legal**: default content only (no blocks)

### Site Conventions
- Language: Dutch (nl-NL)
- Brand: JUVÉDERM® (Allergan Aesthetics / AbbVie)
- All pages have scientific footnote references
- Regulatory disclaimer appears in every footer
- Primary CTA: "Vind je kliniek" (Find your clinic)
- Shared sections across pages: treatment tabs, clinic finder, footer warning

## Validation
- Phase 2a Tier 1: PASS
- Phase 2b Tier 1: PASS
- Phase 2c Tier 1: PASS
