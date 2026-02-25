<template>
   <div class="feedback-section-two position-relative mt-150 lg-mt-80">
			<div class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-lg-8 m-auto">
							<div class="title-one text-center mb-80 lg-mb-40 wow fadeInUp">
								<h2>We help 10k+ Customers to full fill their dream.</h2>
							</div>
							<!-- /.title-one -->
						</div>
					</div>
				</div>
			</div>

			<div class="slider-wrapper">
				<swiper v-bind="slider_setting" class="feedback-slider-two">
					<swiper-slide v-for="item in testimonial_data" :key="item.id" class="item">
						<div class="feedback-block-two tran3s">
							<div class="d-flex align-items-center">
								<img :src="item.user" alt="user" class="avatar rounded-circle">
								<div class="ps-3">
									<div class="name fw-bold">{{item.name}}</div>
									<p class="m0">{{item.location}}</p>
								</div>
							</div>
							<blockquote class="text-lg">{{item.desc}}</blockquote>
							<div class="bottom-line d-flex align-items-center justify-content-between">
								<ul class="style-none d-flex rating">
									<li><i class="bi bi-star-fill"></i></li>
									<li><i class="bi bi-star-fill"></i></li>
									<li><i class="bi bi-star-fill"></i></li>
									<li><i class="bi bi-star-fill"></i></li>
									<li><i class="bi bi-star-fill"></i></li>
								</ul>
								<img src="/images/icon/icon_28.svg" alt="" class="icon">
							</div>
						</div>
						<!-- /.feedback-block-two -->
					</swiper-slide>
				</swiper>
			</div>
			<!-- /.slider-wrapper -->
			<img src="/images/shape/shape_06.svg" alt="shape" class="lazy-img shapes shape_01">
	 </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const testimonial_data = [
  {
    id:1,
    user:'/images/media/img_08.jpg',
    name:'James Bond.',
    location:'Thailad',
    desc:'We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform our outdated website into a stunning, user-friendly masterpiece.',
    rating:5
  },
  {
    id:2,
    user:'/images/media/img_09.jpg',
    name:'James Bond.',
    location:'Thailad',
    desc:'It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.',
    rating:4
  },
  {
    id:3,
    user:'/images/media/img_14.jpg',
    name:'Mark Smith',
    location:'United state',
    desc:'It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.',
    rating:5
  },
  {
    id:4,
    user:'/images/media/img_15.jpg',
    name:'Jon Doe',
    location:'Dubai',
    desc:'Babun thumbs up to the team! Their personalized approach to fitness training has been a breath of fresh air. The trainers are not only knowledgeable but also genuinely invested in their clients well-being',
    rating:3
  }
]

const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  breakpoints: {
    "768": {
      slidesPerView: 3,
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
