// data/clients.ts
// Aggiungi o rimuovi loghi da questo array — il carousel si adatta automaticamente.

export interface ClientLogo {
  src: string
  alt: string
  /** Larghezza custom opzionale (px) — sovrascrive il default 140px */
  width?: number
}

export const clientLogos: ClientLogo[] = [
  { src: '/images/clients/be-food.png',         alt: 'BeFood Pet Nutrition' },
  { src: '/images/clients/xion.png',             alt: 'XION Sea Salt' },
  { src: '/images/clients/durrah.png',           alt: 'Durrah Advanced Development Co.' },
  { src: '/images/clients/proa.png',             alt: 'Proa – Nutriendo Bienestar' },
  { src: '/images/clients/tecno_supplier.png',   alt: 'Tecno Supplier' },
  { src: '/images/clients/unicol.png',           alt: 'Unicol Adhesive Technologies' },
  { src: '/images/clients/di-nunzio.png',        alt: 'Di Nunzio – Frutta Secca e Legumi' },
  // ← Aggiungi nuovi clienti qui sotto, nessuna altra modifica necessaria
]
