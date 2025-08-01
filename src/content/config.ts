import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	schema: z.object({
		draft: z.boolean().optional().default(false),
		title: z.string(),
		demo: z.string().nullable().default(null),
		source: z.string().nullable().default(null),
		date: z.coerce.date(),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		hasImage: z.boolean().default(true),
		date: z.coerce.date(),
		description: z.string(),
		demo: z.string().nullable().default(null),
		source: z.string(),
		type: z.enum(["personal", "assignment", "company"]),
		stack: z.array(z.tuple([z.string(), z.string()])),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	projects: projectCollection,
	posts: postCollection,
};
