import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import starlight from "@astrojs/starlight";
import { isValidHttpsUrl } from "./src/helpers/utils.ts";
import { sidebarConfig, sidebarItems } from "./src/sidebar.config.ts";

const port = process.env.port || 4300;
const isProd = import.meta.env.PROD;

if (isProd) {
  if (!process.env.SITE_URL) {
    throw new Error("SITE_URL is not defined in production environment.");
  }
  if (!isValidHttpsUrl(process.env.SITE_URL)) {
    throw new Error("SITE_URL must be a valid HTTPS URL in production.");
  }
}

export default defineConfig({
  server: { port },
  site: process.env.SITE_URL || `http://localhost:${port}`,
  integrations: [
    starlight({
      plugins: [],
      logo: {
        dark: './src/assets/slt-logo-dark.svg',
        light: './src/assets/slt-logo-light.svg',
        alt: 'Sign Language Tech Logo',
      },
      title: {
        "en": "Sign Tech Interview",
        "es": "Sign Tech Interview en Español",
      },
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/signlanguagetech/sign-tech-interview/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/signlanguagetech/sign-tech-interview',
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
      sidebar: sidebarItems.parse(sidebarConfig),
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        PageTitle: './src/components/overrides/PageTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
        Head: './src/components/overrides/Head.astro',
        MarkdownContent: './src/components/overrides/MarkdownContent.astro',
      },
      head: isProd ? [
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-EM5400YMC3',
            async: true,
          }
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EM5400YMC3');
          `
        }
      ] : [],
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
    }),
  ],
});
