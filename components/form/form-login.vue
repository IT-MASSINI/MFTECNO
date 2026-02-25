<template>
  <form @submit="onSubmit">
    <div class="row">
      <div class="col-12">
        <div class="input-group-meta position-relative mb-25">
          <label>Email*</label>
          <Field name="email" v-slot="{ field }"> 
            <input v-bind="field" name="email" type="email" placeholder="Youremail@gmail.com*">
          </Field>
          <err-msg :msg="errors.email" />
        </div>
      </div>
      <div class="col-12">
        <div class="input-group-meta position-relative mb-20">
          <label>Password*</label>
          <Field name="password" v-slot="{ field }">
            <input
              v-bind="field"
              name="password"
              :type="showPass ? 'text' : 'password'"
              placeholder="Enter Password"
            />
          </Field>
          <span @click="showPass = !showPass" class="placeholder_icon">
            <span :class="`passVicon ${showPass ? 'eye-slash' : ''}`">
              <img src="/images/icon/icon_13.svg" alt="" />
            </span>
          </span>
          <err-msg :msg="errors.password" />
        </div>
      </div>
      <div class="col-12">
        <div class="agreement-checkbox d-flex justify-content-between align-items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label for="remember">Keep me logged in</label>
          </div>
          <a href="#">Forget Password?</a>
        </div>
        <!-- /.agreement-checkbox -->
      </div>
      <div class="col-12">
        <button type="submit" class="btn-four w-100 tran3s d-block mt-20">Login</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";

let showPass = ref<boolean>(false);

interface IFormValues {
  email?: string | null;
  password?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});

</script>
