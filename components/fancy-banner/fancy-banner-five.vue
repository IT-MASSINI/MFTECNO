<template>
  <div v-if="!style_2 && !style_3" class="fancy-banner-five no-bg text-center position-relative mt-100 lg-mt-80">
    <div class="bg-wrapper pt-225 xl-pt-150 lg-pt-50 pb-225 xl-pb-150 lg-pb-50">
      <a @click.prevent="playVideo('FYf2zf77Y7c')" class="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto pointer">
        <img src="/images/assets/sticker_02.png" alt="" class="lazy-img">
      </a>
    </div>
  </div>

   <div v-if="style_2" class="fancy-banner-five no-bg text-center position-relative mt-30 lg-mt-10">
    <div class="container">
      <div class="bg-wrapper pt-95 lg-pt-50 pb-95 lg-pb-50">
          <h2 class="text-white fw-bold mb-50 lg-mb-30">Explore Our Business Division here.</h2>
          <a @click.prevent="playVideo('FYf2zf77Y7c')" class="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto" href="#">
            <img src="/images/assets/sticker_02.png" alt="" class="lazy-img">
          </a>
      </div>
    </div>
  </div>

  <div v-if="style_3" class="fancy-banner-five text-center position-relative mt-150 lg-mt-80 pt-80 md-pt-60 pb-80 md-pb-60">
    <div class="container">
      <h2 class="text-white fw-bold">You've Entered Our Corporate Business Zone</h2>
      <p class="text-white text-xl pt-30 md-pt-10 pb-45 lg-pb-30">Watch our intro video to get the idea about our services & many more</p>
      <a @click.prevent="playVideo('FYf2zf77Y7c')" class="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto" href="#">
        <img src="/images/assets/sticker_02.png" alt="" class="lazy-img">
      </a>
    </div>
  </div>
<!-- popup video start -->
<popup-video></popup-video>
<!-- popup video end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
defineProps<{style_2?:boolean;style_3?:boolean}>();
</script>