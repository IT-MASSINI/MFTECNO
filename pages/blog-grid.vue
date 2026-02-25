<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- breadcrumb area start -->
      <breadcrumb-two
        page="Blog"
        title="Explore our News"
        subtitle="Find the team members details here with all the information"
      />
      <!-- breadcrumb area end -->

      <!-- blog area start -->
      <blog-grid-area />
      <!-- blog area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Blog Grid - Babun" });
</script>
