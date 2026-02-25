<template>
  <div class="block-feature-six position-relative pt-150 lg-pt-80 pb-120 lg-pb-50">
    <div class="container">
      <div class="row gx-lg-5">
        <div class="col-lg-4 wow fadeInLeft">
          <div class="title-one">
            <h2 class="text-dark">Our Featured products.</h2>
          </div>
          <!-- /.title-one -->
          <p class="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
            Inciddnt ut labore et dolor magna aliu. ad mim venam, quis nostru
          </p>
          <nuxt-link href="/service-v2" class="btn-eleven d-inline-flex align-items-center">
            <span class="text">All Services</span>
            <div class="icon tran3s rounded-circle d-flex align-items-center">
              <img src="/images/icon/icon_27.svg" alt="" class="lazy-img"/>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-8 md-mt-50">
          <div class="row">
       
            <div v-for="item in service_data" :key="item.id" class="col-md-6 d-flex wow fadeInUp" :data-wow-delay="`0.${item.id}s`">
              <div class="card-style-eight position-relative vstack tran3s w-100 mb-30 active">
                <div class="icon d-flex align-items-center">
                  <img :src="item.icon" alt="" class="lazy-img"/>
                </div>
                <h4 class="fw-bold mt-30 mb-20">{{item.title}}</h4>
                <p>
                  {{item.desc}}
                </p>
                <nuxt-link href="/service-details" class="stretched-link"></nuxt-link>
              </div>
              <!-- /.card-style-eight -->
            </div>

          </div>
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_11.svg" alt="shape" class="lazy-img shapes shape_01"/>
    <img src="/images/shape/shape_12.svg" alt="shape" class="lazy-img shapes shape_02"/>
  </div>
</template>

<script setup lang="ts">

const service_data = [
{
    id:1,
    icon:'/images/icon/icon_32.svg',
    title:'Agent Banking',
    desc:'Stay updated, check your bank account to manage funds and track transactions securely.',
  },
  {
    id:2,
    icon:'/images/icon/icon_33.svg',
    title:'Savings Account',
    desc:'Securely save money, earn interest with a dedicated savings account.',
  },
  {
    id:3,
    icon:'/images/icon/icon_34.svg',
    title:'Low Interest',
    desc:'Bank yields meager interest, limiting earnings on deposited funds and investments.',
  },
  {
    id:11,
    icon:'/images/icon/icon_35.svg',
    title:'Multiple Cards.',
    desc:'Bank cards offer easy payments and cash withdrawals, enhancing financial accessibility.',
  }
]
</script>
