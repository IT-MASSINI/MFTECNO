<template>
  <div :class="`feedback-section-five ${border?`border-${border}`:'border-100'} position-relative pt-225 xl-pt-200 lg-pt-120 md-pt-80 pb-300 xl-pb-200 lg-pb-150`">
    <div class="container">
      <div class="position-relative">
        <swiper v-bind="slider_setting" :modules="[Pagination]" class="feedback-slider-three">
          <swiper-slide v-for="item in feedback_data" :key="item.id" class="item">
            <div class="feedback-block-five">
              <blockquote>{{item.desc}}</blockquote>
              <h6 class="name fw-bold">{{item.name}}</h6>
              <div class="text-md text-dark">{{item.location}}</div>
            </div>
            <!-- /.feedback-block-five -->
          </swiper-slide>
        </swiper>
        <!-- /.feedback-slider-three -->
      </div>
    </div>
    <img src="/images/shape/shape_24.svg" alt="" class="lazy-img shapes shape_01">
    <img src="/images/assets/screen_19.png" alt="" class="lazy-img shapes shape_02">
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';
defineProps<{border?:string}>();

const feedback_data = [
  {
    id:1,
    desc:`"Extraordinary performance!  Quick solutions. Highly recommended."`,
    name:'James Bond.',
    location:'CEO & Head of Sky Tech Inc.',
    rating:5
  },
  {
    id:2,
    desc:`"Babun Solutions has truly been a game changer for our business."`,
    name:'John Smith',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4
  },
  {
    id:3,
    desc:`"Quick solutions coupled with extraordinary performance—a recommendation."`,
    name:'Mark John',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4.5
  }
];

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  }
};
</script>
