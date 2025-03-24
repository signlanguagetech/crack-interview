import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const authorSchema = z.object({
  /**
   * The name of the author.
   */
  name: z.string().min(1),
  /**
   * The title of the author.
   */
  title: z.string().optional(),
  /**
   * The URL or path to the author's picture.
   */
  picture: z.string().optional(),
  /**
   * The URL to the author's website.
   */
  url: z.string().url().optional(),
})

export const collections = {
  docs: defineCollection({
    loader: docsLoader(), schema: docsSchema({
      extend: z.object({
        category: z.enum(["tutorial", "guide", "reference"]).optional(),
        createdDate: z.date().optional(),
        authors: z.union([z.string(), authorSchema, z.array(z.union([z.string(), authorSchema]))]).optional(),
      }),
    })
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
