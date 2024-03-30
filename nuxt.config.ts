export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    [
      'shadcn-nuxt',
      {
        prefix: '',
        componentDir: './components/ui',
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
        preference: 'light',
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        preload: true,
        display: 'swap',
        useStylesheet: true,
        families: {
          Inter: {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          },
        },
      },
    ],
    '@nuxt/content',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
    },
  },
  css: ['~/assets/css/global.css'],
})
