<template>
  <!-- Wrapper pagina: imposta lo sfondo grigio chiaro -->
  <div class="fpf-page-wrapper">

    <section class="fpf-banner">

      <!-- Immagine di sfondo -->
      <div class="fpf-bg-wrap">
        <img
          src="/images/home/sfondo-banner.jpg"
          alt="Partner_MFTecno"
          class="fpf-bg-img"
          aria-hidden="true"
        />
      </div>

      <!-- Overlay blu sfumato dal basso -->
      <div class="fpf-overlay-bottom" />

      <!-- Contenuto -->
      <div class="container fpf-content-wrap">
        <div class="row align-items-center gy-5">

          <!-- Colonna sinistra — titolo + CTA -->
          <div class="col-lg-5">
            <span class="fpf-badge">Perché scegliere MF TECNO</span>
            <h2 class="fpf-title mt-3">
              Il Partner giusto<br />per la tua produzione
            </h2>
            <nuxt-link :to="localePath('/contatti')" class="fpf-cta mt-4 d-inline-block">
              CONTATTACI
            </nuxt-link>
          </div>

          <!-- Colonna destra — checklist -->
          <div class="col-lg-7">
            <ul class="fpf-check-list">
              <li>
                <i class="bi bi-check2" aria-hidden="true"></i>
                Produzione All-in-house
              </li>
              <li>
                <i class="bi bi-check2" aria-hidden="true"></i>
                Esperienza industriale consolidata
              </li>
              <li>
                <i class="bi bi-check2" aria-hidden="true"></i>
                Soluzioni su misura
              </li>
              <li>
                <i class="bi bi-check2" aria-hidden="true"></i>
                Presenza Internazionale
              </li>
              <li>
                <i class="bi bi-check2" aria-hidden="true"></i>
                Assistenza tecnica dedicata
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- Spaziatura sotto il banner -->
    <div class="fpf-spacer" />

  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
/* ── Sfondo pagina ──────────────────────────────────
   Avvolge l'intero componente: garantisce #f5f5f5
   sia sopra che sotto il banner.
   ─────────────────────────────────────────────────── */
.fpf-page-wrapper {
  background-color: #f5f5f5;   /* = var(--mft-bg-grey) */
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
}

/* ── Wrapper principale banner ──────────────────── */
.fpf-banner {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  margin: 0 auto;
  max-width: 1320px;
}

/* ── Immagine di sfondo ─────────────────────────── */
.fpf-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.fpf-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

/* ── Overlay blu sfumato DAL BASSO ──────────────── */
.fpf-overlay-bottom {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(26, 47, 90, 0.95) 0%,
    rgba(26, 47, 90, 0.55) 30%,
    rgba(26, 47, 90, 0.08) 65%,
    rgba(26, 47, 90, 0.00) 100%
  );
}

/* ── Contenuto sopra sfondo ─────────────────────── */
.fpf-content-wrap {
  position: relative;
  z-index: 2;
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: 80px;
}

/* ── Badge label ────────────────────────────────── */
.fpf-badge {
  display: inline-block;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* ── Titolo ─────────────────────────────────────── */
.fpf-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
}

/* ── Bottone CTA pill ───────────────────────────── */
.fpf-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  border: 2.5px solid #48cbff;
  border-radius: 50px;
  background: #48cbff;
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.fpf-cta:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #28477D;
}

/* ── Checklist ──────────────────────────────────── */
.fpf-check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.fpf-check-list li {
  padding-left: 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  font-size: clamp(1.7rem, 1.6vw, 1.15rem);
  font-weight: 400;
}
.fpf-check-list .bi-check2 {
  font-size: 1.2rem;
  color: #ffffff;
  flex-shrink: 0;
  font-weight: 700;
}

/* ── Spaziatore inferiore ───────────────────────── */
.fpf-spacer {
  height: 0; /* già coperto dal padding-bottom del wrapper */
}

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 991.98px) {
  .fpf-content-wrap { padding-top: 56px; padding-bottom: 56px; }
  .fpf-banner       { border-radius: 20px; }
  .fpf-page-wrapper { padding-top: 32px; padding-bottom: 32px; }
}

@media (max-width: 767.98px) {
  .fpf-content-wrap {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .fpf-overlay-bottom {
    background: linear-gradient(
      to top,
      rgba(26, 47, 90, 0.98) 0%,
      rgba(26, 47, 90, 0.65) 45%,
      rgba(26, 47, 90, 0.15) 72%,
      rgba(26, 47, 90, 0.00) 100%
    );
  }

  .fpf-banner { border-radius: 16px; }

  .fpf-page-wrapper { padding-top: 24px; padding-bottom: 24px; }

  .fpf-check-list { align-items: flex-start; }
  .fpf-check-list li {
    padding-left: 0;
    font-size: 1.1rem;
  }
}
</style>
