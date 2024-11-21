import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/main.scss"],

    modules: [
        "@nuxt/image",
        "nuxt-viewport",
        "@nuxt/fonts",
        "@nuxt/content",
        "@nuxtjs/seo",
        "@nuxtjs/prismic"
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

    compatibilityDate: "2024-08-05",

    prismic: {
        endpoint: apiEndpoint || repositoryName
    }
})