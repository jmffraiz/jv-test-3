# Phase 3.5 — Pilot Migration

## Summary
Migrated 2 sample pages (homepage, lips treatment) as EDS-structured HTML. Content committed to repo as drafts. da.live upload pending authentication resolution.

## Pilot Pages

| Page | Archetype | Content File | Status |
|------|-----------|-------------|--------|
| Homepage (/nl) | homepage | drafts/nl/index.html | ✅ migrated |
| Lips Treatment (/nl/treatment/lips) | treatment | drafts/nl/treatment/lips.html | ✅ migrated |

## Content Structure Verified

### Homepage
- Hero section with key visual and "Jouw unieke schoonheid" heading
- Value proposition cards (natural look, leading brand, lasting results, satisfaction)
- Before/After comparison (3 patient examples)
- Treatment tabs (male/female with treatment area links)
- Clinic finder CTA
- Metadata block

### Lips Treatment
- Hero with lips treatment image
- Intro section with columns (image + USP features)
- Before/After comparison
- Product carousel (VOLBELLA, VOLIFT, ULTRA 4)
- FAQ accordion (4 questions about consultation, side effects, fillers, results)
- Clinic finder CTA
- Metadata block

## Known Limitation
da.live content upload API returned 401/503 with provided EDS token. Content is committed to the repo as `drafts/` HTML files. Once the token is refreshed or a valid da.live session is established, the content can be uploaded and preview URLs will become active.

## Validation
- Tier 1: PASS (content files verified; preview degraded due to auth)
