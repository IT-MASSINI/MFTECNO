<template>
  <div class="iapf-page">

    <!-- ── Hero testuale ── -->
    <section class="iapf-hero">
      <div class="container">
        <br/>
        <br/>
        <h1 class="iapf-hero-title">Insaccatrici Automatiche per piccoli formati</h1>
        <p class="iapf-hero-desc">
          Le insaccatrici automatiche per piccoli formati MF TECNO sono progettate per garantire efficienza e produttività.
          Offrono alta affidabilità, semplicità d'uso e versatilità nei cambi formato. Gestiscono sacchi preformati di vari
          materiali e trattano efficacemente prodotti difficili. Raggiungono fino a 3.000 sacchi/ora, integrando tecnologie
          meccaniche ed elettroniche evolute.
        </p>
      </div>
    </section>

    <!-- ── Catalogo prodotti ── -->
    <shop-piccoli-formati />

    <!-- ── Banner "Il Partner giusto" ── -->
    <div class="iapf-feedback-wrap">
      <feedback-piccoli-formati />
    </div>

  </div>
</template>

<script setup lang="ts">
import ShopPiccoliFormati from '../components/shop/shop-piccoli-formati.vue';
import FeedbackPiccoliFormati from '../components/feedback/feedback-piccoli-formati.vue';

// ── Usa il layout "catalog": header sempre bianco, padding-top gestito ──
definePageMeta({ layout: 'catalog' });

useSeoMeta({
  title: "Insaccatrici Automatiche Piccoli Formati | MF TECNO",
  description:
    "Insaccatrici automatiche per piccoli formati: soluzioni MF TECNO per sacchi Doypack, fondo quadro e Stand-up Pouch. Velocità fino a 50 BPM.",
});
</script>

<style scoped>
/* ── Sfondo unificato sull'intera pagina ── */
.iapf-page {
  background-color: #f5f5f5;
}

/* ── Hero: solo spazio interno, NO padding-top (ci pensa catalog.vue) ── */
.iapf-hero {
  padding: 56px 0 56px;
}

.iapf-hero-title {
  font-size: clamp(1.4rem, 1rem + 2.5vw, 2.75rem);
  font-weight: 800;
  color: #28477D;
  line-height: 1.15;
  margin-bottom: 20px;
  font-family: "Satoshi", sans-serif;
}

.iapf-hero-desc {
  font-size: clamp(0.85rem, 0.7rem + 0.75vw, 1.1rem);
  color: #555555;
  line-height: 1.75;
  max-width: 900px;
  font-family: "Satoshi", sans-serif;
  margin: 0;
}

.iapf-feedback-wrap {
  padding: 0 24px 80px;
}

@media (max-width: 767.98px) {
  .iapf-hero           { padding: 36px 0 36px; }
  .iapf-feedback-wrap  { padding: 0 12px 56px; }
}
</style>
