<template>
  <div class="text-feature-five position-relative mt-150 lg-mt-80 pb-50">
    <div class="container">
      <div class="bg-wrapper">
        <div class="row">
          <div class="col-lg-6 ms-auto d-flex flex-column order-lg-last">
            <div class="text-wrapper pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
              <div class="title-one">
                <h2 class="text-dark">Let’s get started It’s simple.</h2>
              </div>
              <!-- /.title-one -->
              <p class="text-lg text-dark mt-25 mb-35 lg-mb-30">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul class="style-none">
                <li>Mobile app easy management & access</li>
                <li>Ton’s of features for handle the card easily</li>
                <li>Strong security system.</li>
              </ul>
              <nuxt-link href="/about-us" class="btn-eleven d-inline-flex align-items-center mt-40">
                <span class="text">More about us</span>
                <div class="icon tran3s rounded-circle d-flex align-items-center">
                  <img src="/images/icon/icon_27.svg" alt="" class="lazy-img"/>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-6 d-flex order-lg-first">
            <div class="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative">
              <a href="#" class="fancybox rounded-circle video-icon tran3s text-center d-flex align-items-center justify-content-center"
                @click.prevent="playVideo('FYf2zf77Y7c')">
                <img src="/images/icon/icon_29.svg" alt="" class="lazy-img"/>
              </a>
              <img src="/images/assets/screen_07.svg" alt="" class="lazy-img shapes screen_01"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- popup video start -->
<popup-video></popup-video>
<!-- popup video end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
</script>
