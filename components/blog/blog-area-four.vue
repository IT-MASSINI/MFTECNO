<template>
  <div :class="`block-feature-three blog-section-four position-relative ${spacing}`">
    <div class="container">
      <div class="position-relative">
        <div class="row">
          <div class="col-lg-8">
            <div class="title-two mb-70 lg-mb-50">
              <h2>Our Blog</h2>
            </div>
            <!-- /.title-two -->
            <div class="block-one pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 position-relative border-30 wow fadeInUp">
              <div class="row">
                <div class="col-lg-5">
                  <div class="tag d-inline-block border-30 fw-500 text-uppercase mb-15">Consulting</div>
                  <div class="date text-dark"><span class="fw-500">Featured -</span> 18 Jul 2023</div>
                </div>
                <div class="col-lg-7">
                  <h3 class="block-title d-inline-block position-relative">
                    <nuxt-link :href="`/blog-details`">Manage your online banking and get rewarded</nuxt-link>
                  </h3>
                </div>
              </div>
            </div>
            <!-- /.block-one -->
          </div>

          <div class="col-lg-4">
            <div class="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 md-mt-30 wow fadeInUp" data-wow-delay="0.2s">
              <div class="date">3 Aug 2023</div>
              <h3 class="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50">
                <nuxt-link :href="`/blog-details`">Gold card user will get priority pass for Airport.</nuxt-link>
              </h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="tag text-uppercase fw-500">DESIGN</div>
                <nuxt-link :href="`/blog-details`" class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i class="bi bi-arrow-up-right"></i></nuxt-link>
              </div>
            </div>
            <!-- /.block-three -->
            <div class="block-four border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-15 pb-30 mt-45 lg-mt-30 wow fadeInUp" data-wow-delay="0.2s">
              <h3 class="block-title d-inline-block position-relative mt-20 mb-250 lg-mb-150 sm-mb-100">
                <nuxt-link :href="`/blog-details`">Our Travel Card Makes <br class="d-none d-xl-block">you Happy.</nuxt-link>
              </h3>
              <div class="d-flex align-items-center justify-content-between">
                <div class="tag text-uppercase fw-500">DESIGN</div>
                <nuxt-link :href="`/blog-details`" class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i class="bi bi-arrow-up-right"></i></nuxt-link>
              </div>
            </div>
            <!-- /.block-four -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?:string}>(),{
  spacing: 'mt-180 lg-mt-80'
})
</script>
