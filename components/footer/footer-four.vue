<template>
 <div class="footer-four">
    <div class="container">
      <div class="inner-wrapper">
        <div class="row justify-content-between">
          <div class="col-lg-4 footer-intro mb-40">
            <div class="logo mb-25">
              <nuxt-link href="/">
                <img src="/images/logo/logo_01.svg" alt="">
              </nuxt-link>
            </div> 
            <!-- logo -->
            <p class="mb-55 md-mb-30">2190 Urban Terrace, Mirpur, Equal <br>Licensed in 50 states.</p>
            <ul class="style-none">
              <li class="d-flex align-items-center">
                <img src="/images/icon/icon_49.svg" alt="" class="lazy-img icon me-3">
                <a href="#">babuninc@company.com</a>
              </li>
              <li class="d-flex align-items-center">
                <img src="/images/icon/icon_50.svg" alt="" class="lazy-img icon me-3">
                <a href="#">+757 699-4478</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-4 mb-20">
            <h5 class="footer-title">Links</h5>
            <ul class="footer-nav-link style-none">
              <li><nuxt-link href="/">Home</nuxt-link></li>
              <li><nuxt-link href="/pricing">Pricing Plan</nuxt-link></li>
              <li><nuxt-link href="/about-us">About us</nuxt-link></li>
              <li><nuxt-link href="/service-v1">Our services</nuxt-link></li>
              <li><nuxt-link href="/project-v1">Portfolio</nuxt-link></li>
              <li><nuxt-link href="/service-v2">Features</nuxt-link></li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-4 mb-20">
            <h5 class="footer-title">Company</h5>
            <ul class="footer-nav-link style-none">
              <li><nuxt-link href="/about-us-2">About us</nuxt-link></li>
              <li><nuxt-link href="/blog-grid">Blogs</nuxt-link></li>
              <li><nuxt-link href="/faq">FAQ’s</nuxt-link></li>
              <li><nuxt-link href="/contact">Contact</nuxt-link></li>
            </ul>
          </div>
          <div class="col-xxl-2 col-lg-3 col-sm-4 mb-20">
            <h5 class="footer-title">Support</h5>
            <ul class="footer-nav-link style-none">
              <li><nuxt-link href="/contact">Terms of use</nuxt-link></li>
              <li><nuxt-link href="/contact">Terms & conditions</nuxt-link></li>
              <li><nuxt-link href="/contact">Privacy</nuxt-link></li>
              <li><nuxt-link href="/contact">Cookie policy</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div> <!-- /.inner-wrapper -->
    </div>
    <div class="container">
      <div class="bottom-footer">
        <div class="row">
          <div class="col-xl-4 col-lg-3 order-lg-3 mb-15">
            <ul class="style-none d-flex align-items-center justify-content-center justify-content-lg-end social-icon">
              <li><a href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a href="#"><i class="bi bi-dribbble"></i></a></li>
              <li><a href="#"><i class="bi bi-instagram"></i></a></li>
            </ul>
          </div>
          <div class="col-xl-4 col-lg-6 order-lg-2 mb-15">
            <ul class="style-none bottom-nav d-flex justify-content-center order-lg-last">
              <li><nuxt-link href="/contact">Privacy & Terms</nuxt-link></li>
              <li><nuxt-link href="/contact">Cookies</nuxt-link></li>
              <li><nuxt-link href="/contact">Contact Us</nuxt-link></li>
            </ul>
          </div>
          <div class="col-xl-4 col-lg-3 order-lg-1 mb-15">
            <div class="copyright text-center text-lg-start order-lg-first">Copyright @{{new Date().getFullYear()}} babun inc.</div>
          </div>
        </div>
      </div>
      <!-- /.bottom-footer -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
