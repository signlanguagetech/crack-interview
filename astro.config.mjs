import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const port = 4300;
const localHostUrl = `http://localhost:${port}`;
const liveUrl = "https://signlanguagetech.github.io";
const isProd = import.meta.env.PROD;

export default defineConfig({
  server: { port },
  site: isProd ? liveUrl : localHostUrl,
  base: isProd ? "/crack-interview" : "/",
  integrations: [
    starlight({
      plugins: [],
      title: {
        "en": "Sign Tech Interview",
        "es": "Sign Tech Interview en Español",
      },
      lastUpdated: true,
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
        }
      },
      sidebar: [
        {
          label: "Skills",
          autogenerate: { directory: "skills/" },
          collapsed: false,
        }
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
