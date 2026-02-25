<template>
 <div class="block-feature-fourteen box-layout pt-40">
    <div class="bg-wrapper light-bg-deep border-40 position-relative z-1 pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div class="container">
        <div class="position-relative">
          <div class="row">
            <div class="col-lg-6">
              <div class="title-two text-center text-lg-start mb-30">
                <div class="upper-title-two mb-10">Services</div>
                <h2 class="text-dark">Our Featured Scheme</h2>
              </div>
              <!-- /.title-two -->
            </div>
          </div>
          <div class="row justify-content-center gx-xl-5 mt-10">
      
            <div v-for="(item,i) in feature_data" :key="item.id" class="col-lg-6 d-flex wow fadeInUp" :data-wow-delay="`0.${i}s`">
              <div class="card-style-twenty d-flex position-relative z-1 tran3s w-100 mt-50 md-mt-30">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center">
                  <img :src="item.icon" alt="" class="lazy-img">
                </div>
                <div class="text">
                  <h4 class="fw-bold mb-25">{{item.title}}</h4>
                  <p class="mb-20 pe-xxl-5 me-xxl-5">{{item.desc}}</p>
                  <nuxt-link href="/service-details" class="arrow-btn tran3s mt-auto stretched-link">
                    <img src="/images/icon/icon_09.svg" alt="" class="lazy-img">
                 </nuxt-link>
                </div>
              </div>
              <!-- /.card-style-twenty -->
            </div>

          </div>

          <div class="section-subheading md-mt-40">
            <p class="text-lg mb-20 mt-30">Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis nostru </p>
            <nuxt-link href="/service-v1" class="btn-three border-style icon-link">
              <span>See All Services</span>
              <img src="/images/icon/icon_09.svg" alt="" class="lazy-img icon ms-1">
            </nuxt-link>
          </div>
          <!-- /.section-subheading -->
        </div>
      </div>
      <img src="/images/shape/shape_05.svg" alt="" class="lazy-img shapes shape_01">
    </div>
  </div>
</template>

<script setup lang="ts">

const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_98.svg',
    title:'Health Insurance',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
  },
  {
    id:2,
    icon:'/images/icon/icon_99.svg',
    title:'Family Insurance',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
  },
  {
    id:3,
    icon:'/images/icon/icon_100.svg',
    title:'Travel Insurance',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
  },
  {
    id:4,
    icon:'/images/icon/icon_101.svg',
    title:'Education Insurance',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
  }
]
</script>