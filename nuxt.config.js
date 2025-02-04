// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/assets/css/main.scss'],

	modules: [
		'@nuxt/image',
		'nuxt-viewport',
		'@nuxt/fonts',
		'@nuxtjs/seo',
		[
			'@storyblok/nuxt',
			{
				accessToken: '1USGnrZHovXGLU8fQrW8Wwtt',
				apiOptions: {
					version: 'draft',
					region: 'us',
				},
			},
		],
	],

	image: {
		provider: 'storyblok', // Set Storyblok as the default image provider
		storyblok: {
			baseURL: 'https://a-us.storyblok.com',
		},
		presets: {
			thumbnail: {
				modifiers: {
					width: 600,
					height: 350,
					fit: 'cover', // Crop the image
					format: 'webp', // Convert to WebP format
				},
			},
		},
	},

	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			script: [
				{
					src: '/js/accessible-menu.js',
					body: true,
				},
			],
		},
	},

	compatibilityDate: '2024-08-05',
})
