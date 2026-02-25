<template>
  <div class="block-feature-eight position-relative pt-130 lg-pt-80 pb-130 lg-pb-60">
    <div class="container">
      <div class="position-relative">
        <div class="title-two mb-20 lg-mb-10">
          <h2>Card Features</h2>
        </div>
        <!-- /.title-two -->
        <p class="text-lg mb-45 lg-mb-10">
          Digital agency with top rated talented people provide quality
        </p>
        <div class="row">
          <div
            v-for="item in service_data"
            :key="item.id"
            class="col-lg-4 d-flex wow fadeInUp"
            :data-wow-delay="`0.${item.id}s`"
          >
            <div class="card-style-eleven vstack tran3s w-100 mt-30">
              <img :src="item.icon" alt="" class="lazy-img icon me-auto" />
              <h4 class="fw-500 mt-30 mb-15">{{ item.title }}</h4>
              <p class="mb-25">{{ item.desc }}</p>
              <nuxt-link
                href="/service-details"
                class="arrow-btn tran3s mt-auto stretched-link"
              >
                <img src="/images/icon/icon_09.svg" alt="" class="lazy-img" />
              </nuxt-link>
            </div>
            <!-- /.card-style-eleven -->
          </div>
        </div>

        <div class="section-btn md-mt-40">
          <nuxt-link href="/service-v1" class="btn-thirteen tran3">Learn More</nuxt-link>
        </div>
        <!-- /.section-subheading -->
      </div>
    </div>
    <img src="/images/shape/shape_16.svg" alt="" class="lazy-img shapes shape_01"/>
  </div>
</template>

<script setup lang="ts">
const service_data = [
  {
    id: 1,
    icon: "/images/icon/icon_40.svg",
    title: "Global Payment",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_41.svg",
    title: "Multiple Currency",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_42.svg",
    title: "Online Payment",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
  },
];
</script>
