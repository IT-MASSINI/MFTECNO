<template>
 <div class="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-11">
          <div class="title-one mb-40 lg-mb-20">
            <h2 class="color-deep">
              We're here to help you manage, build & protect your wealth.
            </h2>
          </div>
          <!-- /.title-one -->
        </div>
      </div>
      <div class="row gx-xl-5">
        <div class="col-lg-8 d-flex mt-40 md-mt-20">
          <div class="card-style-eighteen position-relative">
            <div class="row h-100">
              <div class="col-lg-7 order-lg-last">
                <div class="pt-45">
                  <div class="icon rounded-circle d-flex align-items-center justify-content-center">
                    <img src="/images/icon/icon_97.svg" alt="" class="lazy-img">
                  </div>
                  <blockquote>“Efficient, knowledgeable, & smooth experience. Highly recommended”</blockquote>
                  <h6>- Musa Jamy. <span>CEO babun</span></h6>
                </div>
              </div>
              <div class="col-lg-5 d-flex align-items-end justify-content-center order-lg-first">
                <img src="/images/assets/businessman_02.png" alt="" class="lazy-img">
              </div>
            </div>
          </div>
          <!-- /.card-style-eighteen -->
        </div>

        <div v-for="item in feature_data" :key="item.id" class="col-lg-4 d-flex mt-40 md-mt-20">
          <div class="card-style-two bg-white vstack tran3s w-100">
            <img :src="item.icon" alt="" class="lazy-img icon2 me-auto">
            <h4 class="fw-bold mt-50 mb-25">{{item.title}}</h4>
            <p class="mb-20">{{item.desc}}</p>
            <nuxt-link href="/service-details" class="arrow-btn tran3s mt-auto stretched-link">
              <img src="/images/icon/icon_09.svg" alt="" class="lazy-img">
            </nuxt-link>
          </div>
          <!-- /.card-style-two -->
        </div>
    

        <div class="col-lg-8 d-flex mt-40 md-mt-20">
          <div class="card-style-nineteen">
            <div class="row">
              <div class="col-lg-7">
                <h2 class="color-deep fw-bold mt-20">We’r Babun</h2>
                <p class="text-md mt-30 lg-mt-20 mb-35">Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential</p>
                <nuxt-link href="/service-v2" class="btn-seven d-inline-flex align-items-center">
                  <span class="text">Learn More</span>
                  <div class="icon tran3s rounded-circle d-flex align-items-center">
                    <img src="/images/icon/icon_27.svg" alt="" class="lazy-img">
                  </div>
                </nuxt-link>
              </div>
              <div class="col-lg-4 ms-auto">
                <div class="counter-block-one md-mt-40">
                  <div class="main-count fw-bold"><span class="counter">710</span>k+</div>
                  <p class="m0">Successful Projects</p>
                </div>
                <div class="counter-block-one mt-60 md-mt-20">
                  <div class="main-count fw-bold"><span class="counter">1.2</span>x</div>
                  <p class="m0">Rapid wealth grow</p>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-style-nineteen -->
        </div>
      </div>

    </div>
    <img src="/images/shape/shape_45.svg" alt="" class="lazy-img shapes shape_01">
  </div>
</template>

<script setup lang="ts">
const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_11.svg',
    title:'Our Mission',
    desc:'Optimize expense tracking across platforms, & product lines using multiple cards.',
  },
  {
    id:2,
    icon:'/images/icon/icon_10.svg',
    title:'Our Vision',
    desc:'Elit esse cillum dolore eui fugiat nulla pariatur.',
  }
];
</script>