<template>
  <footer class="mft-footer">

    <!-- ── BLOCCO PRINCIPALE ── -->
    <div class="mft-footer__main">
      <div class="container">
        <div class="row g-4 g-xl-5 justify-content-between">

          <!-- COL 1 — Logo + indirizzo + contatti -->
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="mft-footer__brand">
              <nuxt-link href="/" class="mft-footer__logo-link">
                <img src="/images/logo/logo_mftecno.svg" alt="MF Tecno Packaging Systems" class="mft-footer__logo">
              </nuxt-link>
            </div>

            <address class="mft-footer__address">
              Via del Lavoro, 9<br>
              06083 Bastia Umbra (PG) – Italy
            </address>

            <ul class="mft-footer__contact-list style-none">
              <li>
                <a href="tel:+390758043623" class="mft-footer__contact-link">
                  <i class="bi bi-telephone-fill mft-footer__contact-icon"></i>
                  +39 075 8043623
                </a>
              </li>
              <li>
                <a href="mailto:info@mftecno.com" class="mft-footer__contact-link">
                  <i class="bi bi-envelope-fill mft-footer__contact-icon"></i>
                  info@mftecno.com
                </a>
              </li>
            </ul>
          </div>

          <!-- COL 2 — Menu -->
          <div class="col-xl-2 col-lg-2 col-md-3 col-6">
            <h6 class="mft-footer__col-title">MENU</h6>
            <ul class="mft-footer__nav style-none">
              <li><nuxt-link href="/macchinari">Macchinari</nuxt-link></li>
              <li><nuxt-link href="/i-tuoi-prodotti">I tuoi prodotti</nuxt-link></li>
              <li><nuxt-link href="/stili-di-confezione">Stili di Confezione</nuxt-link></li>
              <li><nuxt-link href="/impianti-completi">Impianti completi</nuxt-link></li>
              <li><nuxt-link href="/chi-siamo">Chi siamo</nuxt-link></li>
            </ul>
          </div>

          <!-- COL 3 — Supporto -->
          <div class="col-xl-2 col-lg-2 col-md-3 col-6">
            <h6 class="mft-footer__col-title">SUPPORTO</h6>
            <ul class="mft-footer__nav style-none">
              <li><nuxt-link href="/assistenza">Assistenza</nuxt-link></li>
              <li><nuxt-link href="/contatti">Contatti</nuxt-link></li>
              <li><nuxt-link href="/news">News</nuxt-link></li>
              <li><nuxt-link href="/live-showroom">Live Showroom</nuxt-link></li>
              <li><nuxt-link href="/careers">Careers</nuxt-link></li>
              <li><nuxt-link href="/faq">FAQ</nuxt-link></li>
            </ul>
          </div>

          <!-- COL 4 — Sedi -->
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="mft-footer__sede mb-30">
              <h6 class="mft-footer__col-title">SEDE USA</h6>
              <address class="mft-footer__sede-address">
                P.O. Box 849<br>
                Hughson, CA 95326<br>
                Tax id # 88-3253807<br>
                Phone: 209-410-3637<br>
                e-mail: <a href="mailto:sales@mftecnousa.com">sales@mftecnousa.com</a>
              </address>
            </div>
            <div class="mft-footer__sede">
              <h6 class="mft-footer__col-title">SEDE BRASILE</h6>
              <address class="mft-footer__sede-address">
                Rua Waldemiro José Borges, 2502,<br>
                Galpão 6, Itinga, Joinville/SC
              </address>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ── SOCIAL + NEWSLETTER ── -->
    <div class="mft-footer__social-row">
      <div class="container">
        <div class="row align-items-start g-4">

          <!-- Social -->
          <div class="col-lg-6">
            <h6 class="mft-footer__col-title">SOCIAL</h6>
            <ul class="mft-footer__social style-none">
              <li><a href="#" aria-label="LinkedIn"  class="mft-footer__social-link"><i class="bi bi-linkedin"></i></a></li>
              <li><a href="#" aria-label="YouTube"   class="mft-footer__social-link"><i class="bi bi-youtube"></i></a></li>
              <li><a href="#" aria-label="Instagram" class="mft-footer__social-link"><i class="bi bi-instagram"></i></a></li>
              <li><a href="#" aria-label="Facebook"  class="mft-footer__social-link"><i class="bi bi-facebook"></i></a></li>
              <li><a href="#" aria-label="TikTok"    class="mft-footer__social-link"><i class="bi bi-tiktok"></i></a></li>
              <li><a href="#" aria-label="WhatsApp"  class="mft-footer__social-link"><i class="bi bi-whatsapp"></i></a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="col-lg-6">
            <h6 class="mft-footer__col-title">NEWSLETTER</h6>
            <div class="mft-footer__newsletter">
              <input
                type="email"
                placeholder="Inserisci la tua email"
                class="mft-footer__newsletter-input"
                aria-label="Email newsletter"
              >
              <button class="mft-footer__newsletter-btn" aria-label="Iscriviti">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ── BRAND BAR ── -->
    <div class="mft-footer__brand-bar">
      <div class="container">
        <nuxt-link href="https://www.massiniindustries.com" target="_blank" class="mft-footer__massini-logo-link">
          <img src="/images/logo/massini-logo.png" alt="Massini Industries" class="mft-footer__massini-logo">
        </nuxt-link>
      </div>
    </div>

    <!-- ── COPYRIGHT BAR ── -->
    <div class="mft-footer__copyright-bar">
      <div class="container d-flex flex-wrap align-items-center justify-content-between gap-2">
        <p class="mft-footer__copyright-text mb-0">
          Copyright @2026
          <a href="https://massiniindustries.com" target="_blank">MASSINI INDUSTRIES</a>,
          all rights reserved.
        </p>
        <ul class="mft-footer__legal style-none d-flex align-items-center flex-wrap">
          <li><nuxt-link href="/privacy">Privacy &amp; Terms</nuxt-link></li>
          <li><nuxt-link href="/cookies">Cookies</nuxt-link></li>
          <li><nuxt-link href="/governance">Governance</nuxt-link></li>
          <li><nuxt-link href="/whistlelink">Whistlelink</nuxt-link></li>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ── Voci menu nav (MENU + SUPPORTO) ── */
.mft-footer__nav a {
  transition: color 0.2s ease;
}
.mft-footer__nav a:hover {
  color: var(--mft-orange, #ED7417) !important;
}

/* ── Link contatti (telefono + email) ── */
.mft-footer__contact-link {
  transition: color 0.2s ease;
}
.mft-footer__contact-link:hover {
  color: var(--mft-orange, #ED7417) !important;
}

/* ── Link sedi (email USA) ── */
.mft-footer__sede-address a {
  transition: color 0.2s ease;
}
.mft-footer__sede-address a:hover {
  color: var(--mft-orange, #ED7417) !important;
}

/* ── Social icons ── */
.mft-footer__social-link {
  transition: color 0.2s ease;
}
.mft-footer__social-link:hover {
  color: var(--mft-orange, #ED7417) !important;
}

/* ── Link copyright bar + legal ── */
.mft-footer__copyright-text a,
.mft-footer__legal a {
  transition: color 0.2s ease;
}
.mft-footer__copyright-text a:hover,
.mft-footer__legal a:hover {
  color: var(--mft-orange, #ED7417) !important;
}
</style>
