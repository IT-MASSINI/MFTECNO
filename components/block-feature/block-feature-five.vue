<template>
  <div class="block-feature-five light-bg position-relative mt-80 md-mt-50 pt-120 lg-pt-80 pb-150 lg-pb-80">
			<div class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-lg-8 wow fadeInLeft">
							<div class="title-one mb-50 lg-mb-30 md-mb-10">
								<h2>Confidently secure assets with expert guidance.</h2>
							</div>
							<!-- /.title-one -->
						</div>
					</div>

					<div class="row">
						<div v-for="(item,i) in service_data" :key="item.id" class="col-xl-3 col-md-6 d-flex wow fadeInUp" :data-wow-delay="`0.${i}s`">
							<div class="card-style-seven text-center vstack tran3s w-100 mt-30">
								<div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <img :src="item.icon" alt="icon" class="lazy-img">
                </div>
								<h4 class="fw-bold mt-40 md-mt-20 mb-20">{{item.title}}</h4>
								<p class="mb-60 md-mb-40">{{item.desc}}</p>
								<nuxt-link href="/service-details" class="arrow-btn tran3s m-auto stretched-link">
                  <img src="/images/icon/icon_09.svg" alt="icon" class="lazy-img">
                </nuxt-link>
							</div>
							<!-- /.card-style-seven -->
						</div>
					</div>

					<div class="section-btn md-mt-40">
						<nuxt-link href="/service-v2" class="btn-seven d-inline-flex align-items-center">
							<span class="text">All Services</span>
							<div class="icon tran3s rounded-circle d-flex align-items-center">
                <img src="/images/icon/icon_27.svg" alt="icon" class="lazy-img">
              </div>
						</nuxt-link>
					</div>
				</div>
			</div>
			<img src="/images/shape/shape_06.svg" alt="shape" class="lazy-img shapes shape_01">
		</div>
</template>

<script setup lang="ts">

const service_data = [
  {
    id: 1,
    icon: "/images/icon/icon_23.svg",
    title: "Banking",
    desc: "Effortless payments and transfers with our streamlined banking process.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_24.svg",
    title: "Earning",
    desc: "Earning potential grows with dedication, innovation, and continuous improvement.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_25.svg",
    title: "Expense Track",
    desc: "Empower your budgeting with accurate and intuitive expense tracking",
  },
  {
    id: 4,
    icon: "/images/icon/icon_26.svg",
    title: "Savings",
    desc: "Secure your dreams through disciplined savings & prudent investments.",
  },
];

</script>
