<template>
 <div class="feedback-section-seven mt-120 lg-mt-80">
    <div class="box-layout position-relative z-1">
      <div class="container">
        <div class="wrapper">
          <div class="title-two text-center mb-45 sm-mb-30">
            <div class="upper-title-two">TESTIMONIALS</div>
          </div>
          <!-- /.title-two -->
          <swiper v-bind="slider_setting" :modules="[Navigation]" class="feedback-slider-six">
            <swiper-slide v-for="item in feedback_data" :key="item.id" class="item">
              <div class="feedback-block-seven">
                <div class="row">
                  <div class="col-lg-9 col-md-10 m-auto">
                    <blockquote>{{item.desc}}</blockquote>
                    <div class="mt-50 lg-mt-30">
                      <div class="name fw-500 text-dark">{{item.name}}</div>
                      <p class="fs-5 m0">{{item.location}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.feedback-block-seven -->
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <ul class="slider-arrows slick-arrow-one d-flex justify-content-between style-none">
        <li class="prev_S tran3s slick-arrow d-flex align-items-center justify-content-center">
          <img src="/images/icon/icon_103.svg" alt="icon" class="lazy-img">
        </li>
        <li class="next_S tran3s slick-arrow d-flex align-items-center justify-content-center">
          <img src="/images/icon/icon_102.svg" alt="icon" class="lazy-img">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const feedback_data = [
  {
    id:1,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'Jonathan Harry',
    location:'Milan, Itlay',
  },
  {
    id:2,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'Mark Smith',
    location:'United States',
  },
  {
    id:3,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'John Smith',
    location:'South Africa',
  }
];

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next_S",
    prevEl: ".prev_S",
  },
};
</script>