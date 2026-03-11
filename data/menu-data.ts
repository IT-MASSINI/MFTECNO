import type { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: '/',
    title: 'Macchinari',
    dropdown: true,
    dropdown_menus: [
      {
        title: "Insaccatrici a Bocca Aperta",
        link: "",
        sub_menus: [
          { title: "Piccoli Formati",        link: "/insaccatrici-automatiche-piccoli-formati" },
          { title: "Medi e Grandi Formati",  link: "/insaccatrici-automatiche-medi-grandi-formati" },
          { title: "Semiautomatiche",        link: "/insaccatrici-semiautomatiche-2" },
        ]
      },
      { title: "Formatrici Tubolari FFS",          link: "/ffs-formatrice-tubolare" },
      {
        title: "Confezionatrici Verticali VFFS",
        link: "",
        sub_menus: [
          { title: "Piccoli Formati",       link: "/confezionatrici-piccoli-formati" },
          { title: "Medi e Grandi Formati", link: "/confezionatrici-medi-grandi-formati" },
        ]
      },
      { title: "Flow Pack",                         link: "/flow-pack" },
      { title: "Pallettizzatori",                   link: "/pallettizzatori" },
      { title: "Avvolgitori Pallet",                link: "/avvolgitori-pallet" },
      { title: "Cartonatrici",                      link: "/macchine-cartonatrici" },
      { title: "Fardellatrici",                     link: "/fardellatrici" },
      { title: "Big-bag",                           link: "/big-bag" },
      { title: "Crico e Trasporto prodotto",        link: "/carico-e-trasporto-prodotto" },
      { title: "Accessori e Movimentazione Pallet", link: "/movimentazione-pallet-e-accessori" },
      { title: "Vedi tutte le macchine →",          link: "/macchinari" },
    ]
  },
  {
    id: 2,
    link: '/',
    title: 'I tuoi prodotti',
    dropdown: true,
    dropdown_menus: [
      { title: "Alimentare",          link: "/macchine-confezionatrici-per-alimenti" },
      { title: "Cereali e Sementi",   link: "/macchine-confezionatrici-per-cereali-e-sementi" },
      { title: "Chimica",             link: "/macchine-confezionatrici-per-prodotti-chimici" },
      { title: "Combustibili",        link: "/macchine-confezionatrici-per-combustibili" },
      { title: "Mangime",             link: "/macchine-confezionatrici-per-mangime" },
      { title: "Pet Food",            link: "/macchine-confezionatrici-per-pet-food" },
      { title: "Silvicoltura",        link: "/macchine-confezionatrici-per-silvicoltura" },
      { title: "Minerali e Inerti",   link: "/macchine-confezionatrici-per-minerali" },
      { title: "Lettiera per gatti",  link: "/macchine-confezionatrici-per-lettiera-per-gatti" },
      { title: "Vedi tutti i settori →", link: "/prodotti" },
    ]
  },
  {
    id: 3,
    link: '/',
    title: "Stili di Confezione",
    dropdown: true,
    dropdown_menus: [
      { title: "Confezione a fondo quadro", link: "/stili/fondo-quadro" },
      { title: "Daypack",                   link: "/stili/daypack" },
      { title: "Confezione a cuscino",      link: "/stili/cuscino" },
      { title: "Confezione con soffietto",  link: "/stili/soffietto" },
      { title: "Stand-up Pouch",            link: "/stili/stand-up-pouch" },
      { title: "Flow Pack / Orizzontale",   link: "/stili/flow-pack" },
    ],
  },
  {
    id: 4,
    link: '/impianti-completi-di-confezionamento',
    title: "Impianti completi",
    dropdown: false,
  },
  {
    id: 5,
    link: '/azienda',
    title: "Chi siamo",
    dropdown: false,
  }
];

export default menu_data;
