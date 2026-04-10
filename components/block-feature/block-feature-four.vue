<!-- Stili in: mftecno.css (globale) -->
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
      <br />
      <br />
      <br />
      <!-- Cards row — 4 colonne su desktop -->
      <div class="row g-4">
        <div v-for="sol in solutions" :key="sol.id" class="col-xl-3 col-lg-6 col-md-6 col-12">
          <nuxt-link :to="localePath(sol.link)" class="solution-card">

            <!-- Full-bleed image -->
            <img :src="sol.image" :alt="sol.title" class="card-bg-img" />

            <!-- Bottom overlay with title + arrow -->
            <div class="card-footer-overlay">
              <div class="card-footer-inner">
                <div class="card-title-wrap">
                  <h3 class="card-sol-title">{{ sol.title }}</h3>
                  <div class="card-divider"></div>
                </div>
                <div class="card-arrow-btn">
                  <i class="bi bi-arrow-up-right"></i>
                </div>
              </div>
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
  { id: 1, title: "Confezionatrici",           category: "Confezionamento", image: "/images/home/confezionatrici.jpg", link: "/soluzioni/confezionatrici" },
  { id: 4, title: "Scatolatrici",              category: "Confezionamento", image: "/images/home/scatolatrici.jpg",    link: "/soluzioni/scatolatrici" },
  { id: 2, title: "Pallettizzatori",           category: "Fine Linea",       image: "/images/home/pallettizzatori.jpg",  link: "/soluzioni/palettizzatori" },
  { id: 3, title: "Avvolgitori",               category: "Fine Linea",       image: "/images/home/avvolgitori.jpg",     link: "/soluzioni/avvolgitori" },
]
</script>
