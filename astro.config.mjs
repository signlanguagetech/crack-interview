import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { detectEnvironment } from './config/environment.js';
import { generateAnalyticsTags } from './config/seo.js';

const env = detectEnvironment();
const logoPath = "/logo.png";

export default defineConfig({
  server: { port: env.port },
  site: env.siteUrl,
  integrations: [
    starlight({
      plugins: [],
      title: {
        "en": "Sign Tech Interview",
        "es": "Sign Tech Interview en Español",
      },
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/signlanguagetech/crack-interview/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/signlanguagetech/crack-interview',
        },
        {
          icon: 'youtube',
          label: 'YouTube',
          href: 'https://www.youtube.com/@SignLanguageTech',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/sign-language-tech',
        },
      ],
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
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
        Head: './src/components/overrides/Head.astro'
      },
      head: [
        // Minimal meta tags only for fallback
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: 'A comprehensive platform for technical interview preparation, with special focus on accessibility for deaf and hard of hearing individuals.'
          }
        },
        // Analytics scripts
        ...generateAnalyticsTags()
      ],
    }),
  ],
});
