<template>
  <div>
    <nuxt-layout name="layout-five">
      <!-- hero banner area start -->
      <hero-banner-five />
      <!-- hero banner area end -->

      <!-- partner logo area start -->
      <partner-logo-two />
      <!-- partner logo area end -->

      <div class="light-bg-page-wrapper">
        <!-- block feature area start -->
        <block-feature-nine />
        <!-- block feature area end -->

        <!-- portfolio area start -->
        <portfolio-one />
        <!-- portfolio area end -->

        <!-- feedback area start -->
        <feedback-five />
        <!-- feedback area end -->

        <!-- team area start -->
        <team-area-two />
        <!-- team area end -->

        <!-- blog area start -->
        <blog-area-five />
        <!-- blog area end -->
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Home Five - Babun" });
</script>
