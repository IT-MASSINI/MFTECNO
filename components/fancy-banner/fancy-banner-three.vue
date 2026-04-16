<template>
  <section class="cta-section py-section text-center">
    <div class="container">
      <h2 class="section-title">Vuoi parlare con noi?<br>Contatta il nostro team</h2>
      <p class="section-intro cta-subtitle mt-3 mb-5">
        Contatta il nostro team per ricevere risposte rapide e utili
      </p>
      <br/>
      <div class="d-flex justify-content-center gap-5 flex-wrap btn-group-wrap">
        <nuxt-link :to="localePath('/preventivo')" class="scopri-btn">
          Richiedi un Preventivo
        </nuxt-link>
        <nuxt-link :to="localePath('/contatti')" class="btn call-btn solutions-vedi-tutti mt-2">
          Contattaci
          <span class="btn-arrow solutions-arrow">
            <img src="/images/icon/icon_02.svg" class="call-icon-svg" alt="" />
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
  background: #f5f5f5;
}

.cta-subtitle {
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}
</style>
