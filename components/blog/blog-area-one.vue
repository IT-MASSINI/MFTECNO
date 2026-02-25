<template>
	<div :class="`blog-section-two position-relative ${spacing}`">
		<div class="container">
			<div class="position-relative">
				<div class="title-one mb-30 lg-mb-10">
					<h2>Insights News.</h2>
				</div>
				<!-- /.title-one -->

				<div class="row gx-xl-5">
					<div v-for="blog in blog_items" :key="blog.id" class="col-md-6">
						<article class="blog-meta-two mt-35 wow fadeInUp">
							<figure class="post-img position-relative d-flex align-items-end m0"
								:style="`background-image: url(${blog.img});`">
								<nuxt-link :href="`/blog-details/${blog.id}`" class="stretched-link date tran3s">
									{{ blog.date.split(" ")[0] }} {{ blog.date.split(" ")[1] }}
								</nuxt-link>
							</figure>
							<div class="post-data">
								<div class="d-flex justify-content-between align-items-sm-center flex-wrap">
									<nuxt-link :href="`/blog-details/${blog.id}`" class="blog-title">
										<h4>{{ blog.title }}</h4>
									</nuxt-link>
									<nuxt-link :href="`/blog-details/${blog.id}`"
										class="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
										<i class="bi bi-arrow-up-right"></i>
									</nuxt-link>
								</div>
								<div class="post-info">{{ blog.post_info }} </div>
							</div>
						</article>
						<!-- /.blog-meta-two -->
					</div>
				</div>

				<div class="section-btn sm-mt-60">
					<nuxt-link href="/blog" class="btn-seven d-inline-flex align-items-center">
						<span class="text">See all blogs</span>
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
import blog_data from '@/data/blog-data';

const blog_items = [...blog_data].filter(b => b.page === 'home');

withDefaults(defineProps<{ spacing?: string }>(), {
	spacing: 'mt-20 pb-150 lg-pb-80'
})
</script>
