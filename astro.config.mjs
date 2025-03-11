import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const port = 4300;
const localHostUrl = `http://localhost:${port}`;
const liveUrl = 'https://signlanguagetech.com';
const isProd = import.meta.env.PROD;

export default defineConfig({
	server: {
    port
  },
  site: isProd ? liveUrl : localHostUrl,
	base: isProd ? '/crack-interview': '/',
	integrations: [
		starlight({
			plugins: [],
			title: 'Crack Interview',
			social: {
				github: 'https://github.com/signlanguagetech/crack-interview',
			},
			sidebar: [
				{
          label: "Hello",
          autogenerate: { directory: "hello/" },
          collapsed: false
        },
				{
          label: "Skills",
          autogenerate: { directory: "skills/" },
          collapsed: false
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
