<template>
  <section class="clients-section">
    <div class="container">

      <!-- Titolo -->
      <p class="clients-heading">
        <nuxt-link :to="localePath('/clienti')" class="clients-heading-link">
          Scopri le <span class="clients-count">12.000+</span>
        </nuxt-link>
        aziende con cui collaboriamo:
      </p>

      <!-- Carousel wrapper -->
      <div
        class="carousel-viewport"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <!-- Freccia sinistra -->
        <button
          class="carousel-arrow carousel-arrow--left"
          aria-label="Scorri a sinistra"
          @click="shiftLeft"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <!-- Track: i loghi sono duplicati per il loop seamless -->
        <div
          class="carousel-track"
          ref="trackRef"
          :style="trackStyle"
        >
          <div
            v-for="(logo, i) in loopedLogos"
            :key="i"
            class="logo-item"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="logo-img"
              draggable="false"
            />
          </div>
        </div>

        <!-- Freccia destra -->
        <button
          class="carousel-arrow carousel-arrow--right"
          aria-label="Scorri a destra"
          @click="shiftRight"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div style="margin-top:40px"> 

        </div>
        <!-- Fade mask sx/dx -->
        <div class="fade-left"  aria-hidden="true" />
        <div class="fade-right" aria-hidden="true" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { clientLogos } from '~/data/clients'

const localePath = useLocalePath()

// ── Costanti ────────────────────────────────────────────────────────────────
const LOGO_WIDTH   = 160   // px — larghezza slot logo
const LOGO_GAP     = 48    // px — gap tra loghi
const ITEM_WIDTH   = LOGO_WIDTH + LOGO_GAP
const BASE_SPEED   = 0.4   // px per frame (auto-scroll lento)
const SHIFT_AMOUNT = ITEM_WIDTH * 2  // quanti px sposta ogni click freccia

// ── Loghi duplicati per loop infinito ───────────────────────────────────────
// Triplico: [originali][originali][originali] → posizione di partenza = set centrale
const loopedLogos = computed(() => [
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
])

// ── Stato posizione ──────────────────────────────────────────────────────────
const offset     = ref(0)          // translateX corrente (negativo = scorri sx)
const trackRef   = ref<HTMLElement | null>(null)
const isPaused   = ref(false)
const rafId      = ref<number>(0)

// Larghezza di un "set" completo di loghi (per il reset infinito)
const setWidth = computed(() => clientLogos.length * ITEM_WIDTH)

// ── Stile dinamico del track ─────────────────────────────────────────────────
const trackStyle = computed(() => ({
  transform: `translateX(${-offset.value}px)`,
  // transition breve solo per i click freccia — l'auto-scroll usa RAF senza transition
  transition: isClicking.value ? 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' : 'none',
}))

const isClicking = ref(false)

// ── Posizione iniziale: partiamo dal secondo set (indice setWidth) ────────────
onMounted(() => {
  offset.value = setWidth.value   // inizia dal set centrale = loop seamless

  const step = () => {
    if (!isPaused.value && !isClicking.value) {
      offset.value += BASE_SPEED

      // Reset seamless: quando supero il terzo set, torna al set centrale
      if (offset.value >= setWidth.value * 2) {
        offset.value -= setWidth.value
      }
      // Bound sinistro (click ← oltre il limite)
      if (offset.value < 0) {
        offset.value += setWidth.value
      }
    }
    rafId.value = requestAnimationFrame(step)
  }

  rafId.value = requestAnimationFrame(step)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId.value)
})

// ── Controlli ────────────────────────────────────────────────────────────────
function pause()  { isPaused.value = true  }
function resume() { isPaused.value = false }

function shiftLeft() {
  isClicking.value = true
  offset.value = Math.max(0, offset.value - SHIFT_AMOUNT)
  // garantisce loop dopo shift sinistro
  if (offset.value < setWidth.value) {
    offset.value += setWidth.value
  }
  setTimeout(() => { isClicking.value = false }, 460)
}

function shiftRight() {
  isClicking.value = true
  offset.value += SHIFT_AMOUNT
  // garantisce loop dopo shift destro
  if (offset.value >= setWidth.value * 2) {
    offset.value -= setWidth.value
  }
  setTimeout(() => { isClicking.value = false }, 460)
}
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

/* ── Viewport del carousel ──────────────────────── */
.carousel-viewport {
  position: relative;
  overflow: hidden;
  /* mostra esattamente 6 loghi (160px slot + 48px gap) e mezzo logo del 7° */
  width: 100%;
}

/* ── Track ──────────────────────────────────────── */
.carousel-track {
  display: flex;
  align-items: center;
  will-change: transform;
  /* no width fissa: si estende quanto servono i loghi */
}

/* ── Singolo logo ───────────────────────────────── */
.logo-item {
  flex: 0 0 160px;
  width: 160px;
  margin-right: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  max-height: 60px;
  max-width: 148px;
  width: auto;
  object-fit: contain;
  user-select: none;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(20%);
}
.logo-item:hover .logo-img {
  transform: scale(1.08);
  filter: grayscale(0%);
}

/* ── Fade ai bordi (effetto dissolvenza) ────────── */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  pointer-events: none;
  z-index: 2;
}
.fade-left  { left: 0;  background: linear-gradient(to right,  #ffffff, transparent); }
.fade-right { right: 0; background: linear-gradient(to left, #ffffff, transparent); }

/* ── Frecce ─────────────────────────────────────── */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #28477D;
  background: #ffffff;
  color: #28477D;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(28,28,26,.10);
  padding: 0;
}
.carousel-arrow svg {
  width: 18px;
  height: 18px;
}
.carousel-arrow:hover {
  background: #28477D;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(40,71,125,.22);
}
.carousel-arrow--left  { left:  6px; }
.carousel-arrow--right { right: 6px; }

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 991.98px) {
  .logo-item  { flex: 0 0 130px; width: 130px; margin-right: 32px; }
  .logo-img   { max-height: 42px; max-width: 110px; }
  .fade-left,
  .fade-right { width: 48px; }
}

@media (max-width: 767.98px) {
  .clients-section { padding: 48px 0; }
  .clients-heading  { font-size: 1.1rem; margin-bottom: 36px; }
  .logo-item  { flex: 0 0 100px; width: 100px; margin-right: 24px; }
  .logo-img   { max-height: 34px; max-width: 90px; }
  .carousel-arrow { width: 28px; height: 28px; }
  .carousel-arrow svg { width: 14px; height: 14px; }
  .fade-left,
  .fade-right { width: 32px; }
}
</style>
