// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/main.scss"],
    modules: [
        "@nuxt/image",
        "nuxt-viewport",
        "@nuxt/fonts",
        "@nuxt/content",
        "@nuxtjs/seo",
    ],
    content: {
        markdown: {
            anchorLinks: false,
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            script: [
                {
                    src: "/js/accessible-menu.js",
                    body: true,
                },
            ],
        },
    },
})
