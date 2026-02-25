<template>
  <div>
    <nuxt-layout name="layout-four">
      <!-- hero banner area start -->
      <hero-banner-four />
      <!-- hero banner area end -->

      <!-- text feature area start -->
      <text-feature-six />
      <!-- text feature area end -->

      <!-- block feature area start -->
      <block-feature-eight />
      <!-- block feature area end -->

      <!-- text feature area start -->
      <text-feature-seven />
      <!-- text feature area end -->

      <!-- text feature area start -->
      <text-feature-eight />
      <!-- text feature area end -->

      <!-- text feature area start -->
      <text-feature-nine />
      <!-- text feature area end -->

      <!-- feedback area start -->
      <feedback-four />
      <!-- feedback area end -->

      <!-- blog area start -->
      <blog-area-four />
      <!-- blog area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Home Four - Babun" });
</script>
