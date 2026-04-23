<!-- Stili in: mftecno.css (globale) — stile Babun -->
<template>
  <section class="news-section py-section bg-light-grey">
    <div class="container">

      <!-- Header row -->
      <div class="row align-items-start mb-5">
        <div class="col-lg-8">
          <h2 class="section-title">Ultime News</h2>
          <p class="section-body mt-2">
            Leggi gli ultimi aggiornamenti, consigli e approfondimenti dal mondo MF TECNO
          </p>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-lg-end justify-content-start pt-lg-2 mt-3 mt-lg-0">
          <nuxt-link :to="localePath('/news')" class="btn call-btn solutions-vedi-tutti">
            Vedi Tutti
            <span class="btn-arrow solutions-arrow">
              <img src="/images/icon/icon_02.svg" class="call-icon-svg" alt="" />
            </span>
          </nuxt-link>
        </div>
      </div>

      <!-- Cards row — stile Babun: 3 colonne, immagine sopra, testo sotto -->
      <div class="row g-4 g-lg-5">
        <div v-for="article in newsList" :key="article.id" class="col-md-6 col-lg-4">
          <nuxt-link :to="localePath(article.link)" class="news-card">

            <!-- Image top -->
            <div class="news-card-img-wrap">
              <img
                :src="article.image"
                :alt="article.titleLine1 + ' ' + article.titleLine2"
                class="news-card-img"
              />
            </div>

            <!-- Title + arrow row -->
            <div class="news-card-head">
              <h3 class="news-card-title">
                {{ article.titleLine1 }}<br>{{ article.titleLine2 }}
              </h3>
              <span class="news-card-arrow" aria-hidden="true">
                <i class="bi bi-arrow-up-right"></i>
              </span>
            </div>

            <!-- Meta info -->
            <div class="news-card-meta">
              <span class="meta-author">{{ article.author }}</span>
              <span class="meta-dot">·</span>
              <span class="meta-time">{{ article.readTime }}</span>
              <span class="meta-dot">·</span>
              <span class="meta-category">{{ article.category }}</span>
            </div>

          </nuxt-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { getLatestNews } from '~/data/news-data'

const localePath = useLocalePath()

// Prendo le 3 news più recenti dal file dati centralizzato
const newsList = getLatestNews(3)
</script>

<style scoped>
/* ──────────────────────────────────────────────────────────────
   Card in stile Babun
   - sfondo trasparente, niente box-shadow
   - immagine in alto, angoli squadrati
   - titolo + freccia a destra sulla stessa riga
   - meta info sotto una linea separatrice
   - card in flex verticale per allineare la meta row
   ────────────────────────────────────────────────────────────── */
.news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  background: transparent;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-3px);
}

/* ── Immagine in alto (angoli squadrati) ── */
.news-card-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  aspect-ratio: 16 / 10;
  margin-bottom: 1.5rem;
}

.news-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.news-card:hover .news-card-img {
  transform: scale(1.04);
}

/* ── Riga titolo + freccia ──
   Altezza minima calcolata per ospitare 3 righe di titolo.
   font-size ~ clamp(1.15rem, 1.6vw, 1.6rem) con line-height 1.3
   → 3 righe ≈ 3 * 1.3 * font-size. Con il valore sotto copriamo il caso
   peggiore: il border-bottom (divider) resta allineato tra tutte le card. */
.news-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e5e5e5;
  min-height: calc(1.6rem * 1.3 * 3 + 1.25rem); /* 3 righe + padding */
}

.news-card-title {
  font-size: clamp(1.15rem, 1.6vw, 1.6rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--mft-navy);
  margin: 0;
  flex: 1;
  text-decoration: none;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  transition: text-decoration-color 0.25s ease;

  /* Limita a 3 righe con ellipsis se il titolo è troppo lungo */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card:hover .news-card-title {
  color: var(--mft-navy);
  text-decoration: underline;
  text-decoration-color: var(--mft-navy);
}

/* ── Freccia cerchio bordato (stile Babun) ── */
.news-card-arrow {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  background: transparent;
  color: var(--mft-navy);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.news-card:hover .news-card-arrow {
  background: var(--mft-navy);
  border-color: var(--mft-navy);
  color: #ffffff;
  transform: rotate(0deg);
}

/* ── Meta info (autore · tempo · categoria) ── */
.news-card-meta {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 400;
}

.meta-dot {
  color: #9ca3af;
  font-weight: 700;
  line-height: 1;
}

.meta-category {
  color: #6b7280;
}

/* ── Responsive ── */
@media (max-width: 991.98px) {
  /* Su tablet il clamp ci dà un font-size intermedio — ricalibriamo l'altezza minima */
  .news-card-head {
    min-height: calc(1.4rem * 1.3 * 3 + 1.25rem);
  }
}

@media (max-width: 767.98px) {
  .news-card-img-wrap {
    aspect-ratio: 16 / 11;
    border-radius: 0;
    margin-bottom: 1.1rem;
  }
  .news-card-arrow {
    width: 38px;
    height: 38px;
    font-size: 0.95rem;
  }
  .news-card-meta {
    font-size: 0.82rem;
  }
  /* Su mobile le card sono in colonna: l'allineamento tra righe non è più rilevante */
  .news-card-head {
    min-height: 0;
  }
}
</style>
