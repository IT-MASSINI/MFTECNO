<!-- ============================================================
     components/Breadcrumb.vue

     Componente breadcrumb riutilizzabile, accessibile (WAI-ARIA)
     e i18n-aware (usa useLocalePath di @nuxtjs/i18n).

     UTILIZZO:
       <Breadcrumb :items="[
         { label: 'Home', to: '/' },
         { label: 'Macchinari', to: '/macchinari' },
         { label: 'SBS 2000' }   // voce corrente: senza `to`
       ]" />

     STILE: matcha il mockup → link blu navy, separatore "/" grigio,
     ultimo elemento in grigio non cliccabile.
============================================================ -->
<template>
  <nav class="mft-breadcrumb" aria-label="breadcrumb">
    <ol class="mft-breadcrumb-list">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="mft-breadcrumb-item"
        :class="{ 'is-current': !item.to }"
      >
        <!-- Voce cliccabile -->
        <NuxtLink
          v-if="item.to"
          :to="localePath(item.to)"
          class="mft-breadcrumb-link"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Voce corrente (ultima) -->
        <span
          v-else
          class="mft-breadcrumb-current"
          aria-current="page"
        >
          {{ item.label }}
        </span>

        <!-- Separatore "/" tra voci (non dopo l'ultima) -->
        <span
          v-if="i < items.length - 1"
          class="mft-breadcrumb-sep"
          aria-hidden="true"
        >/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "~/composables/useProductBreadcrumb";

defineProps<{
  items: BreadcrumbItem[];
}>();

const localePath = useLocalePath();
</script>

<style scoped>
.mft-breadcrumb {
  font-family: "Satoshi", sans-serif;
  font-size: 0.92rem;
}

.mft-breadcrumb-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.mft-breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.mft-breadcrumb-link {
  color: var(--mft-navy, #28477D);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}
.mft-breadcrumb-link:hover,
.mft-breadcrumb-link:focus-visible {
  color: var(--mft-orange, #ED7417);
  text-decoration: underline;
}

.mft-breadcrumb-current {
  color: #9D9D9D;
  font-weight: 500;
}

.mft-breadcrumb-sep {
  color: #9D9D9D;
  user-select: none;
}

/* Responsive: su mobile ridurrà dimensione font */
@media (max-width: 575.98px) {
  .mft-breadcrumb { font-size: 0.85rem; }
}
</style>
