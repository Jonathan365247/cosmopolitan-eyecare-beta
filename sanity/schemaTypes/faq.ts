import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: "topic", title: "Topic", type: "string" }),
  ],
  preview: { select: { title: "question", subtitle: "topic" } },
});
