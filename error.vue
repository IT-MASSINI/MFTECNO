<template>
  <div class="main-page-wrapper error-page-wrapper">
    <!-- force-sticky: forza logo colorato e menu in modalità chiara -->
    <header-one :force-sticky="true"></header-one>

    <main>
      <div class="error-page text-center d-flex align-items-center justify-content-center flex-column light-bg position-relative">
        <h1 class="font-magnita">{{ error.statusCode }}</h1>
        <h2 class="fw-bold">{{ error.message }}</h2>
        <p class="text-lg mb-45">The page you are looking for may have been moved or is no longer available.</p>
        <div><nuxt-link :to="localePath('/')" class="btn-four">Go Back</nuxt-link></div>
        <!-- Immagini decorative rimosse -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
definePageMeta({ layout: false });
useSeoMeta({ title: "Error - MF Tecno" });
defineProps(["error"]);
</script>

<style>
/*
  Stili pagina errore: header forzato in modalità "light" (sfondo bianco, tutto blu navy).
  Non scoped perché dobbiamo sovrascrivere stili dentro header-one e header-nav-menus.
*/

/* ── Header: sfondo bianco ── */
.error-page-wrapper .theme-main-menu,
.error-page-wrapper .theme-main-menu.force-light {
  background: #ffffff !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

/* ── Voci menu principale (nav-link) ── */
.error-page-wrapper .navbar-nav .nav-link,
.error-page-wrapper .navbar-nav .nav-link.dropdown-toggle {
  color: #28477D !important;
}
.error-page-wrapper .navbar-nav .nav-link:hover,
.error-page-wrapper .navbar-nav .nav-link:focus,
.error-page-wrapper .navbar-nav .nav-link.active {
  color: #1a3260 !important;
}

/* Freccia dropdown toggle */
.error-page-wrapper .navbar-nav .nav-link.dropdown-toggle::after {
  border-top-color: #28477D !important;
  border-color: #28477D transparent transparent transparent !important;
}

/* ── Top-link (Assistenza, Contatti, ecc.) ── */
.error-page-wrapper .top-link {
  color: rgba(40, 71, 125, 0.75) !important;
}
.error-page-wrapper .top-link:hover {
  color: #28477D !important;
}

/* ── Social icons ── */
.error-page-wrapper .social-icons a {
  color: rgba(40, 71, 125, 0.65) !important;
}
.error-page-wrapper .social-icons a:hover {
  color: #28477D !important;
}

/* ── Top separator ── */
.error-page-wrapper .top-separator {
  background: rgba(40, 71, 125, 0.20) !important;
}

/* ── Top bar border ── */
.error-page-wrapper .info-row {
  border-bottom: 1px solid rgba(40, 71, 125, 0.15) !important;
}

/* ── Lente di ricerca ── */
.error-page-wrapper .search-btn .bi-search {
  color: #1C1C1A !important;
}

/* ── Lang trigger ── */
.error-page-wrapper .lang-label {
  color: rgba(28, 28, 26, 0.75) !important;
}
.error-page-wrapper .lang-arrow {
  color: rgba(28, 28, 26, 0.45) !important;
}

/* ── Hamburger mobile ── */
.error-page-wrapper .navbar-toggler span,
.error-page-wrapper .navbar-toggler span::before,
.error-page-wrapper .navbar-toggler span::after {
  background-color: #28477D !important;
}
</style>
