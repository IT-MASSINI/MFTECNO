// ═══════════════════════════════════════════════════════════════════════════
//  MF TECNO - Nuxt 3 Configuration - OTTIMIZZATO SEO MASSIMO
//  ---------------------------------------------------------------------------
//  Stack:         Nuxt 3 + i18n (6 lingue) + Bootstrap 5.3 + Swiper + Pinia
//  Deploy target: Cloudflare Pages (SSG, preset cloudflare-pages)
//
//  STRATEGIA SEO:
//  • Hreflang automatici per 6 lingue (I18N seo:true)
//  • Canonical URL corretti su dominio produzione www.mftecno.com
//  • Sitemap con priorità/lastmod + hreflang multilingua
//  • Robots.txt: blocca solo /api, indicizza tutto il resto
//  • Preview domain .pages.dev bloccato da indicizzazione via middleware
//  • Open Graph completo per social sharing
//  • Structured data JSON-LD inseribili per page
//  • Core Web Vitals: preconnect, dns-prefetch, lazy loading @nuxt/image
//
//  STRATEGIA SECURITY:
//  • Header gestiti da public/_headers (fonte di verità per Cloudflare Pages)
//  • nuxt-security RIMOSSO per evitare conflitti
// ═══════════════════════════════════════════════════════════════════════════

export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  devtools: { enabled: true },

  // ─────────────────────────────────────────────────────────────────────────
  //  MODULES
  // ─────────────────────────────────────────────────────────────────────────
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],

  // ─────────────────────────────────────────────────────────────────────────
  //  I18N - Internazionalizzazione con SEO avanzato
  //  ---------------------------------------------------------------------------
  //  seo:true genera AUTOMATICAMENTE:
  //  • <link rel="alternate" hreflang="..." /> per ogni locale
  //  • <link rel="alternate" hreflang="x-default" /> (critico per Google)
  //  • <link rel="canonical" /> corretto per la pagina corrente
  //  • <html lang="..."> coerente con locale attiva
  //  • <meta property="og:locale" /> e og:locale:alternate
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
      cookieSecure: true,
      cookieCrossOrigin: false,
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
    seo: true,
    skipSettingLocaleOnNavigate: false,
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  SITE CONFIG - base per sitemap, robots, canonical
  //  ---------------------------------------------------------------------------
  //  URL canonico è SEMPRE www.mftecno.com, anche quando il sito viene
  //  visualizzato da mftecno.pages.dev (preview). Questo previene duplicate
  //  content e consolida l'authority SEO sul dominio principale.
  // ─────────────────────────────────────────────────────────────────────────
  site: {
    url: 'https://www.mftecno.com',
    name: 'MF Tecno - Packaging Systems',
    description: 'MF TECNO — soluzioni di confezionamento industriale, insaccatrici automatiche e sistemi di packaging per piccoli formati. Made in Italy.',
    defaultLocale: 'it',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  SITEMAP AVANZATA - priorità, frequenza, hreflang multilingua
  // ─────────────────────────────────────────────────────────────────────────
  sitemap: {
    autoLastmod: true,
    xsl: false,

    // Genera una sitemap per ogni locale + sitemap index
    // (Google preferisce sitemap per-lingua per siti multilingua)
    sitemaps: {
      it: { sources: ['/api/__sitemap__/urls/it'] },
      en: { sources: ['/api/__sitemap__/urls/en'] },
      es: { sources: ['/api/__sitemap__/urls/es'] },
      br: { sources: ['/api/__sitemap__/urls/br'] },
      fr: { sources: ['/api/__sitemap__/urls/fr'] },
      de: { sources: ['/api/__sitemap__/urls/de'] },
    },

    // Default per tutte le URL generate
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },

    // Override per URL specifiche (rotte ad alto valore SEO)
    urls: async () => {
      return [
        { loc: '/', priority: 1.0, changefreq: 'daily' },
        { loc: '/prodotti', priority: 0.9, changefreq: 'weekly' },
        { loc: '/blog', priority: 0.8, changefreq: 'daily' },
        { loc: '/contatti', priority: 0.6, changefreq: 'monthly' },
      ]
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ROBOTS.TXT - indicizza tutto tranne API e preview
  // ─────────────────────────────────────────────────────────────────────────
  robots: {
    userAgent: '*',
    disallow: ['/api/'],
    sitemap: 'https://www.mftecno.com/sitemap.xml',

    // Gruppi specifici per bot (opzionale ma potente per SEO)
    groups: [
      {
        userAgent: ['Googlebot', 'Googlebot-Image'],
        allow: ['/'],
        disallow: ['/api/'],
      },
      {
        // Blocca scraper AI che non portano traffico (opzionale)
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: ['/'],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NUXT IMAGE - ottimizzazione per Core Web Vitals + Google Images
  // ─────────────────────────────────────────────────────────────────────────
  image: {
    format: ['avif', 'webp', 'jpg'],
    quality: 80,
    // Densità retina: genera 1x e 2x per schermi hi-DPI
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    provider: 'ipx',
    // Preset per immagini prodotto (ottimizzato per Google Images)
    presets: {
      productCard: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 600,
          height: 600,
          fit: 'cover',
        },
      },
      productHero: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 1600,
          fit: 'inside',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NITRO - preset cloudflare-pages (necessario per _headers)
  // ─────────────────────────────────────────────────────────────────────────
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
      failOnError: false,
      // Aggiunge delay tra prerender per non sovraccaricare (ottimale per SEO tools esterni)
      concurrency: 5,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ROUTE RULES - prerender + ISR + header per-route
  // ─────────────────────────────────────────────────────────────────────────
  routeRules: {
    '/': { prerender: true },
    '/**/prodotti/**': { prerender: true },
    '/**/blog/**': { isr: 3600 },

    '/api/**': {
      cors: true,
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  RUNTIME CONFIG
  // ─────────────────────────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.mftecno.com',
      gtmId: process.env.GTM_ID || '',
      ga4Id: process.env.GA4_MEASUREMENT_ID || '',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  APP HEAD - SEO baseline massimo
  // ─────────────────────────────────────────────────────────────────────────
  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'MF Tecno - Packaging Systems',
      titleTemplate: '%s | MF Tecno',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      meta: [
        // ── Technical ─────────────────────────────────────────────────────
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#28477D' },
        { name: 'color-scheme', content: 'light dark' },

        // ── Robots: segnale forte a Googlebot per snippet grandi ──────────
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },

        // ── Description baseline (sovrascrivibile per-page con useSeoMeta) ─
        {
          name: 'description',
          content: 'MF TECNO: soluzioni di confezionamento industriale, insaccatrici automatiche e sistemi di packaging. Made in Italy.',
        },

        // ── Open Graph - sharing Facebook, LinkedIn, WhatsApp ─────────────
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MF Tecno' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:locale:alternate', content: 'en_GB' },
        { property: 'og:locale:alternate', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'pt_BR' },
        { property: 'og:locale:alternate', content: 'fr_FR' },
        { property: 'og:locale:alternate', content: 'de_DE' },
        { property: 'og:image', content: 'https://www.mftecno.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'MF Tecno - Packaging Systems' },

        // ── Twitter Card ──────────────────────────────────────────────────
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mftecno' }, // cambia con l'handle reale
        { name: 'twitter:image', content: 'https://www.mftecno.com/og-image.jpg' },

        // ── SEO avanzato ──────────────────────────────────────────────────
        { name: 'author', content: 'MF Tecno Packaging System' },
        { name: 'publisher', content: 'MF Tecno Packaging System' },
        { name: 'generator', content: 'Nuxt 3' },
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon',  href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },

        // ── Performance hints: migliorano LCP e FID (ranking Core Web Vitals)
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],

      // Bootstrap JS via import bundled (vedi app.vue)
      script: [
        // JSON-LD Organization - schema.org per Knowledge Graph di Google
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MF Tecno Packaging System',
            url: 'https://www.mftecno.com',
            logo: 'https://www.mftecno.com/logo.png',
            description: 'Soluzioni di confezionamento industriale e insaccatrici automatiche.',
            sameAs: [
              // Aggiungi i tuoi social reali
              'https://www.linkedin.com/company/mftecno',
            ],
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IT',
            },
          }),
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
  //  VITE - ottimizzazione build per Core Web Vitals
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
      cssCodeSplit: true,           // CSS split per-route (meno CSS non usato)
      cssMinify: 'lightningcss',    // più aggressivo di esbuild
      // Target browser moderni = bundle JS più piccolo = FID migliore
      target: 'es2020',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  EXPERIMENTAL - feature che migliorano SEO/performance
  // ─────────────────────────────────────────────────────────────────────────
  experimental: {
    payloadExtraction: true,        // payload in file separato (cache migliore)
    renderJsonPayloads: true,       // JSON payload invece di JS (meno parsing)
    viewTransition: true,           // animazioni fluide tra pagine (UX)
  },
})
