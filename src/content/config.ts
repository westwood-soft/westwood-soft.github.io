import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		author: z.string(),
		image: image(),
	}),
});

export const collections = {
	'blog': blogCollection,
};

