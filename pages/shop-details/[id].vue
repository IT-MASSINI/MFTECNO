<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Our Product Showcase"
      subtitle="Meet our products, guiding you through financial intricacies with precision"
      page="Shop"
      bg_img="/images/media/img_47.jpg"
      shape="/images/shape/shape_26.svg"
    />
    <!-- breadcrumb area end -->

    <!-- shop details area start -->
    <template v-if="product">
      <shop-details-area :product="product" />
    </template>

    <div v-else class="container">
      <div class="mt-80 mb-80 text-center">
        <h3>Not Found Any Product this id {{route.params.id}}</h3>
      </div>
    </div>
    <!-- shop details area end -->

    <!-- fancy banner area start -->
    <fancy-banner-three />
    <!-- fancy banner area end -->

    <!-- news letter area start -->
    <newsletter-one />
    <!-- news letter area end -->
  </div>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

useSeoMeta({ title: "Shop Details - Babun" });
const route = useRoute();
const product = product_data.find((p) => p.id === Number(route.params.id));
</script>
