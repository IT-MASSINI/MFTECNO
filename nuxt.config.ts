// ═══════════════════════════════════════════════════════════════════════════
//  MF TECNO - Nuxt 3 Configuration
//  ---------------------------------------------------------------------------
//  Stack: Nuxt 3 + i18n (6 lingue) + Bootstrap 5.3 + Swiper + Pinia
//  Deploy target: Cloudflare Pages (SSG + ISR)
//  Obiettivi: Security headers A+, SEO multilingua, Core Web Vitals 90+
// ═══════════════════════════════════════════════════════════════════════════

export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  devtools: { enabled: true },

  // ─────────────────────────────────────────────────────────────────────────
  //  MODULES
  // ─────────────────────────────────────────────────────────────────────────
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',        // Sitemap XML automatica con hreflang per 6 lingue
    '@nuxtjs/robots',         // robots.txt gestito da config
    '@nuxt/image',            // Ottimizzazione immagini: AVIF/WebP + srcset responsive
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

  // ─────────────────────────────────────────────────────────────────────────
  //  I18N - Internazionalizzazione con SEO automatico
  // ─────────────────────────────────────────────────────────────────────────
  i18n: {
    baseUrl: 'https://www.mftecno.com',
    strategy: 'prefix',
    defaultLocale: 'it',
    locales: [
      { code: 'it', language: 'it-IT', name: 'Italiano',              file: 'it.json' },
      { code: 'en', language: 'en-GB', name: 'English',               file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español',               file: 'es.json' },
      { code: 'br', language: 'pt-BR', name: 'Português do Brasil',   file: 'br.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français',              file: 'fr.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch',               file: 'de.json' },
    ],
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mftecno_lang',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',   // Se il browser richiede una lingua non supportata
    },

    // seo: true → abilita generazione automatica di:
    //   • <link rel="alternate" hreflang="..."> per ogni pagina
    //   • <link rel="canonical"> corretto
    //   • <html lang="..."> coerente con la locale attiva
    // Requisito fondamentale per siti multilingua ben indicizzati da Google.
    seo: true,
    skipSettingLocaleOnNavigate: false,
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  SITE CONFIG - base per sitemap, robots, canonical
  // ─────────────────────────────────────────────────────────────────────────
  site: {
    url: 'https://www.mftecno.com',
    name: 'MF Tecno - Packaging Systems',
  },

  sitemap: {
    autoLastmod: true,   // <lastmod> automatico da filesystem/CMS
    xsl: false,          // disabilita foglio di stile XSL (non serve per Google)
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/api/'],
    Sitemap: 'https://www.mftecno.com/sitemap.xml',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NUXT IMAGE - ottimizzazione automatica immagini prodotto
  // ─────────────────────────────────────────────────────────────────────────
  //  Usa <NuxtImg src="/images/foo.jpg" /> al posto di <img> per avere:
  //  • Formato moderno (AVIF > WebP > JPG fallback)
  //  • Responsive srcset automatico
  //  • Lazy loading nativo
  //  Impatto stimato: -60/80% peso immagini, +15/25 punti LCP
  image: {
    format: ['avif', 'webp', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    provider: 'ipx',   // provider gratuito, funziona su Cloudflare Pages
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NITRO - Server engine, prerender e compression
  // ─────────────────────────────────────────────────────────────────────────
  nitro: {
    prerender: {
      crawlLinks: true,                            // segue i link interni per prerender
      routes: ['/', '/sitemap.xml', '/robots.txt'],
      failOnError: false,                          // non fallire la build su singola pagina
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,   // brotli è ~20% più efficiente di gzip su testo
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ROUTE RULES - caching e rendering per-route (massima flessibilità)
  // ─────────────────────────────────────────────────────────────────────────
  //  Strategia:
  //  • Pagine statiche (home, chi siamo, contatti) → prerender
  //  • Pagine prodotto   → prerender + revalidate 24h edge
  //  • Blog              → ISR ogni ora (si aggiorna senza ri-deploy)
  //  • Asset _nuxt/*     → cache 1 anno immutabile (hash nel nome)
  //  • API               → no-cache, noindex
  routeRules: {
    // Homepage: prerender alla build
    '/': { prerender: true },

    // Pagine prodotto (es. /it/prodotti/insaccatrici/...)
    '/**/prodotti/**': {
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      },
    },

    // Blog: ISR con rigenerazione ogni ora
    '/**/blog/**': {
      isr: 3600,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      },
    },

    // API (form contatti, newsletter, ecc.): mai cachate, non indicizzate
    '/api/**': {
      cors: true,
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex',
      },
    },

    // Asset build Nuxt: cache aggressiva (hash nel nome garantisce invalidazione)
    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  RUNTIME CONFIG - variabili disponibili lato client/server
  // ─────────────────────────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.mftecno.com',
      gtmId: process.env.GTM_ID || '',         // Google Tag Manager ID (opzionale)
      ga4Id: process.env.GA4_MEASUREMENT_ID || '', // GA4 ID diretto (opzionale)
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  APP HEAD - meta globali, SEO baseline, performance hints
  // ─────────────────────────────────────────────────────────────────────────
  app: {
    head: {
      htmlAttrs: { lang: 'it' },   // Sovrascritto per ogni locale da @nuxtjs/i18n
      title: 'MF Tecno - Packaging Systems',
      titleTemplate: '%s | MF Tecno',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      meta: [
        // Blocca auto-linking di numeri telefonici su iOS (rompe il layout)
        { name: 'format-detection', content: 'telephone=no' },

        // Colore barra indirizzi mobile (navy MF Tecno)
        { name: 'theme-color', content: '#28477D' },

        // SEO: consente anteprime grandi su Google Discover/Images
        // max-image-preview:large → cruciale per sito B2B dove la foto macchinario vende
        {
          name: 'robots',
          content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
        },

        // Open Graph baseline (sovrascrivibile per-pagina con useSeoMeta)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MF Tecno' },
        { property: 'og:locale', content: 'it_IT' },

        // Twitter Card baseline
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon',  href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },

        // ── Performance hints ────────────────────────────────────────────
        // preconnect: apre anticipatamente connessione TCP+TLS (risparmia ~100-300ms)
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com', crossorigin: '' },

        // dns-prefetch: risolve il DNS in anticipo (più leggero di preconnect)
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      ],

      script: [
        {
          // Bootstrap JS da CDN - allineato alla major.minor del CSS installato (5.3.x)
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js',
          defer: true,                // Non blocca il parser HTML → migliora FCP/LCP
          crossorigin: 'anonymous',
          // integrity: 'sha384-...',  // Opzionale: SRI hash da https://www.srihash.org
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  CSS GLOBALI
  // ─────────────────────────────────────────────────────────────────────────
  css: [
    'bootstrap/scss/bootstrap.scss',
    'swiper/css/bundle',
    '@/assets/scss/style.scss',
    '@/assets/css/responsive.css',
    '@/assets/css/mftecno.css',
    '@/assets/css/footer-mftecno-addition.css',
  ],

  // ─────────────────────────────────────────────────────────────────────────
  //  VITE - build tooling (Sass + ottimizzazione CSS)
  // ─────────────────────────────────────────────────────────────────────────
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
        },
      },
    },

    build: {
      cssCodeSplit: true,          // Split del CSS per-route (meno CSS non usato per pagina)
      cssMinify: 'lightningcss',   // Minifier più veloce e aggressivo di esbuild
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  EXPERIMENTAL - feature stabili ma non di default
  // ─────────────────────────────────────────────────────────────────────────
  experimental: {
    payloadExtraction: true,    // Estrae il payload in file separato (cache migliore)
    renderJsonPayloads: true,   // Payload JSON invece che JS (meno parsing)
    inlineRouteRules: true,     // Route rules inline nei file generati
  },
})
