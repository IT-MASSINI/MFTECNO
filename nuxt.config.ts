export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
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
    strategy: 'prefix',
    defaultLocale: 'it',
    locales: [
      { code: 'it', language: 'it-IT', name: 'Italiano',  file: 'it.json' },
      { code: 'en', language: 'en-GB', name: 'English',   file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español',   file: 'es.json' },
      { code: 'br', language: 'pt-BR', name: 'Português do Brasil', file: 'br.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français',  file: 'fr.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch',   file: 'de.json' },
    ],
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mftecno_lang',
      redirectOn: 'root',
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
          // Bootstrap JS: allineato alla stessa major.minor di Bootstrap CSS installato (5.3.x)
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
          // Variabili globali MF Tecno disponibili in tutti i file SCSS senza @import
          additionalData: `@use "@/assets/scss/mftecno-variables" as *;`,

          // quietDeps: true  →  silenzia i warning provenienti da node_modules (Bootstrap, Swiper, ecc.)
          //                     I tuoi warning in assets/scss restano SEMPRE visibili
          quietDeps: true,

          // silenceDeprecations  →  le 4 categorie che Bootstrap 5.3.x emette con Sass 1.86+
          //                         Queste verranno rimosse automaticamente quando Bootstrap 6
          //                         migrerà a @use/@forward (API Sass moderna)
          //
          //  • import          → @import Bootstrap deprecato in favore di @use/@forward
          //  • global-builtin  → funzioni globali Sass (math.div, ecc.) spostate nei moduli
          //  • if-function     → if($a, $b, $c) deprecato in favore di if(sass(...): ...; else: ...)
          //  • color-functions → red(), green(), blue() deprecate in favore di color.channel()
          silenceDeprecations: ['import', 'global-builtin', 'if-function', 'color-functions'],
        }
      }
    }
  }
})
