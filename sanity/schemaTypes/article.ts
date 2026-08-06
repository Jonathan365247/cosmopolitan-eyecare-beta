import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article or resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Eye health", "Contact lenses", "Technology", "Surgery", "Products"] } }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime" }),
    defineField({ name: "featuredImage", title: "Featured image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Article body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "featuredImage" } },
});
