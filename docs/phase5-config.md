# Phase 5 — Configuration

## Summary
Generated all site-level configuration files for the migration. All config committed to the GitHub repo.

## Configuration Files

| File | Location | Purpose |
|------|----------|---------|
| helix-query.yaml | GitHub repo root | Index configuration for /nl/** pages |
| helix-sitemap.yaml | GitHub repo root | Sitemap generation config |
| robots.txt | GitHub repo root | Crawler directives with sitemap link |
| redirects.json | da.live (as sheet) | Root redirects (/ → /nl/) |
| nav.html | drafts/nav.html | Header navigation structure |
| footer.html | drafts/footer.html | Footer with links, disclaimer, social |

## Details

### helix-query.yaml
- Indexes all pages under /nl/
- Excludes /nl/drafts/**
- Properties: title, description, image, lastModified, robots

### helix-sitemap.yaml
- Source: /query-index.json
- Origin: https://main--jv-test-3--jmffraiz.aem.live

### redirects.json
- / → /nl/ (root to Dutch homepage)
- /nl → /nl/ (trailing slash normalization)
- No redirect loops

### Navigation (nav.html)
- Brand link to /nl/
- Behandeling dropdown (5 treatment pages)
- FAQ dropdown (5 anchor links)
- "Vind je kliniek" CTA button

### Footer (footer.html)
- CTA + social links (Instagram, Facebook)
- Warning banner
- Treatment links + FAQ links
- Legal links (contact, privacy, terms, disclaimer)
- Regulatory disclaimer text

## Validation
- Tier 1: PASS (YAML valid, robots.txt exists, redirects valid, no loops)
