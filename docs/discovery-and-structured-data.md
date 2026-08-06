# Discovery and structured-data release rules

## Current beta state

This repository is a protected, non-indexable beta. Until an approved final canonical domain is set, the application deliberately serves a `Disallow: /` robots policy and noindex metadata. Its sitemap and `llms.txt` are intentionally complete so review tools can validate the real information architecture, but the beta robots file does not advertise the sitemap and the beta URL must never be published as a production canonical.

## Production release gate

Set both `NEXT_PUBLIC_SITE_MODE=production` and `NEXT_PUBLIC_SITE_URL` to the approved HTTPS launch domain. The application rejects local, beta, and `vercel.app` hosts for production discovery outputs. Production builds generate `robots.txt`, `sitemap.xml`, and `llms.txt` from `lib/site-discovery.ts`, which is the single source of truth for public routes.

`llms.txt` is a concise Markdown guide, not a sitemap. It contains only curated, absolute production URLs. `robots.txt` contains crawler directives and the sitemap URL only; it does not make private paths secure. The private Studio surface must remain protected by application access controls.

The production robots policy uses a single catch-all rule rather than named AI crawler rules. Add a crawler-specific directive only after verifying the current crawler token and behavior in that operator's official documentation at release time.

## Structured data

The practice entity is `MedicalClinic`, a valid subtype of `MedicalBusiness` that supports `medicalSpecialty`. The specialty is the Schema.org `MedicalSpecialty` enumeration URL `https://schema.org/Optometric`. Do not change the entity type or add properties without checking the Schema.org type/property definitions and validating the rendered JSON-LD after deployment.
