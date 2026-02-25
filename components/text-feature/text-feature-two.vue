<template>
  <div class="text-feature-two position-relative pt-110 lg-pt-80 pb-110 lg-pb-80">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-7">
          <div class="title-one">
            <h2 class="text-white">The Numbers Reflect Our Reputation.</h2>
          </div>
          <!-- /.title-one -->
        </div>
        <div class="col-lg-5 ms-auto">
          <p class="m0 text-md text-white md-pt-10">Efficient problem-solving, insightful market analysis, and actionable plans made the consulting invaluable to our business's success.</p>
        </div>
      </div>

      <div class="row gx-0 mt-50 lg-mt-20 md-mt-10">
        <div v-for="(item) in counter_data" :key="item.id" class="col-lg-4">
          <div class="card-style-five text-center mt-60">
            <div class="icon d-flex align-content-center justify-content-center">
              <img :src="item.icon" alt="icon" class="lazy-img">
            </div>
            <div class="main-count fw-500">
              <span class="counter">{{item.value}}</span>{{item.text}}
            </div>
            <p class="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">{{item.desc}}</p>
          </div>
          <!-- /.card-style-five -->
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_07.svg" alt="shape" class="lazy-img shapes shape_01">
    <img src="/images/shape/shape_08.svg" alt="shape" class="lazy-img shapes shape_02">
  </div>
</template>

<script setup lang="ts">

const counter_data = [
  {id:1,icon:'/images/icon/icon_17.svg',value:120, text:'mil+',desc:'We’ve experience more than 10+ years with success.'},
  {id:2,icon:'/images/icon/icon_18.svg',value:1.3, text:'b+',desc:'We’ve experience more than 10+ years with success.'},
  {id:3,icon:'/images/icon/icon_19.svg',value:730, text:'k+',desc:'We’ve experience more than 10+ years with success.'},
]
</script>
