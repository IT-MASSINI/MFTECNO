// ═══════════════════════════════════════════════════════════════════════════
//  MIDDLEWARE SEO: blocco indicizzazione preview domain (.pages.dev)
//  ---------------------------------------------------------------------------
//  PROBLEMA:
//  Quando Cloudflare Pages deploya, il sito è accessibile sia su
//  www.mftecno.com (produzione) sia su mftecno.pages.dev (preview).
//  Se Google indicizza entrambi, abbiamo DUPLICATE CONTENT = penalizzazione SEO.
//
//  SOLUZIONE:
//  Quando il browser richiede una pagina e l'host è il preview domain,
//  iniettiamo un <meta name="robots" content="noindex, nofollow"> che dice
//  a Google di non indicizzare quella versione.
//
//  Il dominio produzione www.mftecno.com continua ad avere robots: index, follow.
//
//  POSIZIONE: salva questo file come middleware/seo-noindex-preview.global.ts
// ═══════════════════════════════════════════════════════════════════════════

export default defineNuxtRouteMiddleware((to) => {
  // Solo lato client (necessario per window.location.hostname)
  if (import.meta.server) return

  const hostname = window.location.hostname

  // Lista di domini che NON devono essere indicizzati
  const noindexHosts = [
    'mftecno.pages.dev',
    'localhost',
    '127.0.0.1',
  ]

  // Controlla anche preview deploy specifici di Cloudflare (es. abc123.mftecno.pages.dev)
  const isPreview = noindexHosts.includes(hostname) || hostname.endsWith('.pages.dev')

  if (isPreview) {
    useHead({
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'googlebot', content: 'noindex, nofollow' },
      ],
    })
  }
})
