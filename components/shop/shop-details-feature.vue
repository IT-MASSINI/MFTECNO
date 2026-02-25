<template>
  <div class="row">
    <div v-for="(f,i) in feature_data" :key="f.id" class="col-lg-3 col-sm-6 wow fadeInUp" :data-wow-delay="`0.${i}s`">
      <div class="card-style-sixteen text-center mt-25">
        <div class="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
          <img :src="f.icon" alt="" class="lazy-img">
        </div>
        <h4 class="fw-bold mt-35 lg-mt-30" v-html="f.title"></h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const feature_data = [
  {
    id:1,
    icon:'/images/icon/icon_81.svg',
    title:'Free Delivery within <br> 3 days.'
  },
  {
    id:2,
    icon:'/images/icon/icon_82.svg',
    title:'7 Days refund <br> policy.'
  },
  {
    id:3,
    icon:'/images/icon/icon_83.svg',
    title:'Secure payment <br> methods'
  },
  {
    id:4,
    icon:'/images/icon/icon_83.svg',
    title:'Store pickup <br> facility.'
  }
]
</script>