<!-- Stili in: mftecno.css (globale) — sezione 16. TEXT-FEATURE-THREE -->
<template>
  <section class="packaging-section py-section">

    <!-- Sfondo decorativo -->
    <div class="section-bg">
      <img src="/images/home/sfondo-m.jpg" alt="" aria-hidden="true" class="bg-img" />
    </div>

    <div class="container position-relative">

      <!-- Header -->
      <div class="row align-items-start mb-5">
        <div class="col-lg-8">
          <h2 class="section-title">Tipologie di<br>Confezionamento</h2>
          <p class="section-subtitle mt-3">Diverse configurazioni di sacchi e stili di packaging per adattarsi a ogni esigenza produttiva</p>
        </div>
        <div class="col-lg-4 d-flex justify-content-end align-items-start pt-2">
          <nuxt-link :to="localePath('/tipologie')" class="btn scopri-btn">
            Vedi tutte
          </nuxt-link>
        </div>
      </div>
      <br/>
      <!-- Cards -->
      <div class="row g-4">
        <div v-for="type in packagingTypes" :key="type.id" class="col-lg-3 col-md-6">
          <nuxt-link :to="localePath(type.link)" class="type-card">

            <!-- Immagine prodotto centrata -->
            <div class="type-img-wrap">
              <img :src="type.image" :alt="type.title" class="type-img" />
            </div>

            <!-- Testo -->
            <div class="type-body">
              <h4 class="type-title">{{ type.title }}</h4>
              <p class="type-desc">{{ type.description }}</p>
              <div class="type-arrow">
                <img src="/images/icon/icon_02.svg" alt="" aria-hidden="true" class="arrow-icon" />
              </div>
            </div>

          </nuxt-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const packagingTypes = [
  {
    id: 1,
    title: "Confezione a fondo quadro",
    description: "Base piatta per elevata stabilità e pallettizzazione efficiente",
    image: "/images/home/pack-01.png",
    link: "/tipologie/fondo-quadro"
  },
  {
    id: 2,
    title: "Doypack",
    description: "Sacco stand-up con fondo sagomato autoportante",
    image: "/images/home/pack-02.png",
    link: "/tipologie/doypack"
  },
  {
    id: 3,
    title: "Confezione a cuscino",
    description: "Formato pillow bag per confezionamento rapido e continuo",
    image: "/images/home/pack-03.png",
    link: "/tipologie/cuscino"
  },
  {
    id: 4,
    title: "Confezione con soffietto",
    description: "Sacco con soffietti laterali per maggiore capacità e stabilità",
    image: "/images/home/pack-04.png",
    link: "/tipologie/soffietto"
  },
]
</script>
