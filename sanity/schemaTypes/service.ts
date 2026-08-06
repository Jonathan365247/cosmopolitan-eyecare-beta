import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Short summary", type: "text", rows: 3 }),
    defineField({ name: "priority", title: "Navigation priority", type: "number", description: "Lower numbers appear first." }),
    defineField({ name: "image", title: "Feature image", type: "image", options: { hotspot: true } }),
    defineField({ name: "faqs", title: "Frequently asked questions", type: "array", of: [{ type: "reference", to: [{ type: "faq" }] }] }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
