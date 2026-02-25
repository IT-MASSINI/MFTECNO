<template>
  <div class="main-page-wrapper">
    <header-four></header-four>

    <main>
      <slot />
    </main>
    <div class="footer-large-wrapper position-relative">
      <!-- news letter -->
      <newsletter-two />
      <!-- news letter -->

      <!-- footer -->
      <footer-four />
      <!-- footer -->
    </div>
    <back-to-top></back-to-top>
  </div>
</template>

<script setup lang="ts"></script>
