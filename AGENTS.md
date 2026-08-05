# Project rules

## Scope

This is an independent website beta foundation. It is not connected to any existing client, CRM, CMS, analytics property, production domain, or data provider.

## Non-negotiables

- Keep the preview protected and noindex until a launch decision is documented.
- Keep credentials out of chat, source files, and Git history.
- Do not reuse client-specific copy, logos, images, licenses, schemas, or integrations from another project.
- Use original composition and approved assets only. Preserve asset source and rights in `docs/asset-provenance.md` when real assets arrive.
- Do not make production DNS, CMS, form-delivery, analytics, or email changes without explicit approval.
- Keep pages static-first. Add an integration only after its purpose, owner, data handling, fallback, and approval are documented.
- Avoid generic AI-site patterns: vague claims, fake testimonials, invented metrics, decorative dashboards, excessive cards, and arbitrary gradients.

## Quality gate

Before a preview is shared, run:

```bash
npm run qa
```

Verify desktop and mobile behavior, keyboard access, visible facts, page titles, noindex behavior, and external-link behavior.
