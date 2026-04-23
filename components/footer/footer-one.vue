<template>
  <footer class="mft-footer">

    <!-- ── BLOCCO PRINCIPALE ── -->
    <div class="mft-footer__main">
      <div class="container">
        <div class="row g-4 g-xl-5 justify-content-between">

          <!-- COL 1 — Logo + indirizzo + contatti -->
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="mft-footer__brand" style="margin-bottom: 12px;">
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
                <a href="tel:+390758043623" class="mft-footer__contact-link mft-footer__contact-phone">
                  <img src="/images/icon/phone-icon.svg" alt="" class="mft-footer__contact-icon" aria-hidden="true">
                  +39 075 8043623
                </a>
              </li>
              <li>
                <a href="mailto:info@mftecno.com" class="mft-footer__contact-link mft-footer__contact-email">
                  <img src="/images/icon/mail-icon.svg" alt="" class="mft-footer__contact-icon" aria-hidden="true">
                  info@mftecno.com
                </a>
              </li>
            </ul>
          </div>

          <!-- COL 2 — Menu -->
          <div class="col-xl-2 col-lg-2 col-md-3 col-6">
            <h6 class="mft-footer__col-title">Menu</h6>
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
            <h6 class="mft-footer__col-title">Supporto</h6>
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
              <h6 class="mft-footer__col-title">Sede Usa</h6>
              <address class="mft-footer__sede-address">
                P.O. Box 849<br>
                Hughson, CA 95326<br>
                Tax id # 88-3253807<br>
                Phone: 209-410-3637<br>
                e-mail: <a href="mailto:sales@mftecnousa.com">sales@mftecnousa.com</a>
              </address>
            </div>
            <div class="mft-footer__sede">
              <h6 class="mft-footer__col-title">Sede Brasile</h6>
              <address class="mft-footer__sede-address">
                Rua Waldemiro José Borges, 2502,<br>
                Galpão 6, Itinga, Joinville/SC
              </address>
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

        <!-- Legal links centrato -->
        <ul class="mft-footer__legal style-none d-flex align-items-center flex-wrap">
          <li><nuxt-link href="/privacy">Privacy &amp; Terms</nuxt-link></li>
          <li><nuxt-link href="/cookies">Cookies</nuxt-link></li>
          <li><nuxt-link href="/governance">Governance</nuxt-link></li>
          <li><nuxt-link href="/whistlelink">Whistlelink</nuxt-link></li>
        </ul>

        <!-- Social icons a destra -->
        <ul class="mft-footer__social style-none d-flex align-items-center">
          <li><a href="#" aria-label="LinkedIn"  class="mft-footer__social-link"><i class="bi bi-linkedin"></i></a></li>
          <li><a href="#" aria-label="YouTube"   class="mft-footer__social-link"><i class="bi bi-youtube"></i></a></li>
          <li><a href="#" aria-label="Instagram" class="mft-footer__social-link"><i class="bi bi-instagram"></i></a></li>
          <li><a href="#" aria-label="Facebook"  class="mft-footer__social-link"><i class="bi bi-facebook"></i></a></li>
          <li><a href="#" aria-label="TikTok"    class="mft-footer__social-link"><i class="bi bi-tiktok"></i></a></li>
          <li><a href="#" aria-label="WhatsApp"  class="mft-footer__social-link"><i class="bi bi-whatsapp"></i></a></li>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ── Sfondo footer ── */
.mft-footer {
  background-color: #f5f5f5 !important;
}

/* ── Blocco principale ── */
.mft-footer__main {
  padding-top: 60px;
  padding-bottom: 48px;
}

/* ── Titoli colonna footer (Menu, Supporto, Sede Usa, Sede Brasile) ──
   Override: niente uppercase, niente trattino decorativo sotto. */
.mft-footer__col-title {
  text-transform: none !important;   /* rispetta il casing del template */
  letter-spacing: normal !important; /* annulla spaziatura da stile uppercase del tema */
}
.mft-footer__col-title::before,
.mft-footer__col-title::after {
  content: none !important;          /* rimuove il trattino celeste sotto il titolo */
  display: none !important;
  background: none !important;
  border: none !important;
}

/* ── Voci menu nav (MENU + SUPPORTO) — leggermente più grandi ── */
.mft-footer__nav a {
  font-size: 1rem !important;
  transition: color 0.2s ease;
}
.mft-footer__nav a:hover {
  color: #48cbff !important;
}

/* ── Link contatti: colore grigio-blu ── */
.mft-footer__contact-link {
  color: #757b85 !important;
  transition: color 0.2s ease;
}
.mft-footer__contact-link:hover {
  color: #48cbff !important;
}

/* ── Indirizzo sotto il logo ── */
.mft-footer__address {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 20px;
  font-style: normal; /* rimuove il corsivo default di <address> */
  color: inherit;
}

/* ── Telefono: grande e ben visibile ── */
.mft-footer__contact-phone {
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ── Email: grande e sottolineata ── */
.mft-footer__contact-email {
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  text-decoration: underline !important;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ── Icone SVG contatti ── */
.mft-footer__contact-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: contain;
}

/* ── Indirizzi sedi: testo più piccolo ── */
.mft-footer__sede-address {
  font-size: 0.8rem !important;
}

/* ── Link sedi (email USA) ── */
.mft-footer__sede-address a {
  font-size: 0.8rem !important;
  transition: color 0.2s ease;
}
.mft-footer__sede-address a:hover {
  color: #48cbff !important;
}

/* ── Social icons ── */
.mft-footer__social {
  gap: 4px;
  margin: 0;
  padding: 0;
}
.mft-footer__social li {
  list-style: none;
}
.mft-footer__social-link {
  transition: color 0.2s ease;
  font-size: 1.1rem;
  padding: 4px 6px;
  display: flex;
  align-items: center;
}
.mft-footer__social-link:hover {
  color: #48cbff !important;
}

/* ── Logo Massini ── */
.mft-footer__massini-logo {
  max-height: 40px !important;
  width: auto !important;
}

/* ── Brand bar: nessuna riga separatrice ── */
.mft-footer__brand-bar {
  padding-top: 32px !important;
  padding-bottom: 1px !important;
  margin-top: 8px;
}

/* ── Copyright bar: tre elementi equidistanti ── */
.mft-footer__copyright-bar {
  padding-top: 1px !important;
  padding-bottom: 16px !important;
}

/* Override Bootstrap justify-content-between:
   copyright a sx, legal al centro, social a dx */
.mft-footer__copyright-bar .container {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap;
  gap: 8px;
}

/* ── Legal links ── */
.mft-footer__legal {
  gap: 0;
  margin: 0 auto !important; /* centra tra copyright e social */
  padding: 0;
}
.mft-footer__legal li {
  list-style: none;
}
.mft-footer__legal li + li::before {
  content: '|';
  margin: 0 6px;
  opacity: 0.4;
}

/* ── Link copyright bar + legal ── */
.mft-footer__copyright-text a,
.mft-footer__legal a {
  transition: color 0.2s ease;
}
.mft-footer__copyright-text a:hover,
.mft-footer__legal a:hover {
  color: #48cbff !important;
}

/* ════════════════════════════════════════════════════
   RESPONSIVE — MOBILE / TABLET (≤ 768px)
   Copyright bar su 3 righe:
   1) Copyright allineato a sinistra
   2) Legal links tutti su una riga (con separatori)
   3) Social icons tutti su una riga
   ════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* Container copyright: da riga singola → colonna,
     ogni figlio occupa la larghezza piena */
  .mft-footer__copyright-bar .container {
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    gap: 14px !important;
    text-align: left;
  }

  /* 1) Copyright allineato a sinistra */
  .mft-footer__copyright-text {
    text-align: left !important;
    width: 100%;
    margin: 0 !important;
  }

  /* 2) Legal links: forza riga unica, centrati,
        nessun a-capo, separatori | visibili.
        FIX: il tema Babun applica display:block agli <li> dei footer,
        va forzato inline-flex per farli stare in riga. */
  .mft-footer__legal {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;      /* tutto sulla stessa riga */
    justify-content: center !important;
    align-items: center !important;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
    list-style: none !important;
  }
  .mft-footer__legal li {
    display: inline-flex !important;   /* override display:block ereditato */
    align-items: center !important;
    white-space: nowrap !important;    /* nessun wrap sul testo del singolo link */
    width: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    flex: 0 0 auto !important;         /* niente shrink né grow, larghezza naturale */
  }
  .mft-footer__legal li a {
    white-space: nowrap !important;
    padding: 0 !important;
    font-size: 0.82rem;                /* compatto per entrare su 375px */
    line-height: 1.4;
  }
  .mft-footer__legal li + li::before {
    content: '|';
    display: inline-block;
    margin: 0 7px !important;          /* separatore | */
    opacity: 0.4;
  }

  /* 3) Social icons: tutti in riga, centrati.
        Stesso fix anti display:block del tema Babun. */
  .mft-footer__social {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100%;
    gap: 10px !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }
  .mft-footer__social li {
    display: inline-flex !important;
    width: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    flex: 0 0 auto !important;
  }
}

/* Breakpoint molto stretto (< 380px):
   se i legal links non ci stanno, riduci ulteriormente */
@media (max-width: 380px) {
  .mft-footer__legal li a {
    font-size: 0.74rem !important;
  }
  .mft-footer__legal li + li::before {
    margin: 0 4px !important;
  }
  .mft-footer__social {
    gap: 6px !important;
  }
}
</style>
