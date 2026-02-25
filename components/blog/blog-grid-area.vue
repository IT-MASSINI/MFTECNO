<template>
  <div class="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
    <div class="container">
      <div class="position-relative">
        <div class="row gx-xxl-5">
          <div
            v-for="blog in blog_items.slice(startIndex, endIndex)"
            :key="blog.id"
            class="col-md-6"
          >
            <article class="blog-meta-two mb-80 lg-mb-50 wow fadeInUp">
              <figure
                class="post-img rounded-5 position-relative d-flex align-items-end m0"
                :style="`background-image: url(${blog.img});`"
              >
                <nuxt-link :href="`/blog-details/${blog.id}`"
                  class="stretched-link rounded-5 date tran3s"
                >
                 {{ blog.date.split(' ')[0] }} {{ blog.date.split(' ')[1] }}
                </nuxt-link>
              </figure>
              <div class="post-data">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <nuxt-link :href="`/blog-details/${blog.id}`" class="blog-title">
                    <h4>{{ blog.title }}</h4>
                  </nuxt-link>
                  <nuxt-link :href="`/blog-details/${blog.id}`"
                    class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
                    <i class="bi bi-arrow-up-right"></i>
                  </nuxt-link>
                </div>
                <div class="post-info">{{ blog.post_info }}</div>
              </div>
            </article>
            <!-- /.blog-meta-two -->
          </div>
        </div>

        <div class="pagination-one mt-20">
          <pagination
            :items-per-page="4"
            :data="blog_items"
            @handle-paginate="handlePagination"
            cls="justify-content-center"
          />
        </div>
        <!-- /.pagination-one -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import blogData from "@/data/blog-data";
import { type IBlog } from "@/types/blog-d-t";

// blog items
const blog_items = blogData.filter((b) => b.page === "blog-grid");
let filteredProductsItems = ref<IBlog[]>(blog_items);
let startIndex = ref<number>(0);
let endIndex = ref<number>(blog_items.length);

const handlePagination = (data: IBlog[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};
</script>
