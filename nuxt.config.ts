// ═══════════════════════════════════════════════════════════════════════════
//  MF TECNO - Nuxt 3 Configuration
//  ---------------------------------------------------------------------------
//  Stack:         Nuxt 3 + i18n (6 lingue) + Bootstrap 5.3 + Swiper + Pinia
//  Deploy target: Cloudflare Pages (SSG)
//  Obiettivi:     Security headers A+, SEO multilingua, Core Web Vitals 90+
//
//  NOTA ARCHITETTURALE IMPORTANTE
//  ──────────────────────────────
//  Su Cloudflare Pages con `nuxt generate`, gli header HTTP applicati
//  ai file statici sono controllati dal file `public/_headers`, NON
//  dal modulo nuxt-security (che in SSG applica header solo in dev/preview).
//
//  Di conseguenza:
//  • La CSP "autoritativa" in produzione è quella di `public/_headers`.
//  • Qui in nuxt-security replichiamo la stessa CSP per coerenza in dev
//    e per beneficiare del calcolo automatico degli hash SSG.
//  • Bootstrap JS NON viene caricato da CDN: viene importato dal bundle
//    npm (già presente nel package.json). Questo elimina la necessità di
//    `'strict-dynamic'` + integrity e semplifica la CSP.
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
    '@nuxt/image',            // AVIF/WebP + srcset responsive
    'nuxt-security',          // CSP / HSTS / security headers
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],

  // ─────────────────────────────────────────────────────────────────────────
  //  SECURITY - nuxt-security
  //  ---------------------------------------------------------------------------
  //  In SSG questa configurazione è usata in dev/preview e come riferimento.
  //  In produzione su Cloudflare Pages gli header veri sono in `public/_headers`.
  //  Le due CSP DEVONO restare allineate.
  // ─────────────────────────────────────────────────────────────────────────
  security: {
    // Disabilitato il rate limiter (non utile su CDN statico Cloudflare)
    rateLimiter: false,

    // CORS handler disabilitato: non abbiamo API interne sullo stesso dominio
    corsHandler: false,

    // In SSG calcola hash SHA-256 per script/style inline generati da Nuxt
    // (es. window.__NUXT__), così la CSP può bloccare 'unsafe-inline' sugli script.
    ssg: {
      hashScripts: true,
      hashStyles: false,   // lasciamo 'unsafe-inline' sugli stili (Bootstrap/Swiper)
      meta: false,         // niente <meta CSP>: eviterebbe conflitti con _headers
    },

    // Nonce runtime: utile solo se hai route SSR/ISR (es. /blog se diventa dinamico).
    // Per SSG puro non serve, ma lo lasciamo attivo per coerenza.
    nonce: true,

    headers: {
      // ─── Content-Security-Policy ────────────────────────────────────────
      // Deve essere identica a quella in public/_headers.
      contentSecurityPolicy: {
        'default-src': ["'self'"],

        'script-src': [
          "'self'",
          "'nonce-{{nonce}}'",          // per script con nonce in runtime SSR/ISR
          // Gli hash degli script inline Nuxt sono aggiunti automaticamente da ssg.hashScripts
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://static.cloudflareinsights.com',
        ],

        // Handler inline onclick="..." vietati (Nuxt non li usa)
        'script-src-attr': ["'none'"],

        // Stili: 'unsafe-inline' è necessario per Bootstrap 5.3 + Swiper + Vue
        // (componenti emettono attributi style="..." dinamici).
        // Impatto Observatory: mantiene comunque B+/A-, è pratica standard.
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
        ],

        'img-src': ["'self'", 'data:', 'blob:', 'https:'],

        'font-src': [
          "'self'",
          'data:',
          'https://fonts.gstatic.com',
        ],

        'connect-src': [
          "'self'",
          'https://www.google-analytics.com',
          'https://*.analytics.google.com',
          'https://*.google-analytics.com',
          'https://*.googletagmanager.com',
          'https://cloudflareinsights.com',
          'https://static.cloudflareinsights.com',
        ],

        // Iframe consentiti: YouTube + Google Maps embed
        'frame-src': [
          "'self'",
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
          'https://www.google.com',
        ],

        // Nessuno può embeddare MF Tecno in iframe (anti-clickjacking)
        'frame-ancestors': ["'none'"],

        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'object-src': ["'none'"],
        'manifest-src': ["'self'"],
        'worker-src': ["'self'", 'blob:'],
        'media-src': ["'self'", 'https:'],

        'upgrade-insecure-requests': true,
      },

      // ─── HSTS: 2 anni + subdomains + preload ────────────────────────────
      strictTransportSecurity: {
        maxAge: 63072000,
        includeSubdomains: true,
        preload: true,
      },

      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',

      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
        'interest-cohort': [],   // opt-out FLoC / Topics API
        payment: [],
        usb: [],
        magnetometer: [],
        gyroscope: [],
        accelerometer: [],
      },

      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',

      // COEP disabilitato: 'require-corp' e 'credentialless' rompono embed
      // YouTube/Maps senza aggiungere valore significativo per un sito pubblico.
      crossOriginEmbedderPolicy: false,

      // X-XSS-Protection è deprecato: il valore raccomandato oggi è '0'
      xXSSProtection: '0',

      // Previene Flash/PDF cross-domain policies
      xPermittedCrossDomainPolicies: 'none',

      // Isola il processo rendering per difesa Spectre
      originAgentCluster: '?1',

      // X-Download-Options: blocca "Apri" automatico su IE/Edge legacy
      xDownloadOptions: 'noopen',

      // X-DNS-Prefetch-Control: permette ai browser di risolvere DNS in anticipo
      xDNSPrefetchControl: 'on',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  I18N - Internazionalizzazione con SEO automatico
  // ─────────────────────────────────────────────────────────────────────────
  i18n: {
    baseUrl: 'https://www.mftecno.com',
    strategy: 'prefix',
    defaultLocale: 'it',
    locales: [
      { code: 'it', language: 'it-IT', name: 'Italiano',            file: 'it.json' },
      { code: 'en', language: 'en-GB', name: 'English',             file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español',             file: 'es.json' },
      { code: 'br', language: 'pt-BR', name: 'Português do Brasil', file: 'br.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français',            file: 'fr.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch',             file: 'de.json' },
    ],
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mftecno_lang',
      cookieSecure: true,           // Cookie con flag Secure (risolve warning Observatory)
      cookieCrossOrigin: false,
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
    // Generazione automatica di hreflang, canonical, <html lang="...">
    // Fondamentale per SEO multilingua.
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
    autoLastmod: true,
    xsl: false,
  },

  // @nuxtjs/robots v6 usa chiavi minuscole
  robots: {
    userAgent: '*',
    disallow: ['/api/'],
    sitemap: 'https://www.mftecno.com/sitemap.xml',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NUXT IMAGE - ottimizzazione automatica immagini prodotto
  // ─────────────────────────────────────────────────────────────────────────
  //  Usa <NuxtImg> al posto di <img> per avere:
  //  • Formato moderno (AVIF > WebP > JPG fallback)
  //  • Responsive srcset automatico
  //  • Lazy loading nativo
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
    provider: 'ipx',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NITRO - Server engine, prerender e compression
  // ─────────────────────────────────────────────────────────────────────────
  nitro: {
    preset: 'cloudflare-pages',      // esplicita il target (se deploy automatico non setta)
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
      failOnError: false,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ROUTE RULES - caching e rendering per-route
  // ─────────────────────────────────────────────────────────────────────────
  routeRules: {
    '/': { prerender: true },

    '/**/prodotti/**': {
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      },
    },

    '/**/blog/**': {
      isr: 3600,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      },
    },

    '/api/**': {
      cors: true,
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex',
      },
    },

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
      gtmId: process.env.GTM_ID || '',
      ga4Id: process.env.GA4_MEASUREMENT_ID || '',
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
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#28477D' },
        {
          name: 'robots',
          content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MF Tecno' },
        { property: 'og:locale', content: 'it_IT' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon',  href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },

        // ── Performance hints (solo endpoint che usi davvero) ─────────────
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },

        // Se usi Google Fonts, preconnect migliora LCP di ~100-300ms
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],

      // ── Bootstrap JS: importato dal bundle npm, non da CDN ──────────────
      // Nel file entry (app.vue o plugin) aggiungi:
      //   import 'bootstrap/dist/js/bootstrap.bundle.min.js'
      // Questo elimina il bisogno di CSP strict-dynamic + integrity SRI.
      script: [],
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
          additionalData: `@use "@/assets/scss/mftecno-variables" as *;`,
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'if-function', 'color-functions'],
        },
      },
    },
    build: {
      cssCodeSplit: true,
      cssMinify: 'lightningcss',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  EXPERIMENTAL
  // ─────────────────────────────────────────────────────────────────────────
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
})
