import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Patient review",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Approved review excerpt", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "displayName", title: "Reviewer display name", type: "string" }),
    defineField({ name: "source", title: "Review source", type: "string", options: { list: ["Google", "Zocdoc", "Yelp"] } }),
    defineField({ name: "sourceUrl", title: "Original review URL", type: "url" }),
    defineField({ name: "service", title: "Related service", type: "reference", to: [{ type: "service" }] }),
    defineField({ name: "approvedForDisplay", title: "Approved for website display", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "displayName", subtitle: "source" } },
});
