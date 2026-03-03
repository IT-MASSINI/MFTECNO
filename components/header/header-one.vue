<template>
	<header :class="`theme-main-menu menu-overlay menu-style-two sticky-menu ${isSticky ? 'fixed' : ''}`">
		<div class="gap-fix info-row">
			<div class="d-md-flex justify-content-between">
				<div class="greetings text-center">
					<span class="opacity-50">Hello!!</span> 
					<span class="fw-500">Welcome to babun.</span>
				</div>
				<ul class="style-none d-none d-md-flex contact-info">
					<li class="d-flex align-items-center"><img src="/images/icon/icon_14.svg" alt=""
							class="lazy-img icon me-2"> <a href="mailto:babuninc@company.com"
							class="fw-500">babuninc@company.com</a></li>
					<li class="d-flex align-items-center"><img src="/images/icon/icon_15.svg" alt=""
							class="lazy-img icon me-2"> <a href="tel:+757 699-4478" class="fw-500">+757 699-4478</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="inner-content gap-fix">
			<div class="top-header position-relative">
				<div class="d-flex align-items-center">
					<div class="logo order-lg-0">
						<nuxt-link href="/" class="d-flex align-items-center">
							<!-- Logo desktop: visibile da tablet in su -->
							<img 
								src="/images/logo/logo_mftecno.svg" 
								alt="MF TECNO Logo"
								class="logo-desktop"
							>
							<!-- Logo mobile: visibile solo su mobile -->
							<img 
								src="/images/logo/logo_mftecno_small.svg" 
								alt="MF TECNO Logo"
								class="logo-mobile"
							>
						</nuxt-link>
					</div>
					<!-- logo -->
					<div class="right-widget order-lg-3 ms-auto">
						<ul class="d-flex align-items-center style-none">
							<li class="d-flex align-items-center login-btn-one me-3 me-md-0">
								<img src="/images/icon/icon_16.svg" alt="" class="lazy-img icon me-2">
								<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" class="fw-500">Login</a>
							</li>
							<li class="d-none d-md-inline-block ms-3 ms-lg-5 me-3 me-lg-0">
								<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal"
									class="signup-btn-one icon-link">
									<span>Signup</span>
									<div class="icon rounded-circle d-flex align-items-center justify-content-center">
										<i class="bi bi-arrow-right"></i>
								  </div>
								</a>
							</li>
						</ul>
					</div> <!--/.right-widget-->
					<nav class="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
						<button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
							aria-label="Toggle navigation">
							<span></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<header-nav-menus />
						</div>
					</nav>
				</div>
			</div> <!--/.top-header-->
		</div> <!-- /.inner-content -->

	</header>
	<!-- login modal -->
	<popup-login />
	<!-- login modal -->

</template>

<script setup lang="ts">
const { isSticky } = useSticky();
</script>

<style scoped>
/* ===========================================
   LOGO RESPONSIVO - Breakpoints
   ===========================================
   - Desktop full (>= 1200px):  logo desktop al 110%
   - Tablet / ~50% (768px-1199px): logo desktop al 90%
   - Mobile (< 768px): logo small
   =========================================== */

/* --- Stato base: nascondo il logo mobile --- */
.logo-desktop {
	display: inline-block;
}
.logo-mobile {
	display: none;
}

/* --- Desktop pieno (>= 1200px): logo al 130% --- */
@media (min-width: 1200px) {
	.logo-desktop {
		transform: scale(1.3);
		transform-origin: left center;
		transition: transform 0.3s ease;
	}
}

/* --- Tablet / viewport medio (768px - 1199px): logo al 90% --- */
@media (min-width: 840px) and (max-width: 1199.98px) {
	.logo-desktop {
		transform: scale(1.0);
		transform-origin: left center;
		transition: transform 0.3s ease;
	}
}

/* --- Tablet / viewport medio (768px - 1199px): logo al 90% --- */
@media (min-width: 768px) and (max-width: 839.98px) {
	.logo-desktop {
		transform: scale(0.9);
		transform-origin: left center;
		transition: transform 0.3s ease;
	}
}

/* --- Mobile (< 768px): switch al logo small --- */
@media (max-width: 767.98px) {
	.logo-desktop {
		display: none;
	}
	.logo-mobile {
		display: inline-block;
		transition: transform 0.3s ease;
	}
}
</style>
