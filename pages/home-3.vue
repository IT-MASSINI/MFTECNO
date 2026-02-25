<template>
  <div>
    <nuxt-layout name="layout-three">
      <!-- hero banner area start -->
      <hero-banner-three />
      <!-- hero banner area end -->

      <!-- block feature area start -->
      <block-feature-six />
      <!-- block feature area end -->

      <!-- text feature area start -->
      <text-feature-four />
      <!-- text feature area end -->

      <!-- text feature area start -->
      <text-feature-five />
      <!-- text feature area end -->

      <!-- block feature area start -->
      <block-feature-seven />
      <!-- block feature area end -->

      <!-- feedback area start -->
      <feedback-three />
      <!-- feedback area end -->

      <!-- fancy banner area start -->
      <fancy-banner-four />
      <!-- fancy banner area end -->

      <!-- blog area start -->
      <blog-area-three />
      <!-- blog area end -->

      <!-- news letter area start -->
      <newsletter-one />
      <!-- news letter area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Home Three - Babun" });
</script>
