<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Single Service Details"
      subtitle="Offering solutions & services to address a spectrum of financial issues"
      page="Services"
      shape="/images/shape/shape_27.svg"
      bg_img="/images/media/img_32.jpg"
      :style_2="true"
      cls="me-xl-4"
    />
    <!-- breadcrumb area end -->

    <!-- service details area start -->
    <service-details-area />
    <!-- service details area end -->

    <!-- fancy banner area start -->
    <fancy-banner-three />
    <!-- fancy banner area end -->

    <!-- news letter area start -->
    <newsletter-one />
    <!-- news letter area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Service Details - Babun" });
</script>
