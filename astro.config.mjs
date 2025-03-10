import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	// Added Configuration for
	// Deployment to GitHub Pages
	site: 'https://signlanguagetech.com',
	base: '/crack-interview',
	integrations: [
		starlight({

			// Add plugins
			plugins: [],
			title: '30Days Template',
			social: {
				github: 'https://github.com/signlanguagetech/crack-interview',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
