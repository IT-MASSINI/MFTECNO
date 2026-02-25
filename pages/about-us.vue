<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="We’r top rated company"
      subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
      page="About Us"
      bg_img="/images/media/img_26.jpg"
      shape="/images/shape/shape_25.svg"
      :style_2="true"
    />
    <!-- breadcrumb area end -->

    <!-- about us area start -->
    <about-us-area />
    <!-- about us area end -->

    <!-- feedback area start -->
    <feedback-two spacing="top-border pt-80 pb-80" />
    <!-- feedback area end -->

    <!-- partner logo start  -->
    <div class="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
      <div class="container">
        <partner-slider-one />
      </div>
    </div>
    <!-- partner logo end  -->

    <!-- team area start -->
    <team-area-three />
    <!-- team area end -->

    <!-- blog area start -->
    <blog-area-four spacing="mt-180 lg-mt-80 mb-180 lg-mb-80" />
    <!-- blog area end -->

    <!-- fancy banner area start -->
    <fancy-banner-three />
    <!-- fancy banner area end -->

    <!-- news letter area start -->
    <newsletter-one />
    <!-- news letter area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "About us - Babun" });
</script>
