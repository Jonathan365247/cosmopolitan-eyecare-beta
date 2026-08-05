# Beta charter

## Purpose

Build an original, content-led website preview that can become a production foundation without prematurely coupling it to third-party systems.

## Default architecture

```text
Next.js static-first website
  -> protected, noindex Vercel preview
  -> approved launch path only after content, legal, analytics, and domain decisions
```

## Required inputs before design becomes client-specific

- Brand or organization name and primary audience
- Approved positioning and required pages
- Existing site/content to treat as reference
- Approved assets and usage rights
- Contact and legal facts
- Launch domain and analytics decision

## Integration policy

Start without integrations. Add one only when it solves an identified user or business requirement and has a documented fallback. Forms should validate in preview but must not deliver real messages until recipients and consent language are approved.

## Definition of a useful first checkpoint

- Protected, noindex preview
- One polished homepage and the priority supporting page(s)
- Real or clearly marked draft content only
- Responsive behavior checked
- No production changes
