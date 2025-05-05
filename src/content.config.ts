import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const authorSchema = z.object({
  name: z.string().min(1),
  title: z.string().optional(),
  picture: z.string().optional(),
  url: z.string().url().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        sltContent: z.boolean().default(true),
        authors: z.array(authorSchema).nonempty(),
        tags: z.array(z.string().min(1)).optional(),
        heroYouTubeVideoId: z.string().regex(/^[A-Za-z0-9_-]{11}$/, "Must be a valid YouTube video ID").optional(),
      }),
    }),
  }),
};
