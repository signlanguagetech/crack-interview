import { z } from "astro/zod"
import type { PartialSpecificKeys } from "./utils/types";

const sidebarItem = z.object({
  label: z.string(),
  autogenerate: z.object({
    directory: z.string()
    }).optional(),
  collapsed: z.boolean().default(true),
})

export const sidebarItems = z.array(sidebarItem).default([])

export type SidebarItem = PartialSpecificKeys<z.infer<typeof sidebarItem>, 'collapsed'>;

export const sidebarConfig: readonly SidebarItem[] = [
  {
    label: "Skills",
    autogenerate: { directory: "skills/" }
  },
  {
    label: "Programming Paradigms",
    autogenerate: { directory: "programming-paradigms/" }
  },
  {
    label: "Frontend Engineering",
    autogenerate: { directory: "frontend-engineering/" }
  }
]
