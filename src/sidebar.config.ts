import { z } from "astro/zod"

const sidebarItem = z.object({
  label: z.string(),
  autogenerate: z.object({
    directory: z.string()
    }).optional(),
  collapsed: z.boolean().default(true).optional(), 
})

export type SidebarItem = z.infer<typeof sidebarItem>;

export const sidebarConfig: readonly SidebarItem[] = [
  {
    label: "Skills",
    autogenerate: { directory: "skills/" }
  },
  {
    label: "Programming Paradigms",
    autogenerate: { directory: "programming-paradigms/" }
  }
]
