// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["normalize.css/normalize.css"],
  components: [{path: '@/components', pathPrefix: false}],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/components/bosons/ColorPallete.scss" as *; @use "@/assets/scss/base.scss" as *; @use "@/components/bosons/Breakpoints.scss" as *;'
        },
      },
    },
  },
});
