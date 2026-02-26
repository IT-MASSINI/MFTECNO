<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- hero banner area start -->
      <hero-banner-one />
      <!-- hero banner area end -->

      <!-- text-feature-two start -->
      <text-feature-two></text-feature-two>
      <!-- text-feature-two end -->

      <!-- block-feature-four start -->
      <block-feature-four></block-feature-four>
      <!-- block-feature-four end -->

      <!-- text-feature-three start -->
      <text-feature-three></text-feature-three>
      <!-- text-feature-three end -->

      <!-- block-feature-five start -->
      <block-feature-five></block-feature-five>
      <!-- block-feature-five end -->

      <!-- testimonial-one start -->
      <feedback-one></feedback-one>
      <!-- testimonial-one end -->

      <!-- faq area start -->
      <faq-area-two></faq-area-two>
      <!-- faq area end -->

      <!-- blog-area-one start -->
      <blog-area-one></blog-area-one>
      <!-- blog-area-one end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "MF Tecno" });
</script>
