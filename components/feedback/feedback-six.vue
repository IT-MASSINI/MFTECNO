<template>
  <div class="feedback-section-six position-relative pt-180 xl-pt-150 lg-pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="title-one text-center mb-90 lg-mb-40">
            <h2 class="color-deep">We help 10k+ Customers to full fill their dream.</h2>
          </div>
          <!-- /.title-one -->
        </div>
      </div>
      <div class="row gx-xl-5">
        <div class="col-lg-9 m-auto">
          <div class="icon-container position-relative">
            <div class="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src="/images/icon/icon_97.svg" alt="" class="lazy-img">
            </div>
          </div>

          <swiper v-bind="slider_setting" :modules="[Pagination]" class="feedback-slider-five pt-30 pb-120">
            <swiper-slide v-for="item in feedback_data" :key="item.id" class="item">
              <div class="feedback-block-six text-center">
                <p>{{item.desc}}</p>
                <h6 class="text-lg position-relative">{{item.name}}, 
                  <span class="fw-normal">{{item.location}}</span>
                </h6>
              </div>
              <!-- /.feedback-block-six -->
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <img src="/images/assets/screen_24.png" alt="" class="lazy-img shapes shape_01">
    <img src="/images/assets/screen_25.png" alt="" class="lazy-img shapes shape_02">
    <img src="/images/shape/shape_46.svg" alt="" class="lazy-img shapes shape_03">
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';

const feedback_data = [
  {
    id:1,
    desc:"Having a home based business is  wonderful asset to your life. The problem still stands comes time your business. Quis lorem elite.",
    name:'James Bond.',
    location:'Moscow, Russia',
    rating:5
  },
  {
    id:2,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sed nobis eveniet nisi provident aut excepturi reiciendis tuo.",
    name:'John Smith',
    location:'Cairo, Egypt',
    rating:4
  },
  {
    id:3,
    desc:"Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience business's success.",
    name:'Jesica Harris',
    location:'Tokyo, Japan',
    rating:4.5
  }
];

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    clickable: true,
  }
};
</script>