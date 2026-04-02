<template>
  <section class="cta-section py-section text-center">

    <!-- Sfondo decorativo (stessa tecnica di text-feature-three) -->
    <div class="section-bg">
      <img src="/images/home/sfondo-m.jpg" alt="" aria-hidden="true" class="bg-img" />
    </div>

    <div class="container position-relative">
      <h2 class="section-title">Vuoi parlare con noi?<br>Contatta il nostro team</h2>
      <p class="section-body cta-subtitle mt-3 mb-5">
        Contatta il nostro team per ricevere risposte rapide e utili
      </p>
      <br/>
      <div class="d-flex justify-content-center gap-3 flex-wrap btn-group-wrap">
        <nuxt-link :to="localePath('/contatti')" class="preventivo-btn">
          Richiedi un Preventivo
        </nuxt-link>
        <nuxt-link :to="localePath('/contatti')" class="btn call-btn">
          Contattaci
          <span class="btn-arrow">
            <i class="bi bi-arrow-right"></i>
          </span>
        </nuxt-link>
      </div>
    </div>
    <br/>
    <br/>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.cta-section {
  position: relative;        /* ← necessario per ancorare .section-bg */
  overflow: hidden;          /* ← taglia l'immagine ai bordi della sezione */
  background: var(--mft-bg-blue); /* stesso sfondo base di text-feature-three */
}

.cta-subtitle {
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}
</style>
