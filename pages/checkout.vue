<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- checkout area start -->
      <checkout-area />
      <!-- checkout area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Checkout - Babun" });
</script>
