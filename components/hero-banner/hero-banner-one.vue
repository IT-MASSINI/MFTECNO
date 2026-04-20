<!-- Stili in: mftecno.css (globale) -->
<template>
  <div class="hero-banner-one position-relative overflow-hidden">

    <!-- Slideshow immagini di sfondo -->
    <div class="hero-bg-wrap">
      <img
        v-for="(img, index) in images"
        :key="img"
        :src="`/images/home/${img}`"
        alt="MF Tecno packaging line"
        class="hero-bg-img"
        :class="{ 'hero-bg-img--active': currentSlide === index }"
        fetchpriority="high"
        loading="eager"
      />

      <!-- Overlay scuro gradiente da sinistra (ridotto) -->
      <div class="hero-overlay hero-overlay--light"></div>
      <!-- Effetto luce blu (decorativo) -->
      <div class="hero-glow"></div>
    </div>

    <!-- Indicatori slideshow -->
    <div class="hero-dots">
      <button
        v-for="(img, index) in images"
        :key="index"
        class="hero-dot"
        :class="{ 'hero-dot--active': currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="`Slide ${index + 1}`"
      />
    </div>

    <!-- Contenuto -->
    <div class="container hero-content-wrap">
      <div class="row">
        <div class="col-xl-10 col-lg-11 col-md-12">

          <!-- Titolo principale -->
          <h1 class="hero-title">
            Prendi il controllo<br>
            della tua linea<br>
            di packaging
          </h1>
          <br/>
          <!-- Sottotitolo -->
          <p class="hero-subtitle-med">
            Affidati a un unico partner<br>
            per gestire l'intero impianto con semplicità, soluzioni complete e assistenza tecnica dedicata.
          </p>

          <!-- CTA Button stile Babun arrotondato -->
          <div class="hero-cta">
            <nuxt-link :to="localePath('/parliamone')" class="hero-btn">
              Parliamone
              <span class="btn-arrow">
                <img src="/images/icon/icon_02.svg" alt="arrow" class="btn-arrow-icon" />
              </span>
            </nuxt-link>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const images = ['header-01.jpg', 'header-02.jpg', 'header-03.jpg']
const currentSlide = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoplay()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const resetAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = setInterval(nextSlide, 5000)
}

onMounted(() => {
  resetAutoplay()
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>

<style scoped>
/* Tutte le immagini sono nel DOM, sovrapposte */
.hero-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  opacity: 0;
  transition: opacity 1s ease;
  transform-origin: center center;
}

/* Slide attiva */
.hero-bg-img--active {
  opacity: 1;
}

/* Tablet: centra il soggetto */
@media (max-width: 1199px) and (min-width: 768px) {
  .hero-bg-img {
    object-position: center center;
    transform: scale(1.00);
  }
}

/* Mobile: nessuno zoom aggiuntivo */
@media (max-width: 767px) {
  .hero-bg-img {
    object-position: 65% center;
    transform: scale(1.00);
  }
}

/* Overlay ridotto: opacità abbassata rispetto all'originale */
.hero-overlay--light {
  opacity: 0.40; /* regola qui: 0.1 = quasi trasparente, 0.4 = più scuro */
}

/* Dots di navigazione */
.hero-dots {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.hero-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.hero-dot--active {
  background: #ffffff;
  border-color: #ffffff;
}

/* ── Bottone CTA celeste (uguale a .banner-cta in feedback-one.vue) ── */
.hero-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  padding: 14px 36px !important;
  border: 2px solid #ffffff !important;
  border-radius: 50px !important;
  background: transparent !important;
  color: #ffffff !important;
  font-size: 0.88rem !important;
  font-weight: 700 !important;
  letter-spacing: 1.2px !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease !important;
}
.hero-btn:hover {
  background: #48cbff !important;
  border-color: #48cbff !important;
  color: #ffffff !important;
}

/* Icona SVG nel bottone CTA */
.btn-arrow-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  filter: brightness(0) invert(1);        /* bianco — stato default */
  transition: filter 0.3s ease;
}


</style>
