/**
 * News data — MF TECNO
 * Sorgente unica dei dati per i componenti News (homepage, archivio, detail page).
 *
 * Collocazione: /data/news-data.ts
 * Uso tipico:
 *   import { news, getNewsById, getLatestNews } from '~/data/news-data'
 */

export interface NewsArticle {
  id: number
  /** Prima riga del titolo (usata per il break visivo nelle card) */
  titleLine1: string
  /** Seconda riga del titolo */
  titleLine2: string
  /** Categoria editoriale (es. "Case Study", "News", "Approfondimento") */
  category: NewsCategory
  /** Autore / firma */
  author: string
  /** Tempo di lettura stimato (es. "6 min") */
  readTime: string
  /** Path pubblico dell'immagine di copertina */
  image: string
  /** Slug/path della detail page (senza locale prefix — viene aggiunto da localePath) */
  link: string
  /** Data di pubblicazione ISO 8601 (opzionale, utile per ordinamento) */
  publishedAt?: string
  /** Se true, la news è in evidenza / featured */
  featured?: boolean
}

export type NewsCategory = 'Case Study' | 'News' | 'Approfondimento' | 'Prodotto'

/**
 * Elenco completo delle news.
 * Ordinato dalla più recente alla più vecchia.
 */
export const news: NewsArticle[] = [
  {
    id: 1,
    titleLine1: 'Unicol e MF Tecno:',
    titleLine2: 'confezionamento di colla in granuli',
    category: 'Case Study',
    author: 'MF TECNO',
    readTime: '6 min',
    image: '/images/news/news-01.jpg',
    link: '/news/unicol',
    publishedAt: '2026-03-15',
    featured: true,
  },
  {
    id: 2,
    titleLine1: 'Incartonatrice Wrap Around',
    titleLine2: 'MF TECNO',
    category: 'News',
    author: 'MF TECNO',
    readTime: '7 min',
    image: '/images/news/news-02.jpg',
    link: '/news/wrap-around',
    publishedAt: '2026-02-20',
  },
  {
    id: 3,
    titleLine1: 'Nuova linea di confezionamento',
    titleLine2: 'automatico MF TECNO',
    category: 'News',
    author: 'MF TECNO',
    readTime: '5 min',
    image: '/images/news/news-02.jpg',
    link: '/news/nuova-linea',
    publishedAt: '2026-01-10',
  },
]

/* ──────────────────────────────────────────────────────────────
   Helper functions — comode per diversi componenti/pagine
   ────────────────────────────────────────────────────────────── */

/**
 * Restituisce le N news più recenti (default: 3), utile per la home.
 */
export function getLatestNews(limit = 3): NewsArticle[] {
  return [...news]
    .sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
      return dateB - dateA
    })
    .slice(0, limit)
}

/**
 * Trova una news tramite id.
 */
export function getNewsById(id: number): NewsArticle | undefined {
  return news.find((article) => article.id === id)
}

/**
 * Trova una news tramite link/slug (utile per la detail page dinamica).
 */
export function getNewsByLink(link: string): NewsArticle | undefined {
  return news.find((article) => article.link === link)
}

/**
 * Filtra per categoria (utile per pagine di archivio filtrate).
 */
export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  return news.filter((article) => article.category === category)
}

/**
 * Restituisce solo le news featured.
 */
export function getFeaturedNews(): NewsArticle[] {
  return news.filter((article) => article.featured === true)
}
