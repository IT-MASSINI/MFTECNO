<template>
  <div>
    <nuxt-layout name="layout-six">
      <!-- hero banner area start -->
      <hero-banner-six />
      <!-- hero banner area end -->

      <!-- block feature area start -->
      <block-feature-eleven />
      <!-- block feature area end -->

      <!-- block feature area start -->
      <block-feature-twelve />
      <!-- block feature area end -->

      <!-- portfolio area start -->
      <portfolio-two />
      <!-- portfolio area end -->

      <!-- text feature area start -->
      <text-feature-eight :style_2="true" />
      <!-- text feature area end -->

      <!-- fancy banner area start -->
      <fancy-banner-five />
      <!-- fancy banner area end -->

      <!-- feedback area start -->
      <feedback-six />
      <!-- feedback area end -->

      <!-- team area start -->
      <team-area-three />
      <!-- team area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three />
      <!-- fancy banner area end -->

      <!-- news letter area start -->
      <newsletter-one />
      <!-- news letter area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Home Six - Babun" });
</script>
