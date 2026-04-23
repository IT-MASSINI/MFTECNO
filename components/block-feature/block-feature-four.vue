<!-- Stili in: mftecno.css (globale) + override locali per freccia stile news -->
<template>
  <section class="solutions-section py-section bg-light-grey">
    <div class="container">

      <!-- Header row -->
      <div class="row align-items-start mb-5">
        <div class="col-lg-5">
          <h2 class="section-title">Le nostre</h2>
          <h2 class="section-title">Soluzioni</h2>
        </div>
        <div class="col-lg-7 d-flex flex-column align-items-end justify-content-start pt-2">
          <p class="section-body mt-3 text-lg-end">Scopri la gamma di macchinari MF TECNO progettati per ogni fase della tua linea di packaging. Possiamo personalizzare ogni tipo di richiesta in base alle tue esigenze.</p>
          <nuxt-link :to="localePath('/macchinari')" class="btn call-btn solutions-vedi-tutti">
            Vedi Tutti
              <span class="btn-arrow solutions-arrow">
                <img src="/images/icon/icon_02.svg" class="call-icon-svg" alt="" />
              </span>
          </nuxt-link>
        </div>
      </div>
      <br/>
      <!-- Cards row — 2x2 su desktop, 1 colonna su mobile -->
      <div class="row g-4">
        <div v-for="sol in solutions" :key="sol.id" class="col-lg-6 col-12">
          <nuxt-link :to="localePath(sol.link)" class="solution-card">

            <!-- Full-bleed image -->
            <img :src="sol.image" :alt="sol.title" class="card-bg-img" />

            <!-- Dark overlay su tutta la card -->
            <div class="card-overlay"></div>

            <!-- Top row: titolo a sinistra + freccia a destra -->
            <div class="card-top-row">
              <h3 class="card-sol-title">{{ sol.title }}</h3>
              <div class="card-arrow-btn">
                <i class="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <!-- Bottom row: descrizione -->
            <div class="card-bottom-row">
              <p class="card-sol-desc">{{ sol.description }}</p>
            </div>

          </nuxt-link>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const solutions = [
  {
    id: 1,
    title: "Confezionatrici",
    category: "Confezionamento",
    image: "/images/home/confezionatrici.jpg",
    link: "/soluzioni/confezionatrici",
    description: "Soluzioni complete per il confezionamento primario e secondario, progettate per garantire efficienza, precisione e flessibilità su ogni linea produttiva."
  },
  {
    id: 4,
    title: "Scatolatrici",
    category: "Confezionamento",
    image: "/images/home/scatolatrici.jpg",
    link: "/soluzioni/scatolatrici",
    description: "Macchine scatolatrici automatiche per la formatura, il riempimento e la chiusura di scatole americane e wrap-around, su misura per ogni esigenza."
  },
  {
    id: 2,
    title: "Pallettizzatori",
    category: "Fine Linea",
    image: "/images/home/pallettizzatori.jpg",
    link: "/soluzioni/palettizzatori",
    description: "Sistemi di pallettizzazione cartesiani e antropomorfi per ottimizzare il fine linea, riducendo tempi di ciclo e garantendo massima affidabilità."
  },
  {
    id: 3,
    title: "Avvolgitori",
    category: "Fine Linea",
    image: "/images/home/avvolgitori.jpg",
    link: "/soluzioni/avvolgitori",
    description: "Avvolgitori a braccio rotante e tavola rotante per la stabilizzazione del pallet, con soluzioni scalabili per ogni volume di produzione."
  },
]
</script>

<style scoped>
/* ── Override stile freccia: allineato a blog-area-one.vue ──
   Di default .card-arrow-btn (globale) ha bordo bianco su sfondo trasparente
   e icona bianca. Qui lo sovrascriviamo per ottenere lo stesso look delle
   card "news": sfondo bianco, icona navy, hover arancione pieno.         */
.solution-card .card-arrow-btn {
  background: rgba(255, 255, 255, 0.92) !important;
  border-color: transparent !important;
  color: var(--mft-navy) !important;
}

.solution-card:hover .card-arrow-btn {
  background: #48cbff !important;
  border-color: #48cbff !important;
  color: #ffffff !important;
}
</style>
