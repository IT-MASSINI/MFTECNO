<template>
  <swiper v-bind="slider_setting" class="partner-slider-one">
    <swiper-slide class="item" v-for="(logo,i) in partner_logos" :key="i">
      <div class="logo d-flex align-items-center justify-content-center">
        <img :src="logo" alt="logo" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Autoplay } from "swiper/modules";

const partner_logos:string[] = [
  '/images/logo/media_01.png',
  '/images/logo/media_02.png',
  '/images/logo/media_03.png',
  '/images/logo/media_04.png',
  '/images/logo/media_05.png',
  '/images/logo/media_02.png',
  '/images/logo/media_01.png',
];

const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 5,
    },
    "768": {
      slidesPerView: 4,
    },
    "576": {
      slidesPerView: 3,
    },
    "0": {
      slidesPerView: 2,
    },
  },
};
</script>
