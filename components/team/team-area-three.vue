<template>
  <div class="team-section-three light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60 mt-150 lg-mt-80">
    <div class="container">
      <div class="position-relative">
        <div class="title-one mb-40 lg-mb-10 wow fadeInUp">
          <h2>Our Advisor</h2>
        </div>
        <!-- /.title-one -->

        <div class="row">
    
          <div v-for="(item,i) in team_items" :key="item.id" class="col-lg-3 col-sm-6 wow fadeInUp" :data-wow-delay="`0.${i}s`">
            <team-single-two :item="item" />
          </div>
  
        </div>

        <div class="section-btn sm-mt-40">
          <nuxt-link href="/team-v2" class="btn-eighteen tran3s">See All</nuxt-link>
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_47.svg" alt="" class="lazy-img shapes shape_03">
  </div>
</template>

<script setup lang="ts">
import team_data from '@/data/team-data';
const team_items = [...team_data].filter(t => t.page === 'team-three');
</script>