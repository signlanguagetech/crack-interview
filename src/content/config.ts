import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Add a new field to the schema.
        category: z.enum(["tutorial", "guide", "reference"]).optional(),
        authors: z.array(z.string()).optional(),
        createdDate: z.date().optional(),
      }),
    }),
  }),
};
