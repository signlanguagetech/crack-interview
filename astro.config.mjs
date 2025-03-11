import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const port = 4300;
const localHostUrl = `http://localhost:${port}`;
const liveUrl = "https://signlanguagetech.com";
const isProd = import.meta.env.PROD;

export default defineConfig({
  server: { port },
  site: isProd ? liveUrl : localHostUrl,
  base: isProd ? "/crack-interview" : "/",
  integrations: [
    starlight({
      plugins: [],
      title: {
        "en": "Crack Interview",
        "es": "Crack Interview en Español",
        "fa-IR": "Crack Interview به زبان فارسی",
      },
      social: {
        github: "https://github.com/signlanguagetech/crack-interview",
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        "es": {
          label: "Español",
          locale: "es",
        },
        "fa-IR": {
          label: "فارسی",
          locale: "fa-IR",
          direction: "rtl",
        },
      },
      sidebar: [
        {
          label: "Skills",
          autogenerate: { directory: "skills/" },
          collapsed: false,
        },
        // {
        // 	label: 'Hello',
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Hope', link: '/hello/example' },
        // 	],
        // },
        // {
        // 	label: 'Guides',
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Example Guide', link: '/guides/example/' },
        // 	],
        // },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
});
