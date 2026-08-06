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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
