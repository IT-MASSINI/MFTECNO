<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Insaccatrici Automatiche per piccoli formati"
      subtitle="Insaccatrici a moto intermittente per sacchi a doppio fondo quadro. Progettata per piccoli formati e alte produzioni. Ideata per zucchero, farina e sale"
      page="Shop"
      bg_img="/images/small-bags/header.jpg"
      shape="/images/shape/shape_53.svg"
    />
    <!-- breadcrumb area end -->

    <!-- shop area start -->
    <shop-piccoli-formati/>
    <!-- shop area end -->

    <!-- news letter area start -->
    <!-- <newsletter-one /> -->
    <!-- news letter area end -->
  </div>
</template>

<script setup lang="ts">
import ShopPiccoliFormati from '../components/shop/shop-piccoli-formati.vue';

useSeoMeta({ title: "Insaccatrici Automatiche Piccoli Formati" });
</script>
