// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  colorMode: {
    classSuffix: "", // The class suffix to apply (default is `-mode`)
    preference: "dark", // Default theme preference (light/dark/system)
    fallback: "dark", // Fallback theme if system theme cannot be detected
  },

  css: ["~/assets/css/app.css"],
  compatibilityDate: "2024-10-31",
});