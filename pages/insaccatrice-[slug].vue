<template>
  <!-- ============================================================
       MF TECNO — Pagina Dettaglio Insaccatrice
       Struttura: Breadcrumb · Hero (card+info) · Specifiche · Tab
                  · Video · CTA · Prodotti correlati · Partner Banner
       SEO: JSON-LD BreadcrumbList + Product (schema.org)
       Layout: catalog (header sempre bianco, padding-top gestito)
       Palette: #28477D blu · #ED7417 arancione · #1C1C1A nero
  ============================================================ -->
  <div v-if="machine" class="pd-page">

    <div style="height: 90px;">

    </div>

    <!-- ══════════════════════════════════════════════════════════
         0. BREADCRUMB navigabile + SEO (schema.org/BreadcrumbList)
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-breadcrumb-wrap">
      <div class="container">
        <Breadcrumb :items="breadcrumbItems" />
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         1. HERO PRODOTTO — card immagine sinistra · info destra
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-hero">
      <div class="container">
        <div class="pd-hero-grid">

          <!-- Colonna sx: card bianca con immagine principale + thumbnail -->
          <div class="pd-hero-gallery">
            <div class="pd-hero-card">
              <img
                :src="activeImg"
                :alt="machine.title"
                class="pd-hero-img"
              />
            </div>
            <!-- Thumbnails (se disponibili più immagini) -->
            <div class="pd-hero-thumbs" v-if="machine.gallery && machine.gallery.length > 1">
              <button
                v-for="(img, i) in machine.gallery"
                :key="i"
                class="pd-thumb-btn"
                :class="{ active: activeImg === img }"
                @click="activeImg = img"
                :aria-label="`Vedi immagine ${i + 1} di ${machine.title}`"
              >
                <img :src="img" :alt="`${machine.title} ${i+1}`" />
              </button>
            </div>
          </div>

          <!-- Colonna dx: info prodotto -->
          <div class="pd-hero-info">
            <!-- Badge serie -->
            <span class="pd-serie-badge">{{ machine.type }}</span>

            <!-- Titolo -->
            <h1 class="pd-title">{{ machine.title }}</h1>
            <p class="pd-subtitle">{{ machine.subtitle }}</p>

            <!-- Descrizione breve -->
            <div class="pd-desc pd-prose" v-html="renderMd(machine.product)"></div>

            <!-- Features check -->
            <ul class="pd-features">
              <li v-for="(feat, i) in machine.features" :key="i">
                <i class="bi bi-check pd-check-icon"></i>
                {{ feat }}
              </li>
            </ul>

            <!-- CTA buttons — stile globale mftecno.css -->
            <div class="pd-cta-row">
              <!-- Contattaci — pill pieno navy con icona busta -->
              <NuxtLink
                :to="localePath('contatti')"
                class="mft-btn-primary-icon"
              >
                <span class="mft-btn-icon-left">
                  <i class="bi bi-envelope"></i>
                </span>
                <span>Contattaci</span>
              </NuxtLink>

              <!-- Scarica pdf — ghost con icona documento + freccia (solo se pdfUrl presente) -->
              <a
                v-if="machine.pdfUrl"
                :href="machine.pdfUrl"
                target="_blank"
                rel="noopener"
                download
                class="mft-btn-ghost-icon"
                :aria-label="`Scarica la scheda tecnica di ${machine.title} (PDF)`"
              >
                <span class="mft-btn-icon-left">
                  <i class="bi bi-file-earmark-text"></i>
                </span>
                <span>Scarica pdf</span>
                <span class="mft-btn-icon-right">
                  <i class="bi bi-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
        2. SPECIFICHE RAPIDE — 3 pillole dinamiche
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-specs-bar">
      <div class="container">
        <div class="pd-specs-grid">

          <!-- Dimensioni sacchi — da machine.dimension[] -->
          <div class="pd-spec-item">
            <img src="/images/small-bags/icon-01.svg" alt="Dimensioni sacchi" class="pd-spec-svg" />
            <div>
              <span class="pd-spec-label">DIMENSIONI SACCHI</span>
              <span class="pd-spec-value">
                <template v-for="(dim, i) in machine.dimension" :key="i">
                  {{ dim }}<br v-if="i < machine.dimension.length - 1" />
                </template>
              </span>
            </div>
          </div>

          <!-- Tipologia sacchi — da machine.bags -->
          <div class="pd-spec-item">
            <img src="/images/small-bags/icon-02.svg" alt="Tipologia sacchi" class="pd-spec-svg" />
            <div>
              <span class="pd-spec-label">TIPOLOGIA SACCHI</span>
              <span class="pd-spec-value">{{ machine.bags }}</span>
            </div>
          </div>

          <!-- Materiale sacchi — da machine.bagMaterial -->
          <div class="pd-spec-item">
            <img src="/images/small-bags/icon-03.svg" alt="Materiale sacchi" class="pd-spec-svg" />
            <div>
              <span class="pd-spec-label">MATERIALE SACCHI</span>
              <span class="pd-spec-value">{{ machine.bagMaterial }}</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         3. TAB — Descrizione · Caratteristiche · Stili · Prodotti · FAQ
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-tabs-section">
      <div class="container">

        <!-- Tab bar -->
        <div class="pd-tabs-bar">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="pd-tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >{{ tab.label }}</button>
        </div>

        <!-- Tab content -->
        <div class="pd-tab-content">

          <!-- ─────────────────────────────────────────────────────
               TAB: DESCRIZIONE
          ───────────────────────────────────────────────────────── -->
          <div v-if="activeTab === 'descrizione'" class="pd-tab-pane">

            <!-- Intro -->
            <div
              v-if="tabContent?.descrizione.intro"
              class="pd-desc-intro pd-prose"
              v-html="renderMd(tabContent.descrizione.intro)"
            ></div>

            <!-- Highlights opzionali -->
            <ul v-if="tabContent?.descrizione.highlights?.length" class="pd-desc-highlights">
              <li v-for="(h, i) in tabContent.descrizione.highlights" :key="i">
                <i class="bi bi-check2 pd-check-icon"></i>{{ h }}
              </li>
            </ul>

            <!-- Blocchi testo + immagine -->
            <div
              v-for="(block, i) in tabContent?.descrizione.blocks"
              :key="i"
              class="pd-tab-two-col"
              :class="{ 'pd-tab-two-col--img-left': block.imgPosition === 'left' }"
            >
              <!-- immagine prima (sinistra) se imgPosition === 'left' -->
              <div v-if="block.img && block.imgPosition === 'left'" class="pd-tab-img-bare">
                <img :src="block.img" :alt="machine.title" class="pd-tab-img-bare-img" />
              </div>
              <div class="pd-tab-text pd-prose" v-html="renderMd(block.text)"></div>
              <!-- immagine dopo (destra) negli altri casi -->
              <div v-if="block.img && block.imgPosition !== 'left'" class="pd-tab-img-bare">
                <img :src="block.img" :alt="machine.title" class="pd-tab-img-bare-img" />
              </div>
            </div>

            <!-- Sezione chiusura -->
            <div v-if="tabContent?.descrizione.chiusura" class="pd-chiusura-section">
              <div class="pd-chiusura-grid">
                <div class="pd-chiusura-text">
                  <p class="pd-chiusura-title">{{ tabContent.descrizione.chiusura.title }}</p>
                  <ul class="pd-chiusura-list">
                    <li v-for="(item, i) in tabContent.descrizione.chiusura.items" :key="i">
                      • {{ item }}
                    </li>
                  </ul>
                  <p
                    v-for="(note, i) in tabContent.descrizione.chiusura.notes"
                    :key="i"
                    class="pd-chiusura-note"
                  >{{ note }}</p>
                </div>
                <div v-if="tabContent.descrizione.chiusura.img" class="pd-tab-img-bare">
                  <img
                    :src="tabContent.descrizione.chiusura.img"
                    :alt="machine.title"
                    class="pd-tab-img-bare-img"
                  />
                </div>
              </div>
            </div>

          </div>

          <!-- ─────────────────────────────────────────────────────
               TAB: CARATTERISTICHE
          ───────────────────────────────────────────────────────── -->
          <div v-if="activeTab === 'caratteristiche'" class="pd-tab-pane">

            <div
              v-if="tabContent?.caratteristiche"
              class="pd-carat-layout"
            >
              <!-- Colonna sx: gruppi con checkmark -->
              <div class="pd-carat-groups">
                <div
                  v-for="(group, gi) in tabContent.caratteristiche.groups"
                  :key="gi"
                  class="pd-carat-group"
                >
                  <h3 class="pd-carat-group-title">{{ group.title }}</h3>
                  <ul class="pd-carat-list">
                    <li v-for="(item, ii) in group.items" :key="ii">
                      <i class="bi bi-check2 pd-check-icon"></i>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Colonna dx: opzioni (se presenti) -->
              <div
                v-if="tabContent.caratteristiche.opzioni"
                class="pd-carat-opzioni"
              >
                <h3 class="pd-carat-group-title">
                  {{ tabContent.caratteristiche.opzioni.title }}
                </h3>
                <ul class="pd-carat-list">
                  <li
                    v-for="(item, ii) in tabContent.caratteristiche.opzioni.items"
                    :key="ii"
                  >
                    <i class="bi bi-check2 pd-check-icon"></i>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- ── Specifiche tecniche (sfondo grigio) ── -->
            <div
              v-if="tabContent?.caratteristiche?.specifiche?.length"
              class="pd-specifiche-section"
            >
              <h3 class="pd-specifiche-heading">Specifiche:</h3>
              <div class="pd-specifiche-list">
                <div
                  v-for="(group, gi) in tabContent.caratteristiche.specifiche"
                  :key="gi"
                  class="pd-specifiche-group"
                >
                  <p class="pd-specifiche-group-title">{{ group.title }}</p>
                  <div class="pd-specifiche-rows">
                    <div
                      v-for="(item, ii) in group.items"
                      :key="ii"
                      class="pd-specifiche-row"
                    >
                      <span class="pd-specifiche-label">{{ item.label }}</span>
                      <span class="pd-specifiche-value">{{ item.value }}</span>
                    </div>
                  </div>
                  <p v-if="group.note" class="pd-specifiche-note">{{ group.note }}</p>
                </div>
              </div>
            </div>

            <!-- Fallback: usa machine.features se non ci sono dati tab -->
            <div v-else-if="!tabContent?.caratteristiche" class="pd-features-grid">
              <div v-for="(feat, i) in machine.features" :key="i" class="pd-feat-card">
                <i class="bi bi-check2-circle pd-feat-icon"></i>
                <span>{{ feat }}</span>
              </div>
            </div>

          </div>

          <!-- ─────────────────────────────────────────────────────
               TAB: STILI DI CONFEZIONAMENTO
          ───────────────────────────────────────────────────────── -->
          <div v-if="activeTab === 'stili'" class="pd-tab-pane">
            <h2 class="pd-tab-title">Stili di confezionamento</h2>

            <div
              v-if="tabContent?.stiliConfezione?.length"
              class="pd-stili-grid"
            >
              <div
                v-for="(stile, i) in tabContent.stiliConfezione"
                :key="i"
                class="pd-stile-card-rich"
                :class="{ featured: stile.featured }"
              >
                <img :src="stile.img" :alt="stile.title" class="pd-stile-img" />
                <h3 class="pd-stile-title">{{ stile.title }}</h3>
                <p class="pd-stile-desc">{{ stile.description }}</p>
                <NuxtLink v-if="stile.link" :to="stile.link" class="pd-stile-link">
                  <img src="/images/icon/icon_02.svg" alt="→" class="pd-stile-arrow" />
                </NuxtLink>
                <span v-else class="pd-stile-link">
                  <img src="/images/icon/icon_02.svg" alt="→" class="pd-stile-arrow" />
                </span>
              </div>
            </div>

            <!-- Fallback: usa machine.tipoInsacco -->
            <div v-else class="pd-stili-grid">
              <div v-for="(tipo, i) in machine.tipoInsacco" :key="i" class="pd-stile-card">
                <i class="bi bi-bag pd-stile-icon"></i>
                <span>{{ tipo }}</span>
              </div>
            </div>
          </div>

          <!-- ─────────────────────────────────────────────────────
               TAB: I TUOI PRODOTTI
          ───────────────────────────────────────────────────────── -->
          <div v-if="activeTab === 'prodotti'" class="pd-tab-pane">
            <h2 class="pd-tab-title">I tuoi prodotti</h2>

            <div
              v-if="tabContent?.prodotti?.length"
              class="pd-prodotti-grid"
            >
              <div
                v-for="(prod, i) in tabContent.prodotti"
                :key="i"
                class="pd-prodotto-card"
                :class="{ featured: prod.featured }"
              >
                <img :src="prod.icon" :alt="prod.title" class="pd-prodotto-icon" />
                <h3 class="pd-prodotto-title">{{ prod.title }}</h3>
                <p class="pd-prodotto-desc">{{ prod.description }}</p>
                <NuxtLink v-if="prod.link" :to="prod.link" class="pd-stile-link">
                  <img src="/images/icon/icon_02.svg" alt="→" class="pd-stile-arrow" />
                </NuxtLink>
                <span v-else class="pd-stile-link">
                  <img src="/images/icon/icon_02.svg" alt="→" class="pd-stile-arrow" />
                </span>
              </div>
            </div>
          </div>

          <!-- ─────────────────────────────────────────────────────
               TAB: FAQ
          ───────────────────────────────────────────────────────── -->
          <div v-if="activeTab === 'faq'" class="pd-tab-pane">
            <h2 class="pd-tab-title">Domande frequenti</h2>
            <div class="pd-faq-list">
              <div
                v-for="(faq, i) in tabContent?.faq ?? []"
                :key="i"
                class="pd-faq-item"
              >
                <button
                  class="pd-faq-question"
                  :class="{ open: openFaq === i }"
                  @click="openFaq = openFaq === i ? null : i"
                >
                  {{ faq.q }}
                  <i class="bi" :class="openFaq === i ? 'bi-dash' : 'bi-plus'"></i>
                </button>
                <div class="pd-faq-answer" v-show="openFaq === i">
                  <p>{{ faq.a }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         4. VIDEO YouTube — singolo o gallery
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-video-section" v-if="youtubeEmbedUrls.length > 0">
      <div class="container">

        <!-- Video singolo: layout centrato classico -->
        <div v-if="youtubeEmbedUrls.length === 1" class="pd-video-wrap">
          <iframe
            :src="youtubeEmbedUrls[0]"
            title="MF TECNO — Video macchina"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="pd-video-iframe"
          ></iframe>
        </div>

        <!-- Video multipli: video principale + thumbnails selezionabili -->
        <div v-else class="pd-video-gallery">

          <!-- Video attivo (grande) -->
          <div class="pd-video-main">
            <iframe
              :src="youtubeEmbedUrls[activeVideoIndex]"
              :key="activeVideoIndex"
              title="MF TECNO — Video macchina"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="pd-video-iframe"
            ></iframe>
          </div>

          <!-- Thumbnails selezionabili -->
          <div class="pd-video-thumbs">
            <button
              v-for="(url, i) in youtubeEmbedUrls"
              :key="i"
              class="pd-video-thumb-btn"
              :class="{ active: activeVideoIndex === i }"
              @click="activeVideoIndex = i"
            >
              <img
                :src="`https://img.youtube.com/vi/${extractYoutubeId(url)}/mqdefault.jpg`"
                :alt="`Video ${i + 1}`"
                class="pd-video-thumb-img"
              />
              <i class="bi bi-play-circle-fill pd-video-thumb-play"></i>
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         5. CTA — "Vuoi parlare con noi?"
    ══════════════════════════════════════════════════════════ -->
    <FancyBannerInsaccatrice />

    <!-- ══════════════════════════════════════════════════════════
        6. PRODOTTI CORRELATI
    ══════════════════════════════════════════════════════════ -->
    <section class="pd-related-section">
      <div class="container">

        <!-- Header a due colonne come nel design -->
        <div class="pd-related-header">
          <h2 class="pd-related-main-title">
            Completa la tua linea<br>di confezionamento
          </h2>
          <p class="pd-related-main-sub">
            Espandi le prestazioni del tuo impianto con sistemi progettati
            per lavorare in perfetta sinergia.
          </p>
        </div>

        <div class="pd-related-grid">
          <NuxtLink
            v-for="rel in relatedMachines"
            :key="rel.id"
            :to="`/insaccatrice-${rel.slug}`"
            class="pd-related-card"
          >
            <!-- Immagine thumbnail -->
            <div class="pd-related-img-wrap">
              <img :src="rel.thumb" :alt="rel.title" class="pd-related-img" />
            </div>

            <!-- Info -->
            <div class="pd-related-info">
              <h3 class="pd-related-title">{{ rel.title }}</h3>
              <p class="pd-related-desc">{{ rel.shortDesc }}</p>
              <p class="pd-related-speed">fino a {{ rel.speed }}</p>
              <img src="/images/icon/icon_02.svg" alt="→" class="pd-related-arrow" />
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         7. PARTNER BANNER — "Il partner giusto"
    ══════════════════════════════════════════════════════════ -->
    <feedback-one />
  </div>

  <!-- Fallback 404 -->
  <div v-else class="pd-not-found">
    <div class="container">
      <h1>Macchina non trovata</h1>
      <NuxtLink :to="localePath('/')">← Torna al catalogo</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import piccoli_formati_data from '~/data/piccoli-formati-data'
import piccoli_formati_tabs from '~/data/piccoli-formati-tabs'
import { marked } from 'marked'

// ── Usa il layout "catalog": header sempre bianco, padding-top gestito ──
definePageMeta({ layout: 'catalog' })

const route = useRoute()
const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()

// ── Markdown renderer ──────────────────────────────────────
const renderMd = (text: string): string => {
  if (!text) return ''
  return marked.parse(text) as string
}

// ── Dati macchina (catalogo) ───────────────────────────────
const machine = computed(() =>
  piccoli_formati_data.find(m => m.slug === route.params.slug)
)

// ── Contenuti tab (join via slug) ──────────────────────────
const tabContent = computed(() =>
  piccoli_formati_tabs.find(t => t.slug === route.params.slug)?.tabs ?? null
)

// ── YouTube embed URLs (array) ─────────────────────────────
const toEmbedUrl = (url: string): string => {
  if (url.includes('/embed/')) return url
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return `https://www.youtube.com/embed/${match[1]}`
  const short = url.match(/youtu\.be\/([^?&]+)/)
  if (short) return `https://www.youtube.com/embed/${short[1]}`
  return url
}

const youtubeEmbedUrls = computed(() => {
  const videos = machine.value?.video
  if (!videos || videos.length === 0) return []
  return videos.map(toEmbedUrl)
})

// ── Video gallery ──────────────────────────────────────────
const activeVideoIndex = ref(0)
watch(() => machine.value?.slug, () => { activeVideoIndex.value = 0 })

const extractYoutubeId = (url: string): string => {
  if (url.includes('/embed/')) return url.split('/embed/')[1].split('?')[0]
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]
  const short = url.match(/youtu\.be\/([^?&]+)/)
  if (short) return short[1]
  return ''
}

// ── Immagine attiva (gallery) ──────────────────────────────
const activeImg = ref(machine.value?.img ?? '')
watch(() => machine.value?.img, (val) => { if (val) activeImg.value = val })

// ── Tab — aggiunto "prodotti" ──────────────────────────────
const tabs = [
  { id: 'descrizione',     label: 'Descrizione' },
  { id: 'caratteristiche', label: 'Caratteristiche' },
  { id: 'stili',           label: 'Stili di confezione' },
  { id: 'prodotti',        label: 'I tuoi prodotti' },
  { id: 'faq',             label: 'FAQ' },
]
const activeTab = ref('descrizione')

// ── FAQ accordion ──────────────────────────────────────────
const openFaq = ref<number | null>(null)

// ── Prodotti correlati ─────────────────────────────────────
const relatedMachines = [
  {
    id: 1,
    slug: 'mf-pca-smart',
    thumb: '/images/small-bags/thumb-01.png',
    title: 'MF PCA SMART',
    shortDesc: 'Pallettizzatore cartesiano per sacchi, scatole o fardelli.',
    speed: '500 cicli/h',
  },
  {
    id: 2,
    slug: 'wrap-around',
    thumb: '/images/small-bags/thumb-02.png',
    title: 'WRAP AROUND',
    shortDesc: 'La Cartonatrice Wrap Around è progettata per imballare prodotti in vassoi, plateau e casse americane',
    speed: '20 cartoni/min',
  },
  {
    id: 3,
    slug: 'wrap-20',
    thumb: '/images/small-bags/thumb-03.png',
    title: 'WRAP 20',
    shortDesc: 'Pallettizzatore cartesiano per sacchi, scatole o fardelli.',
    speed: '20 Pallet/h',
  },
]

// ── Breadcrumb navigabile (alimenta UI + JSON-LD SEO) ──────
const breadcrumbItems = useProductBreadcrumb(machine)

// ── SEO: meta + JSON-LD schema.org ─────────────────────────
// Il base URL serve per costruire URL assolute richieste da Google
// per il BreadcrumbList. Se non hai runtimeConfig.public.siteUrl
// configurato in nuxt.config.ts, usa fallback vuoto (Google accetta
// anche URL relative, ma quelle assolute sono fortemente raccomandate).
const siteUrl = (runtimeConfig.public?.siteUrl as string) || ''

const breadcrumbJsonLd = computed(() => {
  if (!machine.value) return null
  // NB: includiamo SOLO gli elementi "veri" (link o pagina corrente), Home inclusa.
  const items = breadcrumbItems.value.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    // L'item URL è richiesto da Google per ogni voce tranne l'ultima (pagina corrente)
    ...(item.to ? { item: `${siteUrl}${localePath(item.to)}` } : {})
  }))
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
})

const productJsonLd = computed(() => {
  if (!machine.value) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: machine.value.title,
    description: machine.value.description,
    category: `${machine.value.subcategory} / ${machine.value.segment}`,
    brand: {
      '@type': 'Brand',
      name: 'MF TECNO'
    },
    image: machine.value.img
      ? `${siteUrl}${machine.value.img}`
      : undefined,
    sku: machine.value.slug,
    manufacturer: {
      '@type': 'Organization',
      name: 'MASSINI Industries',
      url: siteUrl || undefined
    }
  }
})

useHead(() => ({
  title: machine.value
    ? `${machine.value.title} | MF TECNO Packaging Systems`
    : 'Macchina non trovata | MF TECNO',
  meta: [
    {
      name: 'description',
      content: machine.value?.description ?? ''
    }
  ],
  script: [
    // JSON-LD BreadcrumbList per SEO Google
    ...(breadcrumbJsonLd.value
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(breadcrumbJsonLd.value)
        }]
      : []),
    // JSON-LD Product per rich snippets
    ...(productJsonLd.value
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(productJsonLd.value)
        }]
      : [])
  ]
}))
</script>

<style scoped>
/* ============================================================
   PD = Product Detail
   Palette MF TECNO: #28477D blu · #ED7417 arancione · #1C1C1A
   ============================================================ */

/* ── Reset e base ── */
.pd-page {
  font-family: "Satoshi", sans-serif;
  color: #28477D;
  background-color: #f5f5f5;
}

/* ══════════════════════════════════════════════════
   0. BREADCRUMB — wrapper (il componente ha il suo CSS)
══════════════════════════════════════════════════ */
.pd-breadcrumb-wrap {
  padding: 28px 0 8px;
}

@media (max-width: 767.98px) {
  .pd-breadcrumb-wrap { padding: 18px 0 4px; }
}



.pd-btn-outline-white {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 40px;
  border: 1.5px solid rgba(255,255,255,0.6);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}
.pd-btn-outline-white:hover { background: rgba(255,255,255,0.15); }

.pd-btn-orange {
  display: inline-flex;
  align-items: center;
  background: #ED7417;
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 40px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
.pd-btn-orange:hover { background: #d4640f; }

/* ══════════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════════ */
.pd-hero {
  padding: 60px 0 56px;
  background: #ffffff;
}

.pd-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

@media (max-width: 991.98px) {
  .pd-hero-grid { grid-template-columns: 1fr; gap: 40px; }
}

/* Gallery */
.pd-hero-gallery { display: flex; flex-direction: column; gap: 16px; }

.pd-hero-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(40, 71, 125, 0.06);
}

@media (max-width: 575.98px) {
  .pd-hero-card { padding: 28px; border-radius: 12px; }
}

.pd-hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.pd-hero-thumbs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pd-thumb-btn {
  width: 72px;
  height: 72px;
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  padding: 6px;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1px 4px rgba(40, 71, 125, 0.05);
}
.pd-thumb-btn.active,
.pd-thumb-btn:hover { border-color: #28477D; }
.pd-thumb-btn img { width: 100%; height: 100%; object-fit: contain; }

/* Info destra */
.pd-serie-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ED7417;
  margin-bottom: 10px;
}

.pd-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #28477D;
  line-height: 1.15;
  margin: 0 0 12px;
}

.pd-subtitle {
  font-size: 1rem;
  color: #9D9D9D;
  margin: 0 0 20px;
  font-weight: 400;
  line-height: 1.5;
}

.pd-desc {
  font-size: 0.95rem;
  color: #28477D;
  line-height: 1.8;
  margin: 0 0 24px;
}

.pd-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pd-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  color: #28477D;
  line-height: 1.5;
}

.pd-check-icon {
  color: #28477D;
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.pd-cta-row {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 28px;
}

@media (max-width: 575.98px) {
  .pd-cta-row { gap: 12px; }
  .pd-cta-row > * { width: 100%; justify-content: center; }
}

/* ══════════════════════════════════════════════════
   2. SPECIFICHE RAPIDE
══════════════════════════════════════════════════ */
.pd-specs-bar {
  padding: 56px 0;
  background: #ffffff;
}

.pd-specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
@media (max-width: 767.98px) {
  .pd-specs-grid { grid-template-columns: 1fr; gap: 32px; }
}

.pd-spec-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 0 40px;
  border-right: 1px solid #E8E8E8;
}
.pd-spec-item:first-child { padding-left: 0; }
.pd-spec-item:last-child  { border-right: none; }

.pd-spec-svg {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  margin-top: 2px;
}

.pd-spec-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9D9D9D;
  margin-bottom: 8px;
}

.pd-spec-value {
  display: block;
  font-size: 0.97rem;
  font-weight: 600;
  color: #28477D;
  line-height: 1.55;
}

/* ══════════════════════════════════════════════════
   3. TAB
══════════════════════════════════════════════════ */
.pd-tabs-section {
  padding: 64px 0;
  background: #ffffff;
}

.pd-tabs-bar {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #E8E8E8;
  margin-bottom: 48px;
  overflow-x: auto;
}

.pd-tab-btn {
  background: none;
  border: none;
  padding: 14px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #9D9D9D;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
  font-family: "Satoshi", sans-serif;
}
.pd-tab-btn:hover { color: #28477D; }
.pd-tab-btn.active { color: #28477D; border-bottom-color: #ED7417; }

.pd-tab-content { min-height: 300px; }

.pd-tab-pane { animation: fadeIn 0.2s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.pd-tab-title {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 700;
  color: #28477D;
  margin: 0 0 28px;
}

/* ── Tab Descrizione ── */
.pd-desc-intro {
  margin-bottom: 48px;
}

/* intro testo più grande */
.pd-desc-intro :deep(p) {
  font-size: 1.05rem;
  color: #28477D;
  line-height: 1.85;
  margin: 0 0 14px;
}
.pd-desc-intro :deep(strong) {
  font-weight: 700;
  color: #28477D;
}

.pd-desc-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pd-desc-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 1rem;
  color: #28477D;
  line-height: 1.5;
}

/* Blocco 2 colonne */
.pd-tab-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 48px;
}
@media (max-width: 767.98px) {
  .pd-tab-two-col { grid-template-columns: 1fr; gap: 32px; }
}

/* testo blocco più grande */
.pd-tab-text :deep(p) {
  font-size: 1rem;
  color: #28477D;
  line-height: 1.85;
  margin: 0 0 16px;
}
.pd-tab-text :deep(strong) {
  font-weight: 700;
  color: #28477D;
}

/* Immagine senza riquadro — bordo-radius sottile, ombra leggera */
.pd-tab-img-bare {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 450px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.pd-tab-img-bare-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Sezione chiusura */
.pd-chiusura-section {
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid #E8E8E8;
}
.pd-chiusura-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 767.98px) {
  .pd-chiusura-grid { grid-template-columns: 1fr; gap: 32px; }
}
.pd-chiusura-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #28477D;
  margin: 0 0 16px;
}
.pd-chiusura-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pd-chiusura-list li {
  font-size: 1.3rem;
  color: #28477D;
  line-height: 1.7;
}
.pd-chiusura-note {
  font-size: 1.3rem;
  color: #28477D;
  line-height: 1.8;
  margin: 0 0 10px;
}

/* ── Tab Caratteristiche ── */
.pd-carat-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 767.98px) {
  .pd-carat-layout { grid-template-columns: 1fr; gap: 40px; }
}

.pd-carat-group {
  margin-bottom: 36px;
}
.pd-carat-group:last-child { margin-bottom: 0; }

.pd-carat-group-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #28477D;
  margin: 0 0 16px;
}

.pd-carat-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.pd-carat-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: #28477D;
  line-height: 1.6;
}
.pd-carat-list li .pd-check-icon {
  color: #28477D;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Specifiche tecniche ── */
.pd-specifiche-section {
  margin-top: 48px;
  background: #f4f5f7;
  border-radius: 12px;
  padding: 36px 40px 28px;
}

.pd-specifiche-heading {
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: #28477D;
  margin: 0 0 28px;
}

.pd-specifiche-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.pd-specifiche-group {
  padding: 20px 0;
  border-top: 1px solid #DDE1E8;
}
.pd-specifiche-group:first-child {
  border-top: none;
  padding-top: 0;
}

.pd-specifiche-group-title {
  font-size: 0.78rem;
  font-weight: 700;
  color: #28477D;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 10px;
}

.pd-specifiche-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pd-specifiche-row {
  display: flex;
  gap: 8px;
  font-size: 0.9rem;
  color: #28477D;
  line-height: 1.6;
}

.pd-specifiche-label {
  font-weight: 700;
  min-width: 110px;
  flex-shrink: 0;
}

.pd-specifiche-value {
  font-weight: 400;
}

.pd-specifiche-note {
  margin: 10px 0 0;
  font-size: 0.78rem;
  color: #9D9D9D;
  font-style: italic;
}

@media (max-width: 575.98px) {
  .pd-specifiche-section { padding: 24px 20px 20px; }
  .pd-specifiche-label   { min-width: 90px; }
}

/* Fallback features grid */
.pd-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 575.98px) { .pd-features-grid { grid-template-columns: 1fr; } }

.pd-feat-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  background: #f8f9fb;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  font-size: 0.9rem;
  color: #28477D;
  line-height: 1.5;
}
.pd-feat-icon {
  color: #ED7417;
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Tab Stili di confezione ── */
.pd-stili-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 767.98px) { .pd-stili-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575.98px) { .pd-stili-grid { grid-template-columns: 1fr; } }

/* Card ricca (da dati tabs) */
.pd-stile-card-rich {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 20px 24px;
  border-radius: 16px;
  background: #ffffff;
  transition: background 0.18s ease;
  cursor: default;
}
.pd-stile-card-rich:hover {
  background: #F0F2F5;
}
.pd-stile-img {
  width: 180px;
  height: 220px;
  object-fit: contain;
  margin-bottom: 20px;
}
.pd-stile-title {
  font-size: 1rem;
  font-weight: 700;
  color: #28477D;
  margin: 0 0 8px;
  line-height: 1.3;
}
.pd-stile-desc {
  font-size: 0.85rem;
  color: #9D9D9D;
  line-height: 1.6;
  margin: 0 0 16px;
}
.pd-stile-link {
  display: inline-flex;
  text-decoration: none;
  margin-top: auto;
}
.pd-stile-arrow {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%);
  transition: transform 0.18s ease;
}
.pd-stile-card-rich:hover .pd-stile-arrow { transform: translateX(4px); }

/* Card semplice (fallback tipoInsacco) */
.pd-stile-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 20px;
  background: #f8f9fb;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  font-size: 0.9rem;
  color: #28477D;
  font-weight: 500;
}
.pd-stile-icon {
  color: #28477D;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* ── Tab I tuoi prodotti ── */
.pd-prodotti-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 767.98px) { .pd-prodotti-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575.98px) { .pd-prodotti-grid { grid-template-columns: 1fr; } }

.pd-prodotto-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 20px 24px;
  border-radius: 16px;
  background: #ffffff;
  transition: background 0.18s ease;
  cursor: default;
}
.pd-prodotto-card:hover {
  background: #F0F2F5;
}
.pd-prodotto-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 16px;
}
.pd-prodotto-title {
  font-size: 1rem;
  font-weight: 700;
  color: #28477D;
  margin: 0 0 8px;
}
.pd-prodotto-desc {
  font-size: 0.85rem;
  color: #9D9D9D;
  line-height: 1.6;
  margin: 0 0 16px;
}
.pd-prodotto-card:hover .pd-stile-arrow { transform: translateX(4px); }

/* ── Tab FAQ ── */
.pd-faq-list { display: flex; flex-direction: column; gap: 8px; }

.pd-faq-item {
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  overflow: hidden;
}

.pd-faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: #ffffff;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #28477D;
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  transition: background 0.15s ease;
}
.pd-faq-question:hover { background: #f8f9fb; }
.pd-faq-question.open { color: #ED7417; }
.pd-faq-question i { flex-shrink: 0; font-size: 1.1rem; }

.pd-faq-answer {
  padding: 0 24px 18px;
  background: #ffffff;
}
.pd-faq-answer p {
  margin: 0;
  font-size: 0.9rem;
  color: #28477D;
  line-height: 1.7;
}

/* ══════════════════════════════════════════════════
   4. VIDEO
══════════════════════════════════════════════════ */
.pd-video-section {
  padding: 64px 0;
  background: #f8f9fb;
}

/* Singolo video */
.pd-video-wrap {
  max-width: 860px;
  margin: 0 auto;
}

.pd-video-iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  display: block;
}

/* Gallery video multipli */
.pd-video-gallery {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pd-video-main {
  width: 100%;
}

.pd-video-thumbs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pd-video-thumb-btn {
  position: relative;
  width: 180px;
  flex-shrink: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  background: #000;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.pd-video-thumb-btn:hover {
  transform: translateY(-2px);
  border-color: #28477D;
}
.pd-video-thumb-btn.active {
  border-color: #ED7417;
}

.pd-video-thumb-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.pd-video-thumb-btn:hover .pd-video-thumb-img,
.pd-video-thumb-btn.active .pd-video-thumb-img {
  opacity: 1;
}

.pd-video-thumb-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  pointer-events: none;
  /* trick: usa pseudo-element via bootstrap icon direttamente posizionato */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pd-video-thumb-btn.active .pd-video-thumb-play {
  color: #ED7417;
}

@media (max-width: 767.98px) {
  .pd-video-thumb-btn { width: calc(50% - 6px); }
}
@media (max-width: 480px) {
  .pd-video-thumb-btn { width: 100%; }
}

.pd-video-label {
  text-align: center;
  margin-top: 12px;
  font-size: 0.82rem;
  color: #9D9D9D;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.pd-video-label i { color: #FF0000; font-size: 1rem; }


/* ══════════════════════════════════════════════════
   6. PRODOTTI CORRELATI
══════════════════════════════════════════════════ */
.pd-related-section {
  padding: 80px 0 100px;
  background: #ffffff;
}

/* Header a due colonne */
.pd-related-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 48px;
  align-items: start;
  margin-bottom: 56px;
}
@media (max-width: 767.98px) {
  .pd-related-header { grid-template-columns: 1fr; }
}

.pd-related-main-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #28477D;
  line-height: 1.15;
  margin: 0;
}

.pd-related-main-sub {
  font-size: 1.3rem;
  color: #9D9D9D;
  line-height: 1.7;
  margin: 0;
  padding-top: 8px;
}

/* Griglia card */
.pd-related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 991.98px) { .pd-related-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575.98px)  { .pd-related-grid { grid-template-columns: 1fr; } }

/* Card — nessun bordo, solo hover grigio */
.pd-related-card {
  display: block;
  text-decoration: none;
  border-radius: 16px;
  padding: 28px 24px 24px;
  background: transparent;
  transition: background 0.18s ease;
  cursor: pointer;
}
.pd-related-card:hover {
  background: #EDEDF0;
}

/* Immagine */
.pd-related-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-bottom: 24px;
}
.pd-related-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

/* Info sotto immagine */
.pd-related-info {
  padding: 0;
  text-align: center;
}

.pd-related-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #28477D;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 8px;
  line-height: 1.3;
}

.pd-related-desc {
  font-size: 0.95rem;
  color: #9D9D9D;
  margin: 0 0 12px;
  line-height: 1.6;
}

.pd-related-speed {
  font-size: 1rem;
  font-weight: 700;
  color: #28477D;
  margin: 0 0 14px;
}

/* Freccia centrata */
.pd-related-arrow {
  display: block;
  margin: 0 auto;
  width: 28px;
  height: 28px;
  filter: brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%);
  transition: transform 0.18s ease;
}
.pd-related-card:hover .pd-related-arrow {
  transform: translateX(4px);
}

/* ── Markdown prose ── */
.pd-prose :deep(p) {
  font-size: 1.3rem;
  color: #28477D;
  line-height: 1.8;
  margin: 0 0 12px;
}
.pd-prose :deep(p:last-child) { margin-bottom: 0; }

.pd-prose :deep(strong) {
  font-weight: 700;
  color: #28477D;
}

.pd-prose :deep(ul) {
  padding-left: 20px;
  margin: 0 0 12px;
}
.pd-prose :deep(li) {
  font-size: 0.95rem;
  color: #28477D;
  line-height: 1.7;
  margin-bottom: 4px;
}

/* ── 404 ── */
.pd-not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
}
.pd-not-found h1 { color: #28477D; margin-bottom: 16px; }
.pd-not-found a { color: #ED7417; }
</style>
