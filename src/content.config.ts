import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(), schema: docsSchema({
      extend: z.object({
        category: z.enum(["tutorial", "guide", "reference"]).optional(),
        authors: z.array(z.string()).optional(),
        createdDate: z.date().optional(),
      }),
    })
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
