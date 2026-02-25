<template>
  <div :class="`feedback-section-three position-relative ${spacing}`">
    <div class="container">
      <div class="position-relative">
        <div class="row">
          <div class="col-lg-6">
            <div class="title-one mb-85 lg-mb-50 mt-65 md-mt-30">
              <h2 class="text-dark">Find our Customers kind Words.</h2>
            </div>
            <!-- /.title-one -->
            <div class="slider-wrapper position-relative">
              <img src="/images/icon/icon_39.svg" alt="" class="lazy-img shapes icon"/>
              <swiper v-bind="slider_setting" :modules="[Pagination]" class="feedback-slider-three pb-60">
                <swiper-slide v-for="item in feedback_data" :key="item.id" class="item">
                  <div class="feedback-block-three">
                    <blockquote class="text-lg">
                      {{item.desc}}
                    </blockquote>
                  </div>
                  <!-- /.feedback-block-three -->
                </swiper-slide>
              </swiper>
              <!-- /.feedback-slider-three -->
            </div>
            <!-- /.slider-wrapper -->
          </div>

          <div class="col-xl-6 col-lg-5 ms-auto text-center text-lg-end">
            <div class="media-wrapper d-inline-block position-relative md-mt-40">
              <img src="/images/media/img_21.jpg" alt="" class="lazy-img"/>
              <div class="rating-box text-center">
                <div class="rating fw-bold text-white">4.8</div>
                <div class="text-white">avg rating</div>
              </div>
              <!-- /.rating-box -->
            </div>
            <!-- /.media-wrapper -->
          </div>
        </div>

        <div v-if="bottom_slider" class="partner-logo-one pt-150 md-pt-80">
          <p class="fw-500 text-dark text-lg mb-40 sm-mb-30">
            <span class="text-decoration-underline fs-3">150,000+</span> Client
            all over the world.
          </p>
          <!-- partner slider -->
          <partner-slider-one />
          <!-- partner slider -->
        </div>
        <!-- /.partner-logo-one -->
      </div>
    </div>

    <img src="/images/shape/shape_13.svg" alt="" class="lazy-img shapes shape_01"/>
    <img src="/images/shape/shape_13.svg" alt="" class="lazy-img shapes shape_02"/>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';
withDefaults(defineProps<{spacing?:string;bottom_slider?:boolean}>(),{
  bottom_slider:true,
  spacing:'pt-180 lg-pt-100'
});

const feedback_data:{id: number;desc: string}[] = [
  {
    id:1,
    desc:'Quick solutions coupled with extraordinary performance—a recommendation thats unequivocal.'
  },
  {
    id:2,
    desc:'We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform.'
  },
  {
    id:3,
    desc:'Babun Solutions has truly been a game changer for our business. Their expertise in developing our mobile app'
  },
];

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  }
};
</script>
