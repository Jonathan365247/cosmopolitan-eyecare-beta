# Cosmopolitan Eyecare — Website Beta

A noindex, static-first review beta for Cosmopolitan Eyecare in Midtown Manhattan.

## Stable review environment

- Website review: https://cosmopolitan-eyecare-beta.vercel.app/
- Source review: https://github.com/Jonathan365247/cosmopolitan-eyecare-beta
- The review environment is intentionally blocked from search indexing and does not replace or modify the current production site.

For a complete review, inspect both the deployed experience and this source. The site includes a comprehensive homepage, 20 dedicated care pages, specialty centers, patient resources, FAQ/schema coverage, robots rules, sitemap, and `llms.txt`.

## Start

```bash
npm install
npm run dev
```

## Preview safeguards

1. Keep the preview protected and noindex.
2. Do not enable appointment delivery or the dry-eye assessment until recipients, consent language, and medical review are approved.
3. Add only approved assets and record them in `docs/asset-provenance.md`.
4. Validate all clinical facts, insurance details, provider information, and legal copy before launch.

## Validation

Run the complete local release check with:

```bash
npm run qa
```
