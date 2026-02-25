<template>
  <div class="main-page-wrapper">
    <main>
      <slot />
    </main>

    <footer-one :bg="false"></footer-one>

    <back-to-top></back-to-top>
  </div>
</template>

<script setup lang="ts"></script>
