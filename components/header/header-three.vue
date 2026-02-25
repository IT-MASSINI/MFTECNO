<template>
  <header :class="`theme-main-menu menu-overlay menu-style-three sticky-menu ${isSticky?'fixed':''}`">
    <div class="inner-content">
      <div class="top-header position-relative">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo order-lg-0">
            <nuxt-link to="/" class="d-flex align-items-center">
              <img src="/images/logo/logo_02.svg" alt="" />
            </nuxt-link>
          </div>
          <!-- logo -->
          <div class="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
            <ul class="d-flex align-items-center style-none">
              <li class="d-flex align-items-center login-btn-one">
                <img src="/images/icon/icon_16.svg" alt="icon" class="lazy-img icon me-2"/>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class="fw-500"
                  >
                  Login
                </a>
              </li>
              <li class="d-none d-md-inline-block ms-3 ms-xl-5">
                <nuxt-link href="/contact" class="btn-ten tran3s">Get Started</nuxt-link>
              </li>
            </ul>
          </div>
          <!--/.right-widget-->
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
              <!-- header nav menus -->
              <header-nav-menus />
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
