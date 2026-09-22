import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
    links: z.object({
      github: z.string().url().optional(),
      liveSite: z.string().url().optional(),
      downloadUrl: z.string().optional()
    }).optional(),
    featured: z.boolean().default(false)
  }),
});

export const collections = {
  'projects': projectCollection,
};
