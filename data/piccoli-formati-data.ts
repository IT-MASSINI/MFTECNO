// ============================================================
//  MF TECNO — Dati insaccatrici automatiche piccoli formati
//  Fonte: https://www.mftecno.com/it/insaccatrici-automatiche-piccoli-formati/
// ============================================================

export interface IProdottoGruppo {
  gruppo: string;
  voci: string[];
}

export interface IMachine {
  id: number;
  slug: string;
  img: string;
  gallery?: string[];
  serie: string;
  title: string;
  subtitle: string;
  type: string;
  speed: string;
  speedLabel: string;
  description: string;
  product: string;
  features: string[];
  categoria: string;
  prodotti: IProdottoGruppo[];
  tipoInsacco: string[];
  video: string[];
  dimension: string[];
  bags: string;
  bagMaterial: string;
}

const piccoli_formati_data: IMachine[] = [
  {
    id: 1,
    slug: "automatica-mf-pouch-3000-flexi",
    img: "/images/small-bags/pouch3000Flexi.png",
    serie: "POUCH",
    title: "MF POUCH 3000 FLEXI",
    subtitle: "Confezionatrice automatica orizzontale a moto intermittente",
    type: "",
    speed: "50 BPM",
    speedLabel: "di velocità",
    description:
      "Confezionatrice automatica orizzontale a moto intermittente per sacchi preformati a bocca aperta (Doypack, totani, fondo quadro) o da bobina di tipo Doypack. Ideale per alte produzioni.",
    product: "",
    features: [
      "Sacchi preformati o da bobina Doypack",
      "Doypack, totani, fondo quadro",
      "Alta produzione fino a 50 sacchi/min",
      "Cambio formato rapido",
    ],
    categoria: "Pouch",
    prodotti: [
      {
        gruppo: "Alimentare",
        voci: ["Semilavorati per Pasticceria", "Frutta Secca", "Snack"]
      },
      {
        gruppo: "Mangimi",
        voci: ["Pellet", "Farine", "Mix Zootecnici"]
      },
      {
        gruppo: "Pet Food",
        voci: ["Pet Food"]
      }
    ],
    tipoInsacco: ["Doypack", "Fondo quadro", "Totani"],
    video: ["https://www.youtube.com/embed/e9qDy2YpRLU"
           ],
    dimension: [
      "Min. 90 x 190mm",
      "Max. 235 x 430 mm",
    ],
    bags: "a doppio fondo quadro, a fondo quadro, a soffietto",
    bagMaterial: "carta, carta polietinata, carta/PE",
  },
  {
    id: 2,
    slug: "automatica-mf-pouch-3000",
    img: "/images/small-bags/pouch3000.png",
    serie: "POUCH",
    title: "MF POUCH 3000",
    subtitle: "Insaccatrice automatica a moto intermittente",
    type: "",
    speed: "50 BPM",
    speedLabel: "di velocità",
    description:
      "Insaccatrice automatica a moto intermittente per sacchi a bocca aperta di tipo Stand-up Pouch (Doypack) o a fondo quadro. Ideale per medie e alte produzioni.",
    product: "",
    features: [
      "Stand-up Pouch (Doypack)",
      "Sacchi a fondo quadro",
      "Medie e alte produzioni",
      "Tecnologia meccanica ed elettronica evoluta",
    ],
    categoria: "Pouch",
prodotti: [
      {
        gruppo: "Alimentare",
        voci: ["Semilavorati per Pasticceria", "Frutta Secca", "Snack"]
      },
      {
        gruppo: "Mangimi",
        voci: ["Pellet", "Farine", "Mix Zootecnici"]
      },
      {
        gruppo: "Pet Food",
        voci: ["Pet Food"]
      }
    ],
    tipoInsacco: ["Doypack", "Fondo quadro"],
    video: ["https://www.youtube.com/embed/y8GxIrwCjyA",
            "https://www.youtube.com/embed/ttIXssNJJg8",
            "https://www.youtube.com/embed/n9snveqk9Gg"
           ],
    dimension: [
      "Min. 90 x 190mm",
      "Max. 235 x 430 mm",
    ],
    bags: "a doppio fondo quadro, a fondo quadro, a soffietto",
    bagMaterial: "carta, carta polietinata, carta/PE",
  },
  {
    id: 3,
    slug: "automatica-mf-pouch-1000",
    img: "/images/small-bags/pouch1000.png",
    serie: "POUCH",
    title: "MF POUCH 1000",
    subtitle: "Insaccatrice automatica a moto intermittente",
    type: "",
    speed: "20 BPM",
    speedLabel: "di velocità",
    description:
      "Insaccatrice automatica a moto intermittente per sacchi a bocca aperta di tipo Stand-up Pouch (Doypack) o a fondo quadro. Ideale per medie produzioni e piccoli formati.",
    product: "",
    features: [
      "Stand-up Pouch (Doypack)",
      "Sacchi a fondo quadro",
      "Medie produzioni e piccoli formati",
      "Semplicità d'uso e versatilità",
    ],
    categoria: "Pouch",
    prodotti: [
      {
        gruppo: "Alimentare",
        voci: ["Semilavorati per Pasticceria", "Frutta Secca", "Snack"]
      },
      {
        gruppo: "Mangimi",
        voci: ["Pellet", "Farine", "Mix Zootecnici"]
      },
      {
        gruppo: "Pet Food",
        voci: ["Pet Food"]
      }
    ],    
    tipoInsacco: ["Doypack", "Fondo quadro"],
    video: ["https://www.youtube.com/embed/blpSWSjOX7k",
            "https://www.youtube.com/embed/OvarTSOQcSc"
           ],
    dimension: [
      "Min. 90 x 190mm",
      "Max. 235 x 430 mm",
    ],
    bags: "a doppio fondo quadro, a fondo quadro, a soffietto",
    bagMaterial: "carta, carta polietinata, carta/PE",
  },
  {
    id: 4,
    slug: "sbs-2000-sacchi-doppio-fondo-quadro",
    img: "/images/small-bags/sbs2000.png",
      gallery: [
        "/images/small-bags/sbs2000.png",
        "/images/small-bags/sbs2000.png",
        "/images/small-bags/sbs2000.png",
        "/images/small-bags/pouch1000.png",
  ],
    serie: "STEP BY STEP",
    title: "SBS 2000",
    subtitle: "Insaccatrice per sacchi a doppio fondo quadro",
    type: "INSACCATRICE A BOCCA APERTA",
    speed: "35 BPM",
    speedLabel: "di velocità",
    description:
      "Insaccatrice a moto intermittente per sacchi a doppio fondo quadro. Progettata per piccoli formati e alte produzioni. Ideata per zucchero, farina e sale.",
    product: "La insaccatrice **MF TECNO SBS 2000** è una soluzione ideata per il confezionamento di **sacchi di carta a doppio fondo quandrato soffiettati per piccoli formati**.\n\nE' indicata per prodotti **granulari e polverosi come farina, zucchero e sale**.",
    features: [
      "Fino a 35 BPM di velocità",
      "Alte produzioni",
      "Prodotti granulari e polverosi coem farina, zucchero e sale",
    ],
    categoria: "Step by Step",
    prodotti: [
      {
        gruppo: "Alimentare",
        voci: ["Farina", "Sale", "Zucchero"]
      }
    ],
    tipoInsacco: ["Doppio fondo quadro"],
    video: ["https://www.youtube.com/embed/n6ZLELNaeHk"],
    dimension: [
      "Min. 90 x 190mm",
      "Max. 235 x 430 mm",
    ],
    bags: "a doppio fondo quadro, a fondo quadro, a soffietto",
    bagMaterial: "carta, carta polietinata, carta/PE",
  },
];

export default piccoli_formati_data;
