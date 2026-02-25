<template>
  <div class="blog-section-five position-relative border-100 pt-100 lg-pt-80">
    <div class="container">
      <div class="position-relative">
        <div class="row">
          <div class="col-md-6">
            <div class="title-four mb-25">
              <h2>Our Recent News & Insights.</h2>
            </div>
            <!-- /.title-four -->
          </div>
        </div>

        <div class="section-btn">
          <nuxt-link href="/blog"
            class="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s">
            <i class="bi bi-arrow-up-right"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="wrapper position-relative mt-45 lg-mt-20">
      <div class="container">
        <div class="row justify-content-between">

          <div v-for="blog in blog_items" :key="blog.id" class="col-md-5">
            <article class="blog-meta-three pt-60 lg-pt-40 pb-70 lg-pb-40 h-100 wow fadeInUp">
              <div class="post-data h-100 w-100 d-inline-flex flex-column pe-xl-4">
                <div>
                  <nuxt-link :href="`/blog-details/${blog.id}`" class="tag fw-500 text-uppercase">
                    {{ blog.category }}
                  </nuxt-link>
                </div>
                <nuxt-link :href="`/blog-details/${blog.id}`" class="d-block">
                  <h4 class="tran3s blog-title">
                    {{ blog.title }}
                  </h4>
                </nuxt-link>
                <div class="post-info mb-45 lg-mb-30">
                  <span class="fw-500 text-dark">{{ blog.post_info }} -</span> {{ blog.date }}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <img :src="blog.img" alt="" class="lazy-img">
                  <nuxt-link :href="`/blog-details/${blog.id}`"
                    class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
                    <i class="bi bi-arrow-up-right"></i>
                  </nuxt-link>
                </div>
              </div>
            </article>
            <!-- /.blog-meta-three -->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';

const blog_items = [...blog_data].filter(b => b.page === 'home-5');
</script>
