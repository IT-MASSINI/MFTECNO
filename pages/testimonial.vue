<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Our clients word"
      subtitle="Check what’s our client say about us and explore their thought’s."
      page="Testimonials"
      bg_img="/images/media/img_32.jpg"
      shape="/images/shape/shape_32.svg"
      :style_2="true"
      cls="me-xl-4"
    />
    <!-- breadcrumb area end -->

    <!-- feedback four area start -->
    <feedback-four spacing="mt-150 lg-mt-80" />
    <!-- feedback four area end -->

    <!-- feedback two area start -->
    <feedback-two spacing="border-0 pt-80 pb-80" />
    <!-- feedback two area end -->

    <!-- feedback five area start -->
    <feedback-five border="0" />
    <!-- feedback five area end -->

    <!-- feedback three area start -->
    <feedback-three
      spacing="pt-180 lg-pt-100 pb-180 md-pb-80"
      :bottom_slider="false"
    />
    <!-- feedback three area end -->

    <!-- fancy banner area start -->
    <fancy-banner-three />
    <!-- fancy banner area end -->

    <!-- news letter area start -->
    <newsletter-one />
    <!-- news letter area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Testimonial - Babun" });
</script>
