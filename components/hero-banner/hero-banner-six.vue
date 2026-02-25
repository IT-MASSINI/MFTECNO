<template>
  <div class="hero-banner-six pt-170 md-pt-110 position-relative">
    <div class="container position-relative">
      <div class="row justify-content-between">
        <div class="col-md-6 wow fadeInLeft">
          <div class="pt-20 pb-50">
            <h1 class="hero-heading fw-bold">
              Delivers more, not just marketing.
            </h1>
            <p class="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
              Unlock your business's growth potential with a marketing agency's
              expertise.
            </p>
            <div class="d-flex flex-wrap">
              <nuxt-link href="/contact" class="btn-eighteen tran3s me-4 mt-10">Contact</nuxt-link>
              <nuxt-link href="/contact" class="btn-nineteen tran3s mt-10">Let’s Get Started</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-md-flex justify-content-end wow fadeInRight">
          <div class="media-wrapper position-relative ms-lg-5">
            <img src="/images/assets/screen_22.svg" alt="" class="lazy-img shapes screen_01"/>
            <img src="/images/assets/screen_23.png" alt="" class="lazy-img shapes screen_02"/>
            <img src="/images/shape/shape_43.svg" alt="" class="lazy-img shapes bg-shape"/>
          </div>
          <!-- /.media-wrapper -->
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="partner-logo-one pt-60 md-pt-50">
            <p class="fw-500 text-dark mb-40">
              <span class="text-decoration-underline">Join 27,000+</span>
              companies who’ve reached
            </p>
            <partner-slider-one />
          </div>
          <!-- /.partner-logo-one -->
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_42.svg" alt="" class="lazy-img shapes shape_01"/>
  </div>
</template>

<script setup lang="ts"></script>
