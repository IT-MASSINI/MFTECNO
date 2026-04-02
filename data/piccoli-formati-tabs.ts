// ============================================================
//  MF TECNO — Contenuti tab insaccatrici piccoli formati
// ============================================================

export interface ITabDescrizioneBlock {
  text: string
  img?: string
  imgPosition?: 'left' | 'right'
}

export interface ITabChiusura {
  title: string
  items: string[]
  notes?: string[]
  img?: string
}

export interface ITabDescrizione {
  intro: string
  highlights?: string[]
  blocks: ITabDescrizioneBlock[]
  chiusura?: ITabChiusura
}

export interface ITabCaratteristicheGroup {
  title: string
  items: string[]
}

export interface ITabSpecificaItem {
  label: string
  value: string
}

export interface ITabSpecificaGroup {
  title: string
  items: ITabSpecificaItem[]
  note?: string
}

export interface ITabCaratteristiche {
  groups: ITabCaratteristicheGroup[]
  opzioni?: {
    title: string
    items: string[]
  }
  specifiche?: ITabSpecificaGroup[]
}

export interface ITabStileConfezione {
  img: string
  title: string
  description: string
  link?: string
  featured?: boolean
}

export interface ITabProdotto {
  icon: string
  title: string
  description: string
  link?: string
  featured?: boolean
}

export interface ITabFaq {
  q: string
  a: string
}

export interface ITabSection {
  descrizione: ITabDescrizione
  caratteristiche: ITabCaratteristiche
  stiliConfezione: ITabStileConfezione[]
  prodotti: ITabProdotto[]
  faq: ITabFaq[]
}

export interface IMachineTabContent {
  slug: string
  tabs: ITabSection
}

// ============================================================

const piccoli_formati_tabs: IMachineTabContent[] = [
  {
    slug: "sbs-2000-sacchi-doppio-fondo-quadro",
    tabs: {
      descrizione: {
        intro: "La insaccatrice per sacchi a doppio fondo quadro MF Tecno, interamente realizzata in acciaio inox, raggiunge un'elevata capacità produttiva. **Fino a 2000 sacchi/ora** per confezioni che vanno **dai 500 grammi ai 5 kg.**\n\nIl rapido cambio formato garantisce l'ottimizzazione della produttività e una riduzione complessiva dei tempi di fermo. Il sistema modulare e il **movimento a passo**, tramite motori brushless, assicurano poi la stabilità durante l'intero processo.\n\nLa presenza di sistemi vibranti e controllo confezioni, successiva alla stazione di riempimento, garantiscono uniformità e stabilità del prodotto all'interno della confezione.",
        blocks: [
          {
            text: "È una soluzione altamente customizzabile con numerosi optional.\n\n**Dotata di pannello operatore touch screen**, presenta un sistema di autodiagnosi anomalie.\n\nCompatibile sia con bilance multitesta sia con dosatori a coclea verticale.",
            img: "/images/small-bags/img_03.jpg",
            imgPosition: "left",
          },
        ],
        chiusura: {
          title: "Vi sono differenti sistemi di chiusura disponibili:",
          items: [
            "Chiusura doppio fondo quadro con colla",
            "Saldatura con sacco con liner interno",
            "Chiusura con colla termosensibile, riattivabili a caldo",
          ],
          notes: [
            "L'intero sistema viene progettato, assemblato e testato presso la nostra sede produttiva, in Italia.",
            "Può essere facilmente integrata con sistemi di packaging secondario, creando impianti completi di packaging chiavi in mano.",
          ],
          img: "/images/small-bags/img_04.jpg",
        },
      },

      caratteristiche: {
        groups: [
          {
            title: "Efficiente e affidabile",
            items: [
              "Può essere equipaggiata con un massimo di due bocchette di riempimento doppie e una pesatrice a rete con alimentatore a doppia vite per una produzione rapida",
              "Elevata precisione: fino a ±50 g a 2 sigma per sacchi da 25 kg",
              "Struttura robusta ed ergonomica",
              "Prodotta nel nostro stabilimento BTEC certificato ISO 9001",
            ],
          },
          {
            title: "Pulita e sicura",
            items: [
              "Il sistema di rilevamento previene le fuoriuscite garantendo il corretto posizionamento dei sacchi",
              "L'efficiente sistema di aspirazione delle polveri riduce al minimo il consumo energetico, la perdita di prodotto e le emissioni di polvere",
              "La sedimentazione dei sacchi distribuisce uniformemente le polveri ed elimina l'aria in eccesso",
            ],
          },
        ],
        opzioni: {
          title: "Opzioni",
          items: [
            "Può essere equipaggiata con un massimo di due bocchette di riempimento doppie e una pesatrice a rete con alimentatore a doppia vite per una produzione rapida",
          ],
        },

        specifiche: [
          {
            title: "Footprint tipico",
            items: [
              { label: "Lunghezza",  value: "4230 mm (166\")" },
              { label: "Larghezza",  value: "6440 mm (253\")" },
              { label: "Altezza",    value: "5240 mm (206\")" },
            ],
          },
          {
            title: "Dimensioni sacco",
            items: [
              { label: "Larghezza",   value: "320 – 700 mm (12\" – 27\")" },
              { label: "Lunghezza",   value: "600 – 1100 mm (23\" – 43\")" },
              { label: "Peso",        value: "10 – 50 kg (22 – 110 lb)" },
            ],
            note: "* A seconda del modello, scaricare la brochure per ulteriori dettagli",
          },
          {
            title: "Temperatura ambiente",
            items: [
              { label: "Range", value: "5 °C – 50 °C (40 °F – 122 °F)" },
            ],
          },
        ],
      },

      stiliConfezione: [
        {
          img: "/images/small-bags/pack-01.png",
          title: "Confezione a fondo quadro",
          description: "Base piatta per elevata stabilità e pallettizzazione efficiente",
          featured: false,
        },
        {
          img: "/images/small-bags/pack-02.png",
          title: "Confezione con soffietto",
          description: "Base piatta per elevata stabilità e pallettizzazione efficiente",
          featured: true,
        },
        {
          img: "/images/small-bags/pack-01.png",
          title: "Confezione a doppio fondo quadro",
          description: "Base piatta per elevata stabilità e pallettizzazione efficiente",
          featured: false,
        },
        {
          img: "/images/small-bags/pack-01.png",
          title: "Confezione a fondo quadro",
          description: "Base piatta per elevata stabilità e pallettizzazione efficiente",
          featured: false,
        },
      ],

      prodotti: [
        { icon: "/images/small-bags/sugar-icon.png",   title: "Zucchero", description: "Gestione precisa di prodotti cristallini",            featured: false },
        { icon: "/images/small-bags/petfood-icon.png", title: "Pet Food", description: "Soluzioni per prodotti granulari e crocchette",      featured: true  },
        { icon: "/images/small-bags/sugar-icon.png",   title: "Semi",     description: "Soluzioni per semi e prodotti granulari",            featured: false },
        { icon: "/images/small-bags/sugar-icon.png",   title: "Zucchero", description: "Gestione precisa di prodotti cristallini",                  featured: false },
        { icon: "/images/small-bags/sugar-icon.png",   title: "Zucchero", description: "Gestione precisa di prodotti cristallini",          featured: false },
        { icon: "/images/small-bags/sugar-icon.png",   title: "Zucchero", description: "Gestione precisa di prodotti cristallini",               featured: false },
      ],

      faq: [
        {
          q: "Quali materiali possono essere confezionati?",
          a: "La macchina è adatta per granuli, polveri fini, prodotti alimentari come zucchero, farina e sale, oltre a prodotti chimici e industriali compatibili.",
        },
        {
          q: "È possibile integrare la macchina con sistemi di pesatura automatica?",
          a: "Sì, la macchina è predisposta per l'integrazione con sistemi di pesatura multi-testa e dosatori volumetrici MF TECNO.",
        },
        {
          q: "Qual è il tempo di cambio formato?",
          a: "Il cambio formato è progettato per essere rapido e intuitivo, richiedendo mediamente 15-30 minuti senza necessità di attrezzature speciali.",
        },
        {
          q: "La macchina è disponibile in versione ATEX?",
          a: "Su richiesta è possibile configurare versioni speciali per ambienti con atmosfere potenzialmente esplosive (direttiva ATEX).",
        },
      ],
    },
  },
]

export default piccoli_formati_tabs
