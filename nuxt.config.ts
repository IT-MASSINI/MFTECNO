export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],

  i18n: {
    baseUrl: 'https://www.mftecno.com',
    strategy: 'prefix',           // tutte le lingue hanno prefisso: /it/, /en/, /de/...
    defaultLocale: 'it',
    locales: [
      { code: 'it', language: 'it-IT', name: 'Italiano',  file: 'it.json' },
      { code: 'en', language: 'en-GB', name: 'English',   file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español',   file: 'es.json' },
      { code: 'br', language: 'pt-BR', name: 'Português do Brasil', file: 'br.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français',  file: 'fr.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch',   file: 'de.json' },
    ],
    langDir: 'locales/',          // cartella con i file JSON delle traduzioni
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mftecno_lang',
      redirectOn: 'root',         // redirect automatico solo sulla home /
      alwaysRedirect: false,
    },
  },

  app: {
    head: {
      title: "MF Tecno - Packaging Systems",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js",
        },
      ],
    }
  },

  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "@/assets/scss/style.scss",
    "@/assets/css/responsive.css",
    "@/assets/css/mftecno.css",
    "@/assets/css/footer-mftecno-addition.css"
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/mftecno-variables" as *;`
        }
      }
    }
  }
})
