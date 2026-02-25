<template>
  <div class="faq-section-two position-relative mt-180 lg-mt-100 pb-150 lg-pb-80">
    <div class="container">
      <div class="position-relative">
        <div class="title-one mb-40">
          <h2>Our Successful Projects.</h2>
          <p class="text-lg pt-15 lg-pt-10">See some of our client success story in details.</p>
        </div>
        <!-- /.title-one -->
        <div class="row">
          <div class="col-12">
            <div class="accordion accordion-style-two mt-15" id="accordionOne">
              <div v-for="item in faq_data" :key="item.id" class="accordion-item">
                <h2 class="accordion-header">
                  <button :class="`accordion-button ${item.isShow ? '' : 'collapsed'}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${item.id}`" :aria-expanded="item.isShow ? 'true' : 'false'" :aria-controls="`collapse-${item.id}`">
                    {{item.title}}
                  </button>
                  </h2>
                  <div :id="`collapse-${item.id}`" :class="`accordion-collapse collapse ${item.isShow ? 'show' : ''}`" data-bs-parent="#accordionOne">
                  <div class="accordion-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <h6>{{item.body_title}}</h6>
                        <p class="mb-50">{{item.body_desc}}</p>
                        <h6>FINAL results</h6>
                        <ul class="style-none pt-20 pb-30">
                          <li v-for="l in item.body_lists" :key="l">{{l}}</li>
                        </ul>
                        <nuxt-link href="/project-details-v1" class="btn-eight icon-link">
                          <span class="text">Full Case Study</span>
                          <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center"><i class="bi bi-arrow-right"></i></div>
                        </nuxt-link>
                      </div>
                      <div class="col-lg-6 d-flex">
                        <div class="media-wrapper ms-auto me-auto w-100 d-flex align-items-center justify-content-center position-relative" :style="`background-image: url(${item.bg_img});`">
                          <a @click.prevent="playVideo(item.video_id)" class="fancybox rounded-circle video-icon tran3s text-center d-flex align-items-center justify-content-center" href="#">
                            <img src="/images/icon/icon_29.svg" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <!-- /.accordion-style-two -->
          </div>
        </div>

        <div class="section-btn sm-mt-40">
          <nuxt-link href="/project-v2" class="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"><i class="bi bi-arrow-up-right"></i></nuxt-link>
        </div>
      </div>
    </div>
    <img src="/images/shape/shape_06.svg" alt="shape" class="lazy-img shapes shape_01">
    <img src="/images/shape/shape_06.svg" alt="shape" class="lazy-img shapes shape_02">
	</div>

  <!-- popup video start -->
  <popup-video></popup-video>
  <!-- popup video end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();

const faq_data = [
  {
    id:'one',
    isShow:true,
    title:'1. The Criminal Mind Analysis & Results',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:'/images/media/img_01.jpg',
    video_id:'FYf2zf77Y7c'
  },
  {
    id:'two',
    isShow:false,
    title:'2. Invest the saving fund in proper way to get healthy return.',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:'/images/media/img_02.jpg',
    video_id:'c238xxeDdFI'
  },
  {
    id:'three',
    isShow:false,
    title:'3. Digital Transformation Roadmap',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:'/images/media/img_16.jpg',
    video_id:'enFWl6n-cFs'
  },
]
</script>
