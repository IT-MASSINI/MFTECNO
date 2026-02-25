<template>
  <div class="main-page-wrapper">
    <header-two></header-two>

    <main>
      <slot />
    </main>
    <footer-three :style_2="true"></footer-three>
    <back-to-top></back-to-top>
  </div>
</template>

<script setup lang="ts"></script>
