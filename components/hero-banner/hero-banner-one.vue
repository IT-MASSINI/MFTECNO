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
                <i class="bi bi-arrow-right"></i>
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
/* Tutte le immagini sono sempre nel DOM, sovrapposte */
.hero-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-bg-img--active {
  opacity: 0.75;
}

/* Overlay ridotto: opacità abbassata rispetto all'originale */
.hero-overlay--light {
  opacity: 0.55; /* regola qui: 0.4 = molto leggero, 0.7 = scuro come prima */
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
</style>
