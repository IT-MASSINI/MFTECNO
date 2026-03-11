<template>
  <section class="partner-banner">

    <!-- Immagine di sfondo -->
    <div class="banner-bg-wrap">
      <img
        src="/images/home/sfondo-banner.jpg"
        alt="Partner_MFTecno"
        class="banner-bg-img"
        aria-hidden="true"
      />
    </div>

    <!-- Overlay navy sfumato da sinistra -->
    <div class="banner-overlay" />

    <!-- Contenuto -->
    <div class="container banner-content-wrap">
      <div class="row align-items-center gy-5">

        <!-- Colonna sinistra — titolo + CTA -->
        <div class="col-lg-5">
          <span class="banner-badge">Perché scegliere MF TECNO</span>
          <h2 class="banner-title mt-3">
            Il Partner giusto<br />per la tua produzione
          </h2>
          <nuxt-link :to="localePath('/contatti')" class="banner-cta mt-4 d-inline-block">
            CONTATTACI
          </nuxt-link>
        </div>

        <!-- Colonna destra — checklist -->
        <div class="col-lg-7">
          <ul class="banner-check-list">
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
  <br/>
  <br/>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
/* ── Wrapper principale ─────────────────────────── */
.partner-banner {
  position: relative;
  overflow: hidden;
  border-radius: 28px;           /* angoli arrotondati come nel mockup */
  margin: 0 auto;
  max-width: 1320px;             /* si adatta al container Bootstrap */
}

/* ── Immagine di sfondo ─────────────────────────── */
.banner-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.banner-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* ── Overlay navy sfumato ────────────────────────── */
.banner-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    rgba(28, 52, 100, 0.92) 0%,
    rgba(28, 52, 100, 0.80) 40%,
    rgba(28, 52, 100, 0.45) 70%,
    rgba(28, 52, 100, 0.15) 100%
  );
}

/* ── Contenuto sopra sfondo ─────────────────────── */
.banner-content-wrap {
  padding-left: 80px;
  position: relative;
  z-index: 2;
  padding-top: 72px;
  padding-bottom: 72px;
}

/* ── Badge label ────────────────────────────────── */
.banner-badge {
  display: inline-block;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* ── Titolo ─────────────────────────────────────── */
.banner-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
}

/* ── Bottone CTA pill ───────────────────────────── */
.banner-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  border: 2.5px solid rgba(255, 255, 255, 0.70);
  border-radius: 50px;
  background: transparent;
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.banner-cta:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #28477D;
}

/* ── Checklist ──────────────────────────────────── */
.banner-check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.banner-check-list li {
  padding-left: 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  font-size: clamp(1.7rem, 1.6vw, 1.15rem);
  font-weight: 400;
}
.banner-check-list .bi-check2 {
  font-size: 1.2rem;
  color: #ffffff;
  flex-shrink: 0;
  font-weight: 700;
}

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 991.98px) {
  .banner-content-wrap { padding-top: 56px; padding-bottom: 56px; }
  .partner-banner { border-radius: 20px; }
}
@media (max-width: 767.98px) {
  .banner-content-wrap {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .banner-overlay {
    background: linear-gradient(
      180deg,
      rgba(28, 52, 100, 0.85) 0%,
      rgba(28, 52, 100, 0.75) 100%
    );
  }
  .partner-banner { border-radius: 16px; }

  /* Checklist allineata a sinistra come il titolo */
  .banner-check-list {
    align-items: flex-start;
  }
  .banner-check-list li {
    padding-left: 0;
    font-size: 1.1rem;
  }
}
</style>
