<template>
  <div class="text-feature-seven mt-170 lg-mt-80">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-last wow fadeInRight">
          <div class="ps-xl-5 ms-xxl-4">
            <div class="title-three mb-35 md-mb-20">
              <div class="upper-title">management</div>
              <h2>Arrange & optimize your payments.</h2>
            </div>
            <!-- /.title-three -->
            <p class="text-lg mb-40 lg-mb-30">
              Optimize expense tracking across platforms, & product lines using
              multiple cards.
            </p>
            <ul class="style-none">
              <li>Mobile app easy management & access.</li>
              <li>Ton’s of features for handle the card easily & safely</li>
              <li>Strong security system.</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center mt-65 lg-mt-50">
              <nuxt-link href="/about-us" class="btn-thirteen tran3 flex-fill">
                Learn More
              </nuxt-link>
              <nuxt-link href="/about-us" class="btn-fourteen tran3s">
                <i class="bi bi-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 m-auto wow fadeInLeft">
          <div class="media-wrapper md-mt-60">
            <img src="/images/assets/screen_15.png" alt="" class="lazy-img" />
          </div>
        </div>
      </div>

      <div class="border-bottom mt-40 pb-50 sm-pb-30">
        <div class="row">
        
          <div v-for="item in feature_data" :key="item.id" class="col-lg-4 d-flex wow fadeInUp" :data-wow-delay="`0.${item.id}s`">
            <div class="card-style-twelve w-100 text-center mt-30">
              <div class="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
                <img :src="item.icon" alt="" class="lazy-img"/>
              </div>
              <h4 class="fw-bold mt-20 mb-15">{{item.title}}</h4>
              <p class="ps-xl-4 pe-xl-4">
                {{item.subtitle}}
              </p>
            </div>
          </div>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_43.svg',
    title:'Instant Transfer - Free',
    subtitle:'0% charge for online money transfer from you wallet instant.'
  },
  {
    id:2,
    icon:'/images/icon/icon_44.svg',
    title:'Google & Apple pay',
    subtitle:'Pay google & apple payment with your card without any hassle'
  },
  {
    id:3,
    icon:'/images/icon/icon_45.svg',
    title:'Top Security',
    subtitle:'World-class security that makes your money safe & secure.'
  }
]
</script>
