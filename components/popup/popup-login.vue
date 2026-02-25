<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="form-wrapper m-auto">
            <ul class="nav nav-tabs border-0 w-100" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#fc1"
                  role="tab"
                >
                  Login
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#fc2"
                  role="tab"
                >
                  Signup
                </button>
              </li>
            </ul>
            <div class="tab-content mt-30">
              <div class="tab-pane show active" role="tabpanel" id="fc1">
                <div class="text-center mb-20">
                  <h2>Hi, Welcome Back!</h2>
                  <p>Still don't have an account? <a href="#">Sign up</a></p>
                </div>
                <!-- login form -->
                <form-login />
                <!-- login form -->
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane" role="tabpanel" id="fc2">
                <div class="text-center mb-20">
                  <h2>Register</h2>
                  <p>Already have an account? <a href="#">Login</a></p>
                </div>
                <!-- register form -->
                <form-register />
                <!-- register form -->
              </div>
              <!-- /.tab-pane -->
            </div>

            <div class="d-flex align-items-center mt-30 mb-10">
              <div class="line"></div>
              <span class="pe-3 ps-3 fs-6">OR</span>
              <div class="line"></div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <a href="#" class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                  <img src="/images/icon/google.png" alt="" />
                  <span class="ps-3">Signup with Google</span>
                </a>
              </div>
              <div class="col-sm-6">
                <a href="#" class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                  <img src="/images/icon/facebook.png" alt="" />
                  <span class="ps-3">Signup with Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
