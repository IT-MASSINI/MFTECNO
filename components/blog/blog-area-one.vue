<!-- Stili in: mftecno.css (globale) -->
<template>
  <section class="news-section py-section bg-light-grey">
    <div class="container">

      <!-- Header row -->
      <div class="row align-items-start mb-5">
        <div class="col-lg-8">
          <h2 class="section-title">Ultime News</h2>
          <p class="section-body mt-2">Leggi gli ultimi aggiornamenti, consigli e approfondimenti dal mondo MF TECNO</p>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-lg-end justify-content-start pt-lg-2 mt-3 mt-lg-0">
          <nuxt-link :to="localePath('/news')" class="btn call-btn">
            Vedi Tutti
            <span class="btn-arrow">
              <i class="bi bi-arrow-up-right"></i>
            </span>
          </nuxt-link>
        </div>
      </div>
      <br/>
      <br/>
      <!-- Cards row -->
      <div class="row g-4 justify-content-center">
        <div v-for="article in news" :key="article.id" class="col-lg-5">
          <nuxt-link :to="localePath(article.link)" class="news-card">

            <!-- Top text area -->
            <div class="news-card-body">
              <span class="news-card-label">{{ article.category }}</span>
              <h3 class="news-card-title">{{ article.titleLine1 }}<br>{{ article.titleLine2 }}</h3>
            </div>

            <!-- Image area with arrow overlaid -->
            <div class="news-card-img-wrap">
              <img :src="article.image" :alt="article.titleLine1 + ' ' +  article.titleLine2" class="news-card-img" />
              <div class="card-arrow-btn">
                <i class="bi bi-arrow-up-right"></i>
              </div>
            </div>

          </nuxt-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const news = [
  {
    id: 1,
    titleLine1: "Unicol e MF Tecno:",
    titleLine2: "confezionamento di colla in granuli",
    category: "CASE STUDY",
    image: "/images/news/news-01.jpg",
    link: "/news/unicol"
  },
  {
    id: 2,
    titleLine1: "Incartonatrice Wrap Around",
    titleLine2: "MF TECNO",
    category: "NEWS",
    image: "/images/news/news-02.jpg",
    link: "/news/wrap-around"
  },
]
</script>

<style scoped>
/* ── Card container ── */
.news-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 40px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 90%;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.12);
}

/* ── Top text area ── */
.news-card-body {
  padding: 22px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.news-card-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9ba3b0;
}

.news-card-title {
  font-size: clamp(1.05rem, 2vw, 1.8rem);
  font-weight: 700;
  color: var(--mft-navy);
  margin: 0;
  line-height: 1.35;
}

/* ── Image area ── */
.news-card-img-wrap {
  position: relative;
  flex: 1;
  min-height: 200px;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}

.news-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}
.news-card:hover .news-card-img {
  transform: scale(1.04);
}

/* ── Arrow button — positioned bottom-right over image ── */
.news-card-img-wrap .card-arrow-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 2;
  /* Override global white border to match design: white bg, navy icon */
  background: rgba(255, 255, 255, 0.92) !important;
  border-color: transparent !important;
  color: var(--mft-navy) !important;
}
.news-card:hover .card-arrow-btn {
  background: var(--mft-orange) !important;
  border-color: var(--mft-orange) !important;
  color: #ffffff !important;
}

/* ── Responsive ── */
@media (max-width: 767.98px) {
  .news-card-img-wrap { min-height: 180px; }
}
</style>
