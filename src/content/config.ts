import { defineCollection, z } from 'astro:content';

const handbook = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		lastModified: z.coerce.date().optional(),
	}),
});

export const collections = { handbook };
