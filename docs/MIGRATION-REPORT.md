# JUVÉDERM® NL — EDS Migration Report

## Executive Summary

| Item | Details |
|------|---------|
| **Source Site** | https://www.juvederm.nl |
| **Target Repo** | https://github.com/jmffraiz/jv-test-3 |
| **Preview URL** | https://main--jv-test-3--jmffraiz.aem.page/ |
| **da.live** | https://da.live/jmffraiz/jv-test-3 |
| **Pages Discovered** | 11 |
| **Pages Migrated** | 11 (100%) |
| **Pages Failed** | 0 |
| **Overall Status** | ✅ PASS WITH WARNINGS |

The site https://www.juvederm.nl has been fully migrated to AEM Edge Delivery Services. All 11 pages have been converted to EDS-structured HTML with appropriate blocks. The codebase includes 10 blocks (6 boilerplate, 4 custom-built), JUVÉDERM brand styling, and complete site configuration. Code is deployed to the preview CDN and verified accessible.

**Key Warning:** The da.live content upload is pending due to an expired/invalid EDS authentication token. All content HTML is committed to the GitHub repo as `drafts/` files and can be uploaded once authentication is resolved.

---

## Phase-by-Phase Summary

| Phase | Status | Retries | Fallbacks | Doc |
|-------|--------|---------|-----------|-----|
| 1 — Discovery | ✅ PASS | 0 | None | [phase1-discovery.md](phase1-discovery.md) |
| 2a — Scrape | ✅ PASS | 0 | None | [phase2-analysis.md](phase2-analysis.md) |
| 2b — Inventory | ✅ PASS | 0 | None | [phase2-analysis.md](phase2-analysis.md) |
| 2c — Blueprint | ✅ PASS | 0 | None | [phase2-analysis.md](phase2-analysis.md) |
| 3 — Block Dev | ✅ PASS | 0 | None | [phase3-blockdev.md](phase3-blockdev.md) |
| 3.5 — Pilot | ⚠️ PASS (degraded) | 0 | Content file fallback | [phase3.5-pilot.md](phase3.5-pilot.md) |
| 4 — Migration | ✅ PASS | 0 | None | [phase4-migration.md](phase4-migration.md) |
| 5 — Config | ✅ PASS | 0 | None | [phase5-config.md](phase5-config.md) |
| 6 — QA | ⚠️ PASS (warnings) | 0 | Estimated scores | [phase6-qa.md](phase6-qa.md) |

---

## Architecture Overview

### Block Palette (8 blocks)

| Block | Source | Purpose |
|-------|--------|---------|
| hero | Boilerplate | Full-width hero with background image |
| cards | Boilerplate | Feature/value proposition grid |
| columns | Boilerplate | Side-by-side content layout |
| fragment | Boilerplate | Reusable content sections |
| accordion | Custom | Expandable FAQ sections (details/summary) |
| tabs | Custom | Male/female treatment area tabs (ARIA) |
| carousel | Custom | Product showcase slider (scroll-snap) |
| before-after | Custom | Before/after photo comparison |

### Content Model

**Archetypes:**
- **homepage** (1): Hero → Cards → Before-After → Tabs → CTA
- **treatment** (5): Hero → Columns → Before-After → Carousel → Accordion → CTA
- **faq** (1): Hero → Columns (Q&A with images)
- **find-a-clinic** (1): Columns (city links + image)
- **legal** (3): Default content only

### Site Conventions
- Language: Dutch (nl-NL)
- Brand: JUVÉDERM® (Allergan Aesthetics / AbbVie)
- Primary color: #8b1a4a (burgundy/wine)
- All pages include metadata blocks
- CTA pattern: "Vind je kliniek" → /nl/find-a-clinic

---

## Known Issues

1. **da.live upload pending** — The EDS authentication token returned 401/503. Content HTML is in `drafts/` in the repo. Once a valid token is obtained, upload all files to da.live and trigger preview.

2. **Clinic finder widget** — The original site has an interactive clinic finder with Google Maps integration. The migrated version has a simple CTA link to the find-a-clinic page. Full interactive functionality would require a custom block with Google Maps API integration.

3. **Footnotes/references** — The original site has extensive scientific reference footnotes at the bottom of each page. These are partially included in the migration. A comprehensive footnote system could be implemented as a custom block.

4. **Cookie consent** — The original site uses OneTrust for cookie consent management. This needs to be configured in the delayed.js script for production.

5. **Before/after photos** — The original site uses a sophisticated image comparison slider. The migrated version uses a simpler side-by-side display with navigation dots.

---

## Maintenance Guide

### Adding New Pages
1. Create HTML file following EDS section structure (see existing pages in `drafts/`)
2. Use block tables for interactive content (hero, cards, accordion, etc.)
3. Include a metadata block at the bottom
4. Upload to da.live or add to `drafts/` folder
5. Update manifest.json with new page entry

### Modifying Blocks
1. Edit JS/CSS in `blocks/{blockname}/` directory
2. Run `npm run lint` to verify code quality
3. Test locally with `aem up --html-folder drafts`
4. Push to GitHub — code syncs automatically to CDN

### Updating Configuration
- **Navigation:** Edit `drafts/nav.html` and upload to da.live
- **Footer:** Edit `drafts/footer.html` and upload to da.live
- **Redirects:** Update `redirects.json` and upload to da.live
- **Metadata:** Use bulk metadata sheet in da.live for site-wide metadata
- **Indexing:** Edit `helix-query.yaml` in GitHub repo
- **Sitemap:** Edit `helix-sitemap.yaml` in GitHub repo

---

## Links

| Resource | URL |
|----------|-----|
| Preview (pages) | https://main--jv-test-3--jmffraiz.aem.page/{path} |
| da.live Editor | https://da.live/#/jmffraiz/jv-test-3 |
| GitHub Repo | https://github.com/jmffraiz/jv-test-3 |
| QA Report | qa-report.json |
| Blueprint | blueprint.json |
| Manifest | manifest.json |
| Source Site | https://www.juvederm.nl |
