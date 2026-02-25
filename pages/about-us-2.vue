<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- breadcrumb area start -->
      <breadcrumb-two
        title="We're Award Winner Finance inc"
        subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
        page="About us"
        col="col-xl-8 col-lg-9"
        :style_2="true"
      />
      <!-- breadcrumb area end -->

      <!-- about v2 area start -->
      <about-us-two-area></about-us-two-area>
      <!-- about v2 area end -->

      <!-- feedback area start -->
      <feedback-four spacing="0" />
      <!-- feedback area end -->

      <!-- fancy banner start -->
      <fancy-banner-five :style_3="true" />
      <!-- fancy banner end -->

      <!-- faq area start -->
      <faq-area-one spacing="mt-150 lg-mt-80" />
      <!-- faq area end -->

      <!-- blog area start -->
      <blog-area-one spacing="mt-150 lg-mt-80 pb-150 lg-pb-80" />
      <!-- blog area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "About us v2 - Babun" });
</script>
