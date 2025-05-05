import { Schema } from "effect";

export const sidebarItemSchema = Schema.Struct({
  label: Schema.String,
  autogenerate: Schema.optional(
    Schema.Struct({
      directory: Schema.String,
    })
  ),
  collapsed: Schema.optional(
    Schema.Boolean
  ).pipe(
     Schema.withConstructorDefault(() => true),
  )
});
export type SidebarItemSchema = Schema.Schema.Type<typeof sidebarItemSchema>;

export const sideBarItemsSchema = Schema.NonEmptyArray(sidebarItemSchema)
export type SidebarItemsSchema = Schema.Schema.Type<typeof sideBarItemsSchema>;

export const sidebarConfig = Schema.decodeSync(sideBarItemsSchema)([
  sidebarItemSchema.make({
    label: "Skills",
    autogenerate: { directory: "skills/" },
  }),
  sidebarItemSchema.make({
    label: "Programming Paradigms",
    autogenerate: { directory: "programming-paradigms/" },
  })
]);
