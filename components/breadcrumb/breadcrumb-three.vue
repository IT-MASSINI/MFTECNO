<template>
  <div
    class="bc3-banner position-relative"
    :style="`background-image: url(${bg_img})`"
  >
    <!-- overlay scuro -->
    <div class="bc3-overlay"></div>

    <div class="container position-relative bc3-inner">
      <div class="row align-items-center">

        <!-- Colonna sx: titolo grande con a capo -->
        <div class="col-lg-6 col-md-7">
          <h1 class="bc3-title">{{ title }}</h1>
        </div>

        <!-- Colonna dx: sottotitolo -->
        <div class="col-lg-5 col-md-5 ms-auto">
          <p class="bc3-subtitle">{{ subtitle }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    bg_img?: string;
    shape: string;
    page: string;
    cls?: string;
    style_2?: boolean;
  }>(),
  {
    title: "",
    subtitle: "",
    bg_img: "/images/media/img_26.jpg",
    shape: "/images/shape/shape_33.svg",
    page: "",
    cls: "",
    style_2: false,
  }
);
</script>

<style scoped>
/* ── Banner wrapper ── */
.bc3-banner {
  position: relative;
  min-height: 480px;        /* più alto per dare spazio al menu */
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: #1a1a1a;
}

/* Overlay scuro */
.bc3-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.58);
  z-index: 1;
}

/* Contenuto sopra l'overlay */
.bc3-inner {
  position: relative;
  z-index: 2;
  padding-top: 140px;       /* spazio sufficiente sotto il menu fisso */
  padding-bottom: 80px;
}

/* Titolo — grande, bianco, bold, a capo con \n */
.bc3-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.4;
  margin: 0;
  letter-spacing: -0.01em;
  white-space: pre-line;    /* interpreta \n come vero a capo */
}

/* Sottotitolo — bianco tenue */
.bc3-subtitle {
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  color: rgba(255, 255, 255, 0.80);
  line-height: 1.75;
  margin: 0;
  font-weight: 400;
}

@media (max-width: 767.98px) {
  .bc3-banner   { min-height: 360px; }
  .bc3-inner    { padding-top: 120px; padding-bottom: 60px; }
  .bc3-subtitle { margin-top: 24px; }
}
</style>
