<template>
  <div>
    <nuxt-layout name="layout-seven">
      <div class="box-layout mb-0 position-relative border-40 overflow-hidden">
        <!-- header area start -->
        <header-seven />
        <!-- header area end -->

        <!-- hero banner area start -->
        <hero-banner-seven />
        <!-- hero banner area end -->
      </div>

      <!-- block feature area start -->
      <block-feature-thirteen />
      <!-- block feature area end -->

      <!-- block feature area start -->
      <block-feature-fourteen />
      <!-- block feature area end -->

      <!-- feedback area start -->
      <feedback-seven />
      <!-- feedback area end -->

      <!-- fancy banner area start -->
      <fancy-banner-seven />
      <!-- fancy banner area end -->

      <!-- block feature area start -->
      <block-feature-fifteen />
      <!-- block feature area end -->

      <!-- blog area start -->
      <blog-area-one spacing="mt-150 lg-mt-80 pb-130 lg-pb-80" />
      <!-- blog area end -->

      <!-- fancy banner area start -->
      <fancy-banner-eight />
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Home Seven - Babun" });
</script>
