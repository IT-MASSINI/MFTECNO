import type { IMenu } from "@/types/menu-d-t";

// ─────────────────────────────────────────────────────────────────────────────
// Tipi estesi per il mega-menu IMA-style
// Aggiungere a @/types/menu-d-t.ts le interfacce MegaPanelGroup e MegaPanelItem
// ─────────────────────────────────────────────────────────────────────────────

export interface MegaPanelItem {
  title: string;
  link: string;
  description?: string;  // testo breve opzionale sotto il titolo
  tag?: string;           // badge opzionale (es. "Nuovo")
}

export interface MegaPanelGroup {
  /** Titolo del gruppo visibile nella colonna sinistra del pannello */
  label: string;
  /** Icona Bootstrap Icons (es. "bi-box-seam") — opzionale */
  icon?: string;
  /** Link della voce padre (click su label) — opzionale */
  link?: string;
  /** Voci dettaglio che appaiono nella colonna destra al hover/click */
  items: MegaPanelItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DATI MENU
// ─────────────────────────────────────────────────────────────────────────────

const menu_data: IMenu[] = [

  // ── 1. MACCHINARI ──────────────────────────────────────────────────────────
  {
    id: 1,
    link: '/macchinari',
    title: 'Macchinari',
    dropdown: false,
    ima_panel: true,           // flag custom: attiva il pannello IMA-style
    ima_panel_cta: {           // CTA in fondo al pannello
      label: 'Vedi tutte le macchine',
      link: '/macchinari',
    },
    ima_groups: [
      {
        label: 'Insaccatrici a Bocca Aperta',
        icon: 'bi-bag',
        items: [
          { title: 'Piccoli Formati',       link: '/insaccatrici-automatiche-piccoli-formati',       description: 'Buste da 1 a 25 kg, alta velocità' },
          { title: 'Medi e Grandi Formati', link: '/insaccatrici-automatiche-medi-grandi-formati',   description: 'Formati da 25 a 50 kg' },
          { title: 'Semiautomatiche',       link: '/insaccatrici-semiautomatiche-2',                  description: 'Flessibilità operativa' },
        ]
      },
      {
        label: 'Confezionatrici Verticali VFFS',
        icon: 'bi-archive',
        items: [
          { title: 'Piccoli Formati',       link: '/confezionatrici-piccoli-formati',       description: 'Alta produttività su piccoli pesi' },
          { title: 'Medi e Grandi Formati', link: '/confezionatrici-medi-grandi-formati',   description: 'Produzione robusta e versatile' },
        ]
      },
      {
        label: 'Formatrici & Flow Pack',
        icon: 'bi-layout-wtf',
        items: [
          { title: 'Formatrici Tubolari FFS', link: '/ffs-formatrice-tubolare',  description: 'Film tubolare formazione-riempimento-sigillatura' },
          { title: 'Flow Pack',               link: '/flow-pack',                description: 'Confezionamento orizzontale continuo' },
        ]
      },
      {
        label: 'Fine Linea',
        icon: 'bi-layers',
        items: [
          { title: 'Pallettizzatori',                   link: '/pallettizzatori',                    description: 'Automazione stacking pallet' },
          { title: 'Avvolgitori Pallet',                link: '/avvolgitori-pallet',                  description: 'Stretch wrap automatico e semiautomatico' },
          { title: 'Cartonatrici',                      link: '/macchine-cartonatrici',               description: 'Inscatolamento automatico' },
          { title: 'Fardellatrici',                     link: '/fardellatrici',                       description: 'Raggruppamento e fardellatura' },
        ]
      },
      {
        label: 'Sistemi Speciali',
        icon: 'bi-stars',
        items: [
          { title: 'Big-bag',                           link: '/big-bag',                             description: 'FIBC da 500 a 2000 kg' },
          { title: 'Carico e Trasporto Prodotto',       link: '/carico-e-trasporto-prodotto',         description: 'Elevatori, coclee, trasportatori' },
          { title: 'Movimentazione Pallet e Accessori', link: '/movimentazione-pallet-e-accessori',   description: 'Conveyors, transfer, rulliere' },
        ]
      },
    ] as MegaPanelGroup[],
  },

  // ── 2. I TUOI PRODOTTI ─────────────────────────────────────────────────────
  {
    id: 2,
    link: '/prodotti',
    title: 'I tuoi prodotti',
    dropdown: false,
    ima_panel: true,
    ima_panel_cta: {
      label: 'Vedi tutti i settori',
      link: '/prodotti',
    },
    ima_groups: [
      {
        label: 'Alimentare & Beverage',
        icon: 'bi-egg-fried',
        items: [
          { title: 'Alimentare',        link: '/macchine-confezionatrici-per-alimenti',           description: 'Pasta, riso, farine, legumi, zucchero' },
          { title: 'Cereali e Sementi', link: '/macchine-confezionatrici-per-cereali-e-sementi',  description: 'Grano, mais, orzo, sementi agrarie' },
        ]
      },
      {
        label: 'Animali & Natura',
        icon: 'bi-tree',
        items: [
          { title: 'Mangime',           link: '/macchine-confezionatrici-per-mangime',            description: 'Pellet, farine, mix zootecnici' },
          { title: 'Pet Food',          link: '/macchine-confezionatrici-per-pet-food',           description: 'Crocchette, snack, umido' },
          { title: 'Lettiera per Gatti',link: '/macchine-confezionatrici-per-lettiera-per-gatti', description: 'Bentonite, silice, biofibra' },
          { title: 'Silvicoltura',      link: '/macchine-confezionatrici-per-silvicoltura',       description: 'Pellet di legno, cippato, torba' },
        ]
      },
      {
        label: 'Industria & Chimica',
        icon: 'bi-gear',
        items: [
          { title: 'Chimica',           link: '/macchine-confezionatrici-per-prodotti-chimici',   description: 'Fertilizzanti, sali, resine, polimeri' },
          { title: 'Combustibili',      link: '/macchine-confezionatrici-per-combustibili',       description: 'Pellet energetici, carbone, biomasse' },
          { title: 'Minerali e Inerti', link: '/macchine-confezionatrici-per-minerali',           description: 'Sabbia, calce, cemento, ghiaia' },
        ]
      },
    ] as MegaPanelGroup[],
  },

  // ── 3. STILI DI CONFEZIONE ─────────────────────────────────────────────────
  {
    id: 3,
    link: '/',
    title: 'Stili di Confezione',
    dropdown: false,
    ima_panel: true,
    ima_single_col: true,      // flag: pannello a colonna singola (nessun sotto-pannello)
    ima_panel_cta: undefined,
    ima_groups: [
      {
        label: 'Formati sacchetto',
        icon: 'bi-bag-check',
        items: [
          { title: 'Fondo Quadro',      link: '/stili/fondo-quadro',    description: 'Stabilità massima sullo scaffale' },
          { title: 'Daypack',           link: '/stili/daypack',          description: 'Ergonomia e praticità di uso' },
          { title: 'Confezione Cuscino',link: '/stili/cuscino',          description: 'Soluzione economica e versatile' },
          { title: 'Con Soffietto',     link: '/stili/soffietto',        description: 'Volume espanso, base stabile' },
          { title: 'Stand-up Pouch',    link: '/stili/stand-up-pouch',   description: 'Design premium, richiudibile' },
          { title: 'Flow Pack / Orizzontale', link: '/stili/flow-pack',  description: 'Velocità e continuità produttiva' },
        ]
      },
    ] as MegaPanelGroup[],
  },

  // ── 4. IMPIANTI COMPLETI ────────────────────────────────────────────────────
  {
    id: 4,
    link: '/impianti-completi-di-confezionamento',
    title: 'Impianti completi',
    dropdown: false,
  },

  // ── 5. CHI SIAMO ───────────────────────────────────────────────────────────
  {
    id: 5,
    link: '/azienda',
    title: 'Chi siamo',
    dropdown: false,
  },

];

export default menu_data;
