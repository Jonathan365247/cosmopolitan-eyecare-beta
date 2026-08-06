import { defineField, defineType } from "sanity";

export const doctor = defineType({
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "credentials", title: "Credentials", type: "string" }),
    defineField({ name: "role", title: "Role or specialty", type: "string" }),
    defineField({ name: "bio", title: "Biography", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "photo", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "credentials", media: "photo" } },
});
