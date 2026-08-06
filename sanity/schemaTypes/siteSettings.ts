import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings & homepage",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal title", type: "string", initialValue: "Cosmopolitan Eyecare" }),
    defineField({ name: "heroEyebrow", title: "Homepage hero eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Homepage hero title", type: "string" }),
    defineField({ name: "heroEmphasis", title: "Homepage hero italic line", type: "string" }),
    defineField({ name: "heroLede", title: "Homepage hero supporting copy", type: "text", rows: 4 }),
    defineField({ name: "phone", title: "Primary phone", type: "string" }),
    defineField({ name: "address", title: "Practice address", type: "text", rows: 3 }),
    defineField({ name: "bookingUrl", title: "Appointment booking URL", type: "url" }),
  ],
  preview: { select: { title: "title" } },
});
