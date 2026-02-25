<template>
  <div class="block-feature-fifteen mt-90">
    <div class="container">
      <div class="position-relative">
        <div class="row">
          <div class="col-lg-8 m-auto">
            <div class="title-two text-center mb-30 sm-mb-10">
              <div class="upper-title-two mb-10">PROCESS</div>
              <h2 class="text-dark">It’s very easy to open an Account, See how</h2>
            </div>
            <!-- /.title-two -->
          </div>
        </div>
        <div class="row justify-content-center">
    
          <div v-for="(item,i) in feature_data" :key="item.id" class="col-md-4 d-flex wow fadeInUp" :data-wow-delay="`0.${i}s`">
            <div class="card-style-twentyOne mt-40">
              <div class="icon rounded-circle m-auto position-relative d-flex align-items-center justify-content-center">
                <img :src="item.img" alt="" class="lazy-img"> 
                <span class="numb position-absolute d-flex align-items-center justify-content-center rounded-circle">{{item.id}}</span>
              </div>
              <p class="text-center text-lg mt-50 pe-xxl-5 ps-xxl-5">{{item.desc}}</p>
            </div>
            <!-- /.card-style-twenty -->
          </div>
  
        </div>

        <div class="text-center mt-40 position-relative line-btn">
          <nuxt-link href="/contact" class="btn-twenty">Apply Now</nuxt-link>
        </div>

        <img src="/images/shape/shape_05.svg" alt="" class="lazy-img shapes shape_01">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const feature_data = [
  {
    id:1,
    img:'/images/assets/ils_08.svg',
    desc:'It’s very easy to open an account and start your journey in a second.'
  },
  {
    id:2,
    img:'/images/assets/ils_09.svg',
    desc:'Complete your profile with all the info to get attention of client.'
  },
  {
    id:3,
    img:'/images/assets/ils_10.svg',
    desc:'Apply & get your preferable jobs with all the requirements and get it.'
  },
]
</script>