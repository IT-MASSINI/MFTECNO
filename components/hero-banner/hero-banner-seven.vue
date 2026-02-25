<template>
    <div class="hero-banner-seven position-relative">
        <swiper :modules="modules" v-bind="slider_setting" class="hero-slider-one m0">
          <swiper-slide v-for="(src,i) in slider_images" :key="i" class="item m0">
            <div class="hero-img" :style="`background-image: url(${src});`"></div>
          </swiper-slide>
       </swiper>
          <div class="container position-relative">
            <div class="row align-items-end">
              <div class="col-lg-6">
                  <h1 class="hero-heading text-white d-inline-block position-relative wow fadeInUp">Insure life’s Journey <img src="/images/shape/shape_48.svg" alt="" class="lazy-img d-inline-block">
                  </h1>
                  <p class="text-xl text-white pt-35 lg-pt-20 xs-pt-10 wow fadeInUp" data-wow-delay="0.1s">Unlock your business's growth potential with a marketing agency's expertise.</p>
              </div>
						<div class="col-lg-6 ms-auto">
							<div class="lead-form ms-xl-5 md-mt-30">
								<h3>Request Quote</h3>
								<form action="#">
									<label for="" class="d-block mt-20 mb-5">Email*</label>
									<input type="email" placeholder="Email Address Here..." class="d-block w-100">
									<button class="color-deep text-uppercase fw-500 tran3s w-100 mt-20">SEND</button>
								</form>
							</div>
							<!-- /.lead-form -->
						</div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';

const modules = [Autoplay];

const slider_images = [
  '/images/media/img_49.jpg',
  '/images/media/img_02.jpg',
  '/images/media/img_03.jpg'
]

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  }
};

</script>