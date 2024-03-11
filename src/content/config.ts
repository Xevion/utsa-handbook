import { defineCollection, z } from "astro:content";

const handbook = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    lastModified: z.coerce.date().optional(),
  }),
});
const authors = defineCollection({
  type: "data",
  schema: z.object({
    username: z.string(),
    displayName: z.string(),
    email: z.string().optional(),
    discord: z.string().optional(),
    github: z.string().optional(),
  }),
});

export const collections = { authors, handbook };
