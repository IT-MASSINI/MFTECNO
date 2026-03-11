<!-- Stili in: mftecno.css (globale) -->
<template>
	<header :class="`theme-main-menu menu-overlay menu-style-two sticky-menu ${isSticky ? 'fixed' : ''} ${isLightMode && !isSticky ? 'force-light' : ''}`">

		<!-- ================================================
		     TOP BAR — Assistenza · Contatti · News · Social
		     ================================================ -->
		<div class="gap-fix info-row">
			<div class="d-flex justify-content-end align-items-center">

				<!-- Link rapidi -->
				<nav class="top-nav-links d-none d-lg-flex align-items-center gap-4">
					<nuxt-link :to="localePath('/assistenza-mf-tecno')" class="top-link">Assistenza</nuxt-link>
					<nuxt-link :to="localePath('/contatti')"            class="top-link">Contatti</nuxt-link>
					<nuxt-link :to="localePath('/blog/news')"           class="top-link">News</nuxt-link>
					<nuxt-link :to="localePath('/showroom')"            class="top-link">Live Showroom</nuxt-link>
					<nuxt-link :to="localePath('/careers')"             class="top-link">Careers</nuxt-link>
					<nuxt-link :to="localePath('/faq-mftecno')"         class="top-link">FAQ</nuxt-link>
				</nav>

				<div class="top-separator d-none d-lg-block mx-3"></div>

				<!-- Icone social -->
				<ul class="style-none d-none d-lg-flex align-items-center social-icons gap-2">
					<li><a href="https://www.linkedin.com/company/mf-tecno-srl" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></li>
					<li><a href="https://www.youtube.com/user/MFtecnoPackaging" target="_blank" rel="noopener" aria-label="YouTube"><i class="bi bi-youtube"></i></a></li>
					<li><a href="https://www.instagram.com/mftecno.packaging.systems" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a></li>
					<li><a href="https://www.facebook.com/MF-TECNO-Packaging-Systems-306054389875305/" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a></li>
					<li><a href="https://www.tiktok.com/@mftecnopackagingsystems" target="_blank" rel="noopener" aria-label="TikTok"><i class="bi bi-tiktok"></i></a></li>
					<li><a href="https://api.whatsapp.com/send?phone=393440721984" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a></li>
				</ul>

				<div class="top-separator d-none d-lg-block mx-3"></div>

				<!-- Selettore lingua dropdown -->
				<div class="lang-dropdown d-none d-lg-block" ref="langRef">
					<button
						class="lang-trigger d-flex align-items-center gap-1"
						type="button"
						data-bs-toggle="dropdown"
						data-bs-auto-close="true"
            data-bs-display="static"
						aria-expanded="false"
					>
						<img
							:src="`https://flagcdn.com/16x12/${currentLang.iso}.png`"
							:alt="currentLang.label"
							class="flag-img"
						/>
						<span class="lang-label">{{ currentLang.code }}</span>
						<i class="bi bi-chevron-down lang-arrow"></i>
					</button>

					<ul class="dropdown-menu lang-menu">
						<li v-for="lang in languages" :key="lang.code">
							<a
								class="dropdown-item lang-item"
								:href="`/${lang.prefix}/`"
								:class="{ active: currentLang.code === lang.code }"
								@click.prevent="switchLang(lang)"
							>
								<img
									:src="`https://flagcdn.com/16x12/${lang.iso}.png`"
									:alt="lang.label"
									class="flag-img me-2"
								/>
								<span class="lang-code">{{ lang.code }}</span>
							</a>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<!-- ================================================
		     MAIN HEADER — Logo · Menu · Cerca · Preventivo
		     ================================================ -->
		<div class="inner-content gap-fix">
			<div class="top-header position-relative">
				<div class="d-flex align-items-center">

					<!-- ==========================================
					     LOGO — Gestione completa responsive + white
					     
					     Logica:
					     - .logo-full    → visibile da tablet in su (≥768px)
					     - .logo-small   → visibile solo su mobile (<768px)
					     
					     Varianti sorgente (via computed):
					     - Non sticky → versioni _w (bianche, sopra hero/immagine)
					     - Sticky     → versioni standard (colorate, su sfondo bianco)
					     
					     Scala CSS:
					     - ≥1200px  → scale(1.3)
					     - 840-1199 → scale(1.0)
					     - 768-839  → scale(0.85)
					     - <768px   → dimensione naturale SVG small
					     ========================================== -->
					<div class="logo order-lg-0">
						<nuxt-link :to="localePath('/')" class="d-flex align-items-center logo-link">

							<!-- Logo completo: tablet + desktop -->
							<img
								:src="logoFullSrc"
								alt="MF TECNO Logo"
								class="logo-full"
								width="160"
								height="48"
							/>

							<!-- Logo piccolo: solo mobile -->
							<img
								:src="logoSmallSrc"
								alt="MF TECNO"
								class="logo-small"
								width="40"
								height="40"
							/>

						</nuxt-link>
					</div>

					<!-- Right widget: lente + preventivo -->
					<div class="right-widget order-lg-3 ms-auto">
						<ul class="d-flex align-items-center style-none gap-3">

							<!-- Lente ricerca -->
							<li class="search-btn-wrap">
								<button
									class="search-btn"
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#searchModal"
									aria-label="Cerca"
								>
									<i class="bi bi-search"></i>
								</button>
							</li>

							<!-- Bottone Preventivo Gratuito -->
							<li class="d-none d-md-inline-flex">
								<nuxt-link :to="localePath('/richiesta/?tiporich=4')" :class="`preventivo-btn ${isLightMode ? 'dark' : ''}`">
									Preventivo Gratuito
								</nuxt-link>
							</li>

						</ul>
					</div>

					<!-- Navbar -->
					<nav class="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
						<button
							class="navbar-toggler d-block d-lg-none"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<header-nav-menus />
						</div>
					</nav>

				</div>
			</div>
		</div>

	</header>

	<!-- Search Modal -->
	<div class="modal fade" id="searchModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content search-modal-content">
				<div class="modal-body p-4">
					<div class="search-input-wrap d-flex align-items-center gap-3">
						<i class="bi bi-search search-icon-lg"></i>
						<input
							type="text"
							class="search-input"
							placeholder="Cerca macchinari, soluzioni, prodotti..."
						/>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Chiudi"></button>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
import type { Locale } from 'vue-i18n'
// Prop opzionale: se true, forza sempre la modalità "sticky" (logo colorato, testo scuro)
// Utile per pagine senza hero image (es. pagina 404/error)
const props = withDefaults(defineProps<{ forceSticky?: boolean }>(), {
  forceSticky: false
})

const { isSticky } = useSticky()

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const currentLang = computed(() => {
  const isoMap: Record<string, string> = { it: 'it', en: 'gb', es: 'es', br: 'br', fr: 'fr', de: 'de' }
  return {
    code: locale.value.toUpperCase(),
    iso: isoMap[locale.value] ?? locale.value,
    label: locales.value.find((l: any) => l.code === locale.value)?.name ?? locale.value,
  }
})

const languages = computed(() =>
  (locales.value as any[]).map(l => ({
    code: l.code.toUpperCase(),
    prefix: l.code,
    iso: ({ it:'it', en:'gb', es:'es', br:'br', fr:'fr', de:'de' } as any)[l.code] ?? l.code,
    label: l.name,
  }))
)

const switchLang = (lang: { prefix: string }) => setLocale(lang.prefix as Locale)

// Risolve lo stato "sticky" considerando anche la prop forceSticky
const isLightMode = computed(() => isSticky.value || props.forceSticky)

// ── Logo: bianco su hero, colorato su sticky o forceSticky ─
const logoFullSrc = computed(() =>
  isLightMode.value
    ? '/images/logo/logo_mftecno.svg'
    : '/images/logo/logo_mftecno_w.svg'
)
const logoSmallSrc = computed(() =>
  isLightMode.value
    ? '/images/logo/logo_mftecno_small.svg'
    : '/images/logo/logo_mftecno_w_small.svg'
)
</script>

