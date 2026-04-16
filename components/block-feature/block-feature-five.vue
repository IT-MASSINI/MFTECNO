<!-- Stili in: mftecno.css (globale) -->
<template>
  <section class="product-section py-section text-center">
    <div class="container">

      <h2 class="section-title">Per ogni Prodotto,<br>la soluzione giusta pensata per te</h2>

      <p class="section-subtitle mt-3">
        Dai prodotti alimentari ai materiali chimici e combustibili solidi,<br>
        i macchinari MF TECNO sono progettati per gestire un'ampia varietà di prodotti sfusi.
      </p>

      <div class="scopri-wrap mt-4">
        <nuxt-link :to="localePath('/macchinari')" class="btn call-btn solutions-vedi-tutti mt-2">
          Scoprili Tutti
          <span class="btn-arrow solutions-arrow">
            <img src="/images/icon/icon_02.svg" class="call-icon-svg" alt="" />
          </span>
        </nuxt-link>
      </div>
      <br/>
      <br/>
      <div class="products-row mt-5">
        <nuxt-link
          v-for="product in products"
          :key="product.id"
          :to="localePath(product.link)"
          class="product-card"
        >
          <div class="product-icon">
            <img :src="product.icon" :alt="product.title" />
          </div>
          <h4 class="product-title">{{ product.title }}</h4>
          <p class="product-desc">{{ product.description }}</p>
              <div class="type-arrow">
                <img src="/images/icon/icon_02.svg" alt="arrow" class="product-arrow-icon" />
              </div>
        </nuxt-link>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const products = [
  {
    id: 1,
    title: 'Zucchero',
    description: 'Gestione precisa di prodotti cristallini',
    icon: '/images/home/sugar-icon.png',
    link: '/settori/zucchero',
  },
  {
    id: 2,
    title: 'Pet Food',
    description: 'Soluzioni per prodotti granulari e crocchette',
    icon: '/images/home/petfood-icon.png',
    link: '/settori/petfood',
  },
  {
    id: 3,
    title: 'Semi',
    description: 'Soluzioni per semi e prodotti granulari',
    icon: '/images/home/seeds-icon.png',
    link: '/settori/semi',
  },
]
</script>

