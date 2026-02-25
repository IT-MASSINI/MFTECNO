<template>
  <div class="block-feature-eleven overflow-hidden position-relative mt-225 lg-mt-100 pb-200 lg-pb-100 md-pb-80">
			<div class="container">
				<div class="row gx-lg-5 align-items-center">
					<div class="col-lg-5 wow fadeInLeft">
						<div class="title-one">
							<h2 class="color-deep">Our Services</h2>
						</div>
						<!-- /.title-one -->
            <p class="text-lg text-dark mt-30 md-mt-20 mb-45 md-mb-30">Marketing agency with top talented people are providing quality services.</p>
            <nuxt-link href="/contact" class="btn-eighteen tran3s">Explore All</nuxt-link>
					</div>
           <div class="col-lg-7">
              <div class="slider-wrapper md-mt-50">
                <swiper v-bind="slider_setting" :modules="[Pagination]" class="service-slider-one">
                  <swiper-slide v-for="item in feature_data" :key="item.id" class="item">
                    <div class="card-style-seventeen d-lg-flex tran3s w-100">
                      <div class="icon tran3s rounded-circle d-flex justify-content-center align-items-center">
                        <img :src="item.icon" alt="">
                      </div>
                      <div class="text">
                        <h4 class="fw-bold mb-25 md-mb-20">{{item.title}}</h4>
                        <p class="mb-25">{{item.desc}}</p>
                        <nuxt-link href="/service-v1" class="btn-three"><span>Learn More</span> 
                          <i class="bi bi-chevron-right"></i>
                        </nuxt-link>
                      </div>
                    </div>
                    <!-- /.card-style-seventeen -->
                  </swiper-slide>
                </swiper>
              </div>
            </div>
				</div>

			</div>
			<img src="/images/shape/shape_44.svg" alt="" class="lazy-img shapes shape_01">
		</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';

const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_95.svg',
    title:'Design & Development',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
  {
    id:2,
    icon:'/images/icon/icon_95.svg',
    title:'Digital Marketing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
  {
    id:3,
    icon:'/images/icon/icon_95.svg',
    title:'Design & Development',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
  {
    id:4,
    icon:'/images/icon/icon_10.svg',
    title:'Digital Marketing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
  {
    id:5,
    icon:'/images/icon/icon_95.svg',
    title:'Our Mission',
    desc:'Optimize expense tracking across platforms, & product lines using multiple cards.',
  }
];

const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
   breakpoints: {
    "1200": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};
</script>
