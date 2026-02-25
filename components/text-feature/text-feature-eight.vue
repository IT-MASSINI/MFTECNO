<template>
  <div v-if="!style_2" class="text-feature-eight mt-130 lg-mt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 wow fadeInLeft">
          <div class="pe-xl-5 me-xxl-4 mt-50 lg-mt-10">
            <div class="title-three mb-50 lg-mb-30">
              <div class="upper-title">Card</div>
              <h2>Take control your Money.</h2>
            </div>
            <!-- /.title-three -->
            <div
              class="accordion accordion-style-three mb-70 lg-mb-40"
              id="accordionOne"
            >
              <faq-item
                v-for="item in faq_data"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                :desc="item.desc"
                :isShow="item.isShow"
                parent="accordionOne"
              />
            </div>
            <nuxt-link href="/about-us" class="btn-thirteen tran3 flex-fill">Learn More</nuxt-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 m-auto wow fadeInRight">
          <div class="media-wrapper md-mt-40">
            <img src="/images/assets/screen_16.png" alt="" class="lazy-img ms-auto"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="style_2" class="text-feature-eight mt-160 lg-mt-80">
			<div class="container">
				<div class="row">
					<div class="col-xl-5 col-lg-6 wow fadeInLeft">
            <div class="title-one mt-20">
							<div class="upper-title">Why Choose Us</div>
							<h2 class="color-deep">We’ve been helping customer globally.</h2>
						</div>
						<!-- /.title-one -->
            </div>
            <div class="col-lg-6 ms-auto wow fadeInRight">
              <div class="accordion accordion-style-three md-mt-40" id="accordionOne">
							<faq-item
                v-for="item in faq_data"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                :desc="item.desc"
                :isShow="item.isShow"
                parent="accordionOne"
                cls="fw-bold"
              />
						</div>
           </div>
				</div>
			</div>
		</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{style_2?:boolean}>(),{
  style_2:false
});
const faq_data = [
  {
    id: "one",
    title: "Quality Services",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
    isShow: true,
  },
  {
    id: "two",
    title: "Fair Pricing",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
  {
    id: "three",
    title: "Trusted & Secure",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
];
</script>
