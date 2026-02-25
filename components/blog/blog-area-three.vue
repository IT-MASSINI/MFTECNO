<template>
	<div class="blog-section-three position-relative mt-160 lg-mt-80 mb-150 lg-mb-80">
		<div class="container">
			<div class="position-relative">
				<div class="title-one mb-20 lg-mb-10">
					<h2 class="text-dark">Latest News.</h2>
				</div>
				<!-- /.title-one -->
				<p class="text-lg mb-30 lg-mb-10">Get the latest update, trips & tricks from our expert.</p>

				<div class="row gx-xl-5">
					<div v-for="(item) in blog_items" :key="item.id" class="col-md-6">
						<article class="blog-meta-one style-two d-flex flex-column-reverse mt-35 wow fadeInUp"
							:data-wow-delay="`0.${item.id}s`">
							<div class="post-data">
								<div class="post-info">
									<span class="fw-500 text-dark">{{ item.author }} -</span> {{ item.date }}
								</div>
								<nuxt-link :href="`/blog-details/${item.id}`" class="mt-15">
									<h4 class="tran3s blog-title">{{ item.title }}</h4>
								</nuxt-link>
							</div>
							<figure class="post-img position-relative d-flex justify-content-end align-items-end m0"
								:style="`background-image: url(${item.img});`">
								<nuxt-link :href="`/blog-details/${item.id}`"
									class="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s">
									<i class="bi bi-arrow-up-right"></i>
								</nuxt-link>
							</figure>
						</article>
						<!-- /.blog-meta-one -->
					</div>
				</div>

				<div class="section-btn md-mt-50">
					<nuxt-link href="/blog" class="btn-eleven d-inline-flex align-items-center">
						<span class="text">See all blogs</span>
						<div class="icon tran3s rounded-circle d-flex align-items-center">
							<img src="/images/icon/icon_27.svg" alt="" class="lazy-img">
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';

const blog_items = [...blog_data].filter(b => b.page === 'home');
</script>
