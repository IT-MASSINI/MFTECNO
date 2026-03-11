<template>
  <section class="cta-section py-section text-center">
    <div class="container">
      <h2 class="section-title">Vuoi parlare con noi?<br>Contatta il nostro team</h2>
      <p class="section-body cta-subtitle mt-3 mb-5">
        Contatta il nostro team per ricevere risposte rapide e utili
      </p>
      <br/>
      <div class="d-flex justify-content-center gap-3 flex-wrap btn-group-wrap">
        <nuxt-link :to="localePath('/contatti')" class="scopri-btn">
          Scopri di più
        </nuxt-link>
        <nuxt-link :to="localePath('/contatti')" class="btn call-btn">
          Richiedi una call
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
/* CTA Section — fancy-banner-three */
.cta-section {
  background: #ffffff;
}

.cta-subtitle {
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}
</style>
