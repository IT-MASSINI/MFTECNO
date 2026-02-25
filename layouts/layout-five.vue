<template>
  <div class="main-page-wrapper">
    <header-five></header-five>

    <main>
      <slot />
    </main>
    <div class="light-bg-page-wrapper">
      <footer-five></footer-five>
    </div>
    <back-to-top></back-to-top>
  </div>
</template>

<script setup lang="ts"></script>
