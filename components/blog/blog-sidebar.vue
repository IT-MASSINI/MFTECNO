<template>
   <div class="blog-sidebar md-mt-60 ps-xxl-4">
      <form action="#" class="sidebar-search">
          <input type="text" placeholder="Search..">
          <button class="tran3s"><i class="bi bi-search"></i></button>
      </form>
      <div class="blog-category mt-60 lg-mt-40">
          <h3 class="sidebar-title">Category</h3>
          <ul class="style-none">
              <li><a href="#">Digital <span>(3)</span></a></li>
              <li><a href="#">Marketing <span>(4)</span></a></li>
              <li><a href="#">Consultation <span>(8)</span></a></li>
              <li><a href="#">Payments <span>(5)</span></a></li>
              <li><a href="#">Banking <span>(7)</span></a></li>
          </ul>
      </div>
      <!-- /.blog-category -->
      <div class="blog-recent-news mt-60 lg-mt-40">
          <h3 class="sidebar-title">Recent News</h3>
          <article v-for="(b) in recent_blogs" :key="b.id" class="recent-news">
              <figure class="post-img" :style="`background-image: url(${b.img});`">
              </figure>
              <div class="post-data">
                  <div class="date">{{b.date}}</div>
                  <nuxt-link :href="`/blog-details/${b.id}`" class="blog-title">
                    <h3>{{b.title}}</h3>
                 </nuxt-link>
              </div>
          </article>
      </div>
      <!-- /.blog-recent-news -->

      <div class="blog-keyword mt-60 lg-mt-40">
          <h3 class="sidebar-title">Keywords</h3>
          <ul class="style-none d-flex flex-wrap">
              <li><a href="#">Finance</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Online Banking</a></li>
              <li><a href="#">Consultation</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Cards</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Loan</a></li>
          </ul>
      </div>
      <!-- /.blog-keyword -->
      <div class="contact-banner text-center mt-50 lg-mt-30">
        <h3 class="mb-20">Any Questions? <br>Let’s talk</h3>
        <nuxt-link href="/contact" class="tran3s fw-500">Let’s Talk</nuxt-link>
      </div>
			<!-- /.contact-banner -->
    </div>
</template>

<script setup lang="ts">
import blog_data from "@/data/blog-data";

const recent_blogs = blog_data.filter((b) => b.page === "blog-list").slice(-2);
</script>