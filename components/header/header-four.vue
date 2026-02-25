<template>
  <header
    :class="`theme-main-menu menu-overlay menu-style-four white-vr sticky-menu ${isSticky?'fixed':''}`"
  >
    <div class="inner-content position-relative">
      <div class="top-header">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo order-lg-0">
            <nuxt-link href="/" class="d-flex align-items-center">
              <img src="/images/logo/logo_01.svg" alt="" />
            </nuxt-link>
          </div>
          <!-- logo -->
          <div class="right-widget d-none d-md-block ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
            <nuxt-link href="/contact" class="btn-twelve tran3s">Get Started</nuxt-link>
          </div>
          <!--/.right-widget-->
          <nav class="navbar navbar-expand-lg p0 order-lg-2">
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
              <!-- header nav menus -->
              <header-nav-menus logo="/images/logo/logo_01.svg" />
              <!-- header nav menus -->
            </div>
          </nav>
        </div>
      </div>
      <!--/.top-header-->
    </div>
  </header>
   
  <!-- login modal -->
  <popup-login/>
  <!-- login modal -->

</template>

<script setup lang="ts">
const { isSticky } = useSticky();
</script>
