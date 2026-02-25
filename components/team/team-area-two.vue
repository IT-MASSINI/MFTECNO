<template>
 <div class="team-section-two position-relative border-100 pt-130 lg-pt-80 pb-130 lg-pb-80">
    <div class="container">
      <div class="position-relative">
        <div class="title-four mb-25 lg-mb-10">
          <h2>Our Team</h2>
        </div>
        <!-- /.title-four -->
        <p class="text-xl text-dark mb-30 lg-mb-10">We’ve verity package for our client based on your business</p>

        <div class="row">
      
          <div v-for="(item,i) in team_five_data" :key="item.id" class="col-lg-3 col-sm-6 wow fadeInUp" :data-wow-delay="`0.${i}s`">
            <div class="card-style-fourteen text-center mt-35">
              <div class="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                <img :src="item.img" alt="" class="lazy-img w-100">
                <nuxt-link href="/team-details" class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
                  <i class="bi bi-arrow-up-right"></i>
                </nuxt-link>
              </div>
              <p class="fs-6 pt-30 lg-pt-10 pb-5 m0">{{item.designation}}</p>
              <h4 class="fw-500 m0">{{item.name}}</h4>
            </div>
            <!-- /.card-style-fourteen -->
          </div>
  
        </div>

        <div class="section-btn md-mt-40">
          <nuxt-link href="/team-v1" class="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s">
            <i class="bi bi-arrow-up-right"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import team_data from '@/data/team-data';
const team_five_data = [...team_data].filter(t => t.page === 'home-5');
</script>

