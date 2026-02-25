<template>
  <div>
    <!-- text feature area start -->
    <div class="text-feature-one mt-150 lg-mt-80">
      <div class="container">
        <div class="line-wrapper position-relative">
          <div class="row align-items-center">
            <div class="col-lg-5 wow fadeInLeft">
              <div class="title-one">
                <div class="upper-title">About us</div>
                <h2>15k+ Client using Our Services.</h2>
              </div>
              <p class="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                Your success is our mission. As business advisors, we offer
                expert guidance, unlocking your potential for growth and
                profitability
              </p>
              <nuxt-link href="/contact" class="btn-three icon-link mt-15 md-mb-40">
                <span>Request a Callback</span>
                <img src="/images/icon/icon_09.svg" alt="" class="lazy-img icon ms-1"/>
              </nuxt-link>
            </div>
            <div class="col-lg-6 ms-auto wow fadeInRight">
              <div
                v-for="item in text_feature"
                :key="item.id"
                class="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20"
              >
                <img :src="item.icon" alt="" class="lazy-img icon" />
                <div class="ps-4">
                  <h4 class="fw-bold mb-20">{{ item.title }}</h4>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <img src="/images/shape/shape_05.svg" alt="" class="lazy-img shapes shape_01"/>
        </div>

        <!-- counter area -->
        <counter-one spacing="mt-80 lg-mt-20" />
        <!-- counter area -->
      </div>
    </div>
    <!-- text feature area end -->

    <!-- block feature area start -->
    <div class="block-feature-one position-relative light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60">
			<div class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-md-6">
							<div class="title-one text-center text-md-start mb-30 sm-mb-10">
								<h2>Provide quality Services.</h2>
							</div>
							<!-- /.title-one -->
						</div>
					</div>
					<div class="row justify-content-center">
						<div v-for="(item,i) in service_data" :key="item.id" class="col-lg-4 col-md-6 d-flex wow fadeInUp" :data-wow-delay="`0.${i}s`">
							<div class="card-style-two vstack tran3s w-100 mt-30">
                <img :src="item.icon" alt="" class="lazy-img icon me-auto">
								<h4 class="fw-bold mt-30 mb-25">{{item.title}}</h4>
								<p class="mb-20">{{item.desc}}</p>
								<nuxt-link href="/service-details" class="arrow-btn tran3s mt-auto stretched-link">
                  <img src="/images/icon/icon_09.svg" alt="" class="lazy-img">
                </nuxt-link>
							</div>
						</div>
					</div>

					<div class="section-subheading sm-mt-40">
						<p class="text-lg">
              Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis nostru 
            </p>
						<nuxt-link href="/service-v1" class="btn-three icon-link">
							<span>See All Services</span>
							<img src="/images/icon/icon_09.svg" alt="" class="lazy-img icon ms-1">
						</nuxt-link>
					</div>
					<!-- /.section-subheading -->
				</div>
			</div>
		</div>
    <!-- block feature area end -->

    <!-- text feature area start -->
    <div class="text-feature-three text-feature-one position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
						<div class="title-one">
							<div class="upper-title">Don’t Be Fool</div>
							<h2>Guideline for your financial grow.</h2>
						</div>
						<!-- /.title-one -->
						<p class="text-lg mt-35 lg-mt-10 mb-30">Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability</p>
						<div>
              <nuxt-link href="/contact" class="btn-four mt-15">Let’s Talk</nuxt-link>
            </div>
						<div class="counter-wrapper mt-50 lg-mt-40 pt-5">
							<div class="row">
								<div class="col-xl-6 col-sm-5">
									<div class="counter-block-one mt-20">
										<div class="main-count fw-bold"><span class="counter">1.2</span>x</div>
										<p class="m0">Rapid wealth grow</p>
									</div>
									<!-- /.counter-block-one -->
								</div>
								<div class="col-xl-6 col-sm-7">
									<div class="counter-block-one mt-20">
										<div class="main-count fw-bold">$<span class="counter">1.3</span>b+</div>
										<p class="m0">Cumulative trading volume</p>
									</div>
									<!-- /.counter-block-one -->
								</div>
							</div>
						</div>
						<!-- /.counter-wrapper -->
					</div>
					<div class="col-xxl-7 col-lg-6 wow fadeInLeft">
						<div class="media-list-item me-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-40 d-flex align-items-end">
							<ul class="style-none">
								<li>Mobile app easy management & access</li>
								<li>Ton’s of features for handle the card easily</li>
								<li>Strong security system.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    <!-- text feature area end -->
  </div>
</template>

<script setup lang="ts">
const text_feature = [
  {
    id: 1,
    icon: "/images/icon/icon_10.svg",
    title: "Our Mission",
    desc: "Our mission is to reshape lives by offering financial expertise, faster growth, & securing futures through trusted partnerships & innovation.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_11.svg",
    title: "Our company vision.",
    desc: "Our vision is to create a financially secure future for all, offering innovative solutions & expert guidance to navigate prosperity.",
  },
];

const service_data = [
  {
    id:1,
    icon:'/images/icon/icon_06.svg',
    title:'Expense Report',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
  },
  {
    id:2,
    icon:'/images/icon/icon_07.svg',
    title:'Book keeping',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
  {
    id:3,
    icon:'/images/icon/icon_08.svg',
    title:'Tax Preparation',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
  },
]
</script>
