// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/assets/css/main.scss'],
	site: {
		url: 'https://northportngi.org',
		name: 'Northport Native Garden Initiative',
		description: 'We are a small 501(c)(3) in Northport, NY, empowering our community with tools and knowledge to promote native landscaping for a healthier local ecosystem.',
		defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
	},

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
