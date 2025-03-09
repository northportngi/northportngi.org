// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/assets/css/main.scss'],
	site: {
		url: 'https://northportngi.org',
		name: 'Northport Native Garden Initiative',
		description: 'We are a small 501(c)(3) in Northport, NY, empowering our community with tools and knowledge to promote native landscaping for a healthier local ecosystem.',
		defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
	},

	modules: ['@nuxt/image', 'nuxt-viewport', '@nuxt/fonts', '@nuxtjs/seo', '@nuxtjs/apollo'],
	apollo: {
		clients: {
			default: {
				httpEndpoint: process.env.NUXT_PUBLIC_HYGRAPHQL_ENDPOINT,
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
