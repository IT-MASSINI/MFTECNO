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

				<!-- Selettore lingua dropdown (gestito in Vue, no Bootstrap JS) -->
				<div class="lang-dropdown d-none d-lg-block" ref="langRef">
					<button
						class="lang-trigger d-flex align-items-center gap-1"
						type="button"
						:aria-expanded="langOpen"
						@click.stop="langOpen = !langOpen"
					>
						<img
							:src="`https://flagcdn.com/${currentLang.iso}.svg`"
							:alt="currentLang.label"
							class="flag-img"
						/>
						<span class="lang-label">{{ currentLang.code }}</span>
						<i class="bi bi-chevron-down lang-arrow" :class="{ 'rotated': langOpen }"></i>
					</button>

					<ul class="lang-menu" :class="{ 'show': langOpen }">
						<li v-for="lang in languages" :key="lang.code">
							<a
								class="lang-item"
								:href="`/${lang.prefix}/`"
								:class="{ active: currentLang.code === lang.code }"
								@click.prevent="switchLang(lang); langOpen = false"
							>
								<img
									:src="`https://flagcdn.com/${lang.iso}.svg`"
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
				<!-- ══════════════════════════════════════════════════════
				     STRUTTURA: logo | [menu desktop] | right-actions
				     right-actions contiene SEMPRE: lente + preventivo + hamburger
				     Così tutto il blocco azioni è sempre allineato a destra.
				     ══════════════════════════════════════════════════════ -->
				<div class="header-inner-row">

					<!-- LOGO -->
					<div class="logo">
						<nuxt-link :to="localePath('/')" class="d-flex align-items-center logo-link">
							<img :src="logoFullSrc"   alt="MF TECNO Logo" class="logo-full"  />
							<img :src="logoSmallSrc"  alt="MF TECNO"      class="logo-small" />
						</nuxt-link>
					</div>

					<!-- MENU DESKTOP (collassa su mobile, visibile ≥992px) -->
					<nav class="navbar navbar-expand-lg header-nav">
						<div class="collapse navbar-collapse" id="navbarNav">
							<header-nav-menus />
						</div>
					</nav>

					<!-- AZIONI DESTRA: lente + preventivo + hamburger -->
					<div class="header-actions">

						<!-- Lente ricerca — sempre visibile -->
						<button
							class="search-btn"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#searchModal"
							aria-label="Cerca"
						>
							<i class="bi bi-search"></i>
						</button>

						<!-- Bottone Preventivo — sempre visibile, testo adattivo -->
						<nuxt-link
							:to="localePath('/richiesta/?tiporich=4')"
							:class="`btn-cyano d-none d-lg-inline-flex ${isLightMode ? 'dark' : ''}`"
							>
							<span class="preventivo-full">Preventivo Gratuito</span>
							<span class="preventivo-short">Preventivo</span>
						</nuxt-link>

						<!-- Hamburger "tre pallini + MENU" — solo mobile (<992px) -->
						<button
						class="navbar-toggler hamburger-dots"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Apri menu"
						>
							<span class="dots-row" aria-hidden="true">
								<span class="dot"></span>
								<span class="dot"></span>
								<span class="dot"></span>
							</span>
							<span class="dots-label dots-label--open">MENU</span>
							<span class="dots-label dots-label--close">CHIUDI</span>
						</button>

					</div>

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

// ── Stato dropdown lingua (gestito in Vue, no Bootstrap JS) ─
const langOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)

// Chiude il menu cliccando fuori
const onClickOutside = (e: MouseEvent) => {
    if (langRef.value && !langRef.value.contains(e.target as Node)) {
        langOpen.value = false
    }
}
// Chiude con ESC
const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') langOpen.value = false
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeydown)
})

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
