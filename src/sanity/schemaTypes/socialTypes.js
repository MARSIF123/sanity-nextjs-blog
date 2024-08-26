import { TagIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const socialType = defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "link",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "string",
    }),
  ],
});
