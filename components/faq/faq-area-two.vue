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

      <!-- Carousel wrapper: ora è position:relative per ancorare le frecce esterne -->
      <div
        class="carousel-wrapper"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <!-- Freccia sinistra: posizionata FUORI dal viewport -->
        <button
          class="carousel-arrow carousel-arrow--left"
          aria-label="Scorri a sinistra"
          @click="shiftLeft"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <!-- Viewport: ora prende tutta la larghezza del wrapper -->
        <div class="carousel-viewport">
          <!-- Track: 3 copie [A|B|C] — B è il set centrale di riferimento -->
          <div
            class="carousel-track"
            ref="trackRef"
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

          <!-- Fade mask sx/dx -->
          <div class="fade-left"  aria-hidden="true" />
          <div class="fade-right" aria-hidden="true" />
        </div>

        <!-- Freccia destra: posizionata FUORI dal viewport -->
        <button
          class="carousel-arrow carousel-arrow--right"
          aria-label="Scorri a destra"
          @click="shiftRight"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { clientLogos } from '~/data/clients'

const localePath = useLocalePath()

// ─────────────────────────────────────────────────────────────────────────────
// STRATEGIA: 3 copie [A | B | C]
//
// - Si parte all'inizio di B (offset = setWidth).
// - Auto-scroll: offset cresce. Quando entra in C (offset >= setWidth*2),
//   teleport istantaneo a B (offset -= setWidth). Stesso punto visivo → seamless.
// - Click frecce: sposta l'offset. Dopo la transition, normalize() riporta
//   l'offset nel range [setWidth, setWidth*2) senza animation → invisibile.
//   Con 3 copie e SHIFT_ITEMS=2, lo spostamento non può mai uscire dall'intero
//   track, quindi non si vede mai "vuoto".
// ─────────────────────────────────────────────────────────────────────────────

const COPIES = 3

const loopedLogos = computed(() =>
  Array.from({ length: COPIES }, () => clientLogos).flat()
)

const trackRef = ref<HTMLElement | null>(null)

// Tutto lo stato è JS puro (no Vue ref nelle hot path)
let offset        = 0
let setWidth      = 0
let rafId         = 0
let paused        = false
let transitioning = false

const BASE_SPEED    = 0.4    // px/frame
const SHIFT_ITEMS   = 2      // item spostati per click freccia
const TRANSITION_MS = 420    // durata animation click frecce

// ── measure: legge la larghezza reale di un singolo set dal DOM ───────────────
function measure() {
  if (!trackRef.value) return
  // Il track contiene esattamente COPIES set → scrollWidth / COPIES = un set
  setWidth = trackRef.value.scrollWidth / COPIES
}

// ── setTransform: applica translateX direttamente sullo stile DOM ─────────────
function setTransform(withTransition: boolean) {
  if (!trackRef.value) return
  trackRef.value.style.transition = withTransition
    ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`
    : 'none'
  trackRef.value.style.transform = `translateX(${-offset}px)`
}

// ── normalize: teleport invisibile → riporta offset in [setWidth, 2*setWidth) ─
function normalize() {
  if (setWidth <= 0) return
  const rel = ((offset - setWidth) % setWidth + setWidth) % setWidth
  offset = setWidth + rel
  setTransform(false)
}

// ── RAF tick: auto-scroll frame by frame ──────────────────────────────────────
function tick() {
  if (!paused && !transitioning) {
    offset += BASE_SPEED
    if (offset >= setWidth * 2) {
      offset -= setWidth
      setTransform(false)
    } else {
      setTransform(false)
    }
  }
  rafId = requestAnimationFrame(tick)
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(async () => {
  await nextTick()
  measure()
  offset = setWidth   // parti dall'inizio del set B
  setTransform(false)
  rafId = requestAnimationFrame(tick)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', onResize)
})

function onResize() {
  const oldSetWidth = setWidth
  measure()
  if (oldSetWidth > 0 && setWidth > 0 && oldSetWidth !== setWidth) {
    offset = (offset / oldSetWidth) * setWidth
    normalize()
  }
}

// ── Hover ─────────────────────────────────────────────────────────────────────
function pause()  { paused = true  }
function resume() { paused = false }

// ── Click frecce ──────────────────────────────────────────────────────────────
function shiftRight() {
  if (transitioning) return
  transitioning = true
  const itemW = setWidth / clientLogos.length
  offset += itemW * SHIFT_ITEMS
  setTransform(true)
  setTimeout(afterTransition, TRANSITION_MS + 20)
}

function shiftLeft() {
  if (transitioning) return
  transitioning = true
  const itemW = setWidth / clientLogos.length
  offset -= itemW * SHIFT_ITEMS
  setTransform(true)
  setTimeout(afterTransition, TRANSITION_MS + 20)
}

function afterTransition() {
  normalize()
  transitioning = false
}
</script>

<style scoped>
/* ── Sezione: padding verticale leggermente aumentato per più "aria" ───── */
.clients-section {
  padding: 80px 0 72px;
  background: #f5f5f5;
}

/* ── Titolo ──────────────────────────────────────── */
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

/* ── Wrapper: ora è relative, le frecce escono dal flow ──────────────────── */
/* Prima era display:flex con gap:16px che "mangiava" spazio al viewport.    */
/* Ora il viewport occupa il 100% del wrapper e le frecce galleggiano fuori. */
.carousel-wrapper {
  position: relative;
  width: 100%;
}

/* ── Viewport: 100% del wrapper, niente più divisione dello spazio ────────── */
.carousel-viewport {
  position: relative;
  overflow: hidden;
  width: 100%;
}

/* ── Track ───────────────────────────────────────── */
.carousel-track {
  display: flex;
  align-items: center;
  will-change: transform;
}

/* ── Logo item ───────────────────────────────────── */
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

/* ── Fade bordi: ridotto da 60px a 28px per non coprire i loghi ─────────── */
.fade-left,
.fade-right {
  position: absolute;
  top: 0; bottom: 0;
  width: 28px;
  pointer-events: none;
  z-index: 2;
}
.fade-left  { left: 0;  background: linear-gradient(to right, #f5f5f5, transparent); }
.fade-right { right: 0; background: linear-gradient(to left,  #f5f5f5, transparent); }

/* ── Frecce: ora absolute, posizionate FUORI dal viewport ─────────────────
   - top/transform: centratura verticale sul viewport
   - left/right negativi: le frecce "escono" dal viewport verso l'esterno
   - z-index: sopra eventuali fade (anche se non si sovrappongono mai)
   ──────────────────────────────────────────────────────────────────────── */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  background: transparent;
  color: #28477D;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease,
              border-color 0.2s ease, box-shadow 0.2s ease,
              transform 0.2s ease;
  box-shadow: none;
  padding: 0;
  z-index: 3;
}
.carousel-arrow--left  { left: -52px; }
.carousel-arrow--right { right: -52px; }

.carousel-arrow svg { width: 22px; height: 22px; }

/* Stato hover/focus */
.carousel-arrow:hover,
.carousel-arrow:focus-visible {
  background: #28477D;
  border-color: #28477D;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(40,71,125,.22);
  outline: none;
}
/* Piccolo "nudge" in hover per feedback tattile */
.carousel-arrow--left:hover  { transform: translateY(-50%) translateX(-2px); }
.carousel-arrow--right:hover { transform: translateY(-50%) translateX( 2px); }

/* ── Responsive ──────────────────────────────────── */
/* Tablet grande: frecce un po' più vicine ma ancora esterne */
@media (max-width: 1199.98px) {
  .carousel-arrow--left  { left: -40px; }
  .carousel-arrow--right { right: -40px; }
}

/* Tablet: riduco loghi e avvicino frecce (ancora esterne ma di poco) */
@media (max-width: 991.98px) {
  .logo-item  { flex: 0 0 130px; width: 130px; margin-right: 32px; }
  .logo-img   { max-height: 42px; max-width: 110px; }
  .fade-left, .fade-right { width: 20px; }
  .carousel-arrow { width: 36px; height: 36px; }
  .carousel-arrow svg { width: 18px; height: 18px; }
  .carousel-arrow--left  { left: -20px; }
  .carousel-arrow--right { right: -20px; }
}

/* Mobile: qui le frecce devono tornare DENTRO il viewport perché non c'è
   spazio esterno utile; sovrapposizione con fade è tollerabile */
@media (max-width: 767.98px) {
  .clients-section  { padding: 56px 0 48px; }
  .clients-heading  { font-size: 1.1rem; margin-bottom: 36px; }
  .logo-item  { flex: 0 0 100px; width: 100px; margin-right: 24px; }
  .logo-img   { max-height: 34px; max-width: 90px; }
  .fade-left, .fade-right { width: 20px; }
  .carousel-arrow { width: 32px; height: 32px; }
  .carousel-arrow svg { width: 16px; height: 16px; }
  .carousel-arrow--left  { left: 4px; }
  .carousel-arrow--right { right: 4px; }
}
</style>
