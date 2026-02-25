<template>
  <div class="block-feature-nine position-relative pt-80 pb-150 lg-pb-80">
    <div class="container">
      <div class="title-four text-center mb-30 lg-mb-10">
        <h2>What We Do</h2>
      </div>
      <!-- /.title-four -->

      <div class="row gx-xl-5 justify-content-center">
   

        <div v-for="item in feature_data" :key="item.id" class="col-lg-4 col-md-6 d-flex wow fadeInUp" :data-wow-delay="`0.${item.id}s`">
          <div class="card-style-thirteen text-center vstack tran3s w-100 mt-30">
            <div class="icon d-flex align-items-center justify-content-center">
              <img :src="item.icon" alt="icon" class="lazy-img">
            </div>
            <p class="mt-45 lg-mt-30 mb-30 lg-mb-20">{{item.title}}</p>
            <h3 class="fw-500">{{item.subtitle}}</h3>
          </div>
          <!-- /.card-style-thirteen -->
        </div>

   
      </div>

      <h3 class="heading font-magnita text-white mt-110 lg-mt-80">Design, <span>Marketing,</span> Branding,  <span>Development</span> & more. <a href="#">
        <img src="/images/icon/icon_54.svg" alt="" class="lazy-img">
      </a></h3>
    </div>
    <img src="/images/shape/shape_21.svg" alt="shape" class="lazy-img shapes shape_01">
    <img src="/images/shape/shape_22.svg" alt="shape" class="lazy-img shapes shape_02">
    <img src="/images/shape/shape_23.svg" alt="shape" class="lazy-img shapes shape_03">
  </div>
</template>

<script setup lang="ts">

const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_51.svg',
    title:'SOLUTION',
    subtitle:'Get all digital solution from our expert'
  },
  {
    id:2,
    icon:'/images/icon/icon_52.svg',
    title:'REPUTATED',
    subtitle:'13+ years of successful client relations.'
  },
  {
    id:3,
    icon:'/images/icon/icon_53.svg',
    title:'SUPPORT',
    subtitle:'Get quick & reliable support by us.'
  }
]
</script>
