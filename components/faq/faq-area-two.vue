<template>
  <section class="clients-section">
    <div class="container">

      <!-- Titolo con numero in evidenza -->
      <p class="clients-heading">
        <nuxt-link :to="localePath('/clienti')" class="clients-heading-link">
          Scopri le <span class="clients-count">12.000+</span>
        </nuxt-link>
        aziende con cui collaboriamo:
      </p>

      <!-- Logo strip -->
      <div class="logos-strip">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="logo-item"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="logo-img"
          />
        </div>
      </div>

    </div>
    <br/>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const logos = [
  { src: '/images/clients/befood.svg',   alt: 'BeFood Pet Nutrition' },
  { src: '/images/clients/xion.svg',     alt: 'XION Sea Salt' },
  { src: '/images/clients/durrah.svg',   alt: 'Durrah Advanced Development Co.' },
  { src: '/images/clients/proa.svg',     alt: 'Proa' },
  { src: '/images/clients/tecno-supplier.svg', alt: 'Tecno Supplier' },
  { src: '/images/clients/unicol.svg',   alt: 'Unicol Adhesive Technologies' },
]
</script>

<style scoped>
/* ── Sezione ────────────────────────────────────── */
.clients-section {
  padding: 72px 0 64px;
  background: #ffffff;
}

/* ── Titolo ─────────────────────────────────────── */
.clients-heading {
  font-size: clamp(1.2rem, 2.2vw, 1.55rem);
  font-weight: 700;
  color: #1C1C1A;
  margin-bottom: 52px;
  line-height: 1.4;
}

.clients-heading-link {
  text-decoration: underline;
  text-underline-offset: 3px;
  color: #1C1C1A;
  transition: color 0.2s;
}
.clients-heading-link:hover { color: #28477D; }

.clients-count {
  /* il numero rimane inline nel link — nessuno stile extra,
     il grassetto del parent è sufficiente */
}

/* ── Logo strip ─────────────────────────────────── */
.logos-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 24px;
}

.logo-item {
  flex: 1 1 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 180px;
}

.logo-img {
  max-height: 48px;
  max-width: 100%;
  object-fit: contain;
  /* grayscale di default, torna a colori all'hover */
  filter: grayscale(1) opacity(0.65);
  transition: filter 0.3s ease;
}
.logo-item:hover .logo-img {
  filter: grayscale(0) opacity(1);
}

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 767.98px) {
  .clients-section { padding: 48px 0; }
  .clients-heading  { font-size: 1.1rem; margin-bottom: 36px; }
  .logos-strip      { gap: 24px 16px; }
  .logo-item        { flex: 1 1 90px; max-width: 140px; }
  .logo-img         { max-height: 36px; }
}
</style>
