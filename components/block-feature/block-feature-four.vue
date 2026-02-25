<template>
  <div class="block-feature-four position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-8 col-lg-9 m-auto wow fadeInUp">
          <div class="title-one text-center mb-50 lg-mb-20">
            <h2>We're here to help you build,  & protect your wealth.</h2>
          </div>
          <!-- /.title-one -->
        </div>
      </div>
      <div class="row gx-xxl-5">
        <div v-for="(item,i) in block_features" :key="item.id" class="col-lg-4 d-flex wow fadeInUp" :data-wow-delay="`0.${i}s`">
          <div :class="`card-style-six text-center vstack tran3s w-100 mt-30 ${item.id === 2 ? 'active' : ''}`">
            <div class="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img :src="item.icon" alt="icon" class="lazy-img">
            </div>
            <h4 class="fw-bold mt-40 md-mt-30 mb-25">{{item.title}}</h4>
            <p class="mb-20">{{item.subtitle}}</p>
            <nuxt-link href="/service-v2" class="arrow-btn tran3s m-auto stretched-link">
              <img src="/images/icon/icon_09.svg" alt="icon" class="lazy-img">
            </nuxt-link>
          </div>
          <!-- /.card-style-six -->
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_05.svg" alt="shape" class="lazy-img shapes shape_01">
    <img src="/images/shape/shape_06.svg" alt="shape" class="lazy-img shapes shape_02">
  </div>
</template>

<script setup lang="ts">

const block_features = [
  {
    id:1,
    icon:'/images/icon/icon_20.svg',
    title:'Expert Advisor',
    subtitle:'Elit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id:2,
    icon:'/images/icon/icon_21.svg',
    title:'Highly Secured',
    subtitle:'Elit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id:3,
    icon:'/images/icon/icon_22.svg',
    title:'Management',
    subtitle:'Elit esse cillum dolore eu fugiat nulla pariatur',
  }
]
</script>
