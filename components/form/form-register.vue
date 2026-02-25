<template>
  <form @submit="onSubmit">
    <div class="row">
      <div class="col-12">
        <div class="input-group-meta position-relative mb-25">
          <label>Name*</label>
          <Field name="name" v-slot="{ field }">
            <input v-bind="field" id="name" type="text" placeholder="John Doe">
          </Field>
          <err-msg :msg="errors.name" />
        </div>
      </div>
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
            <input type="checkbox" id="remember2" />
            <label for="remember2">By hitting the "Register" button, you agree to the
              <a href="#">Terms conditions</a> &
              <a href="#">Privacy Policy</a>
            </label>
          </div>
        </div>
        <!-- /.agreement-checkbox -->
      </div>
      <div class="col-12">
        <button type="submit" class="btn-four w-100 tran3s d-block mt-20">Sign up</button>
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
  name?: string | null;
  email?: string | null;
  password?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>
