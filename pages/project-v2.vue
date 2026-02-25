<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- breadcrumb area start -->
      <breadcrumb-two
        title="Our Most Recent Projects"
        subtitle="Offering solutions & services to address a of financial issues"
        page="Project"
        col="col-lg-8"
      />
      <!-- breadcrumb area end -->

      <!-- project area start -->
      <project-v2-area />
      <!-- project area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Project v2 - Babun" });
</script>
