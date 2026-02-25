<template>
  <form @submit="onSubmit" id="login-form" class="collapse">
    <p>Please enter your details below.</p>
    <div class="row">
      <div class="col-md-6">
        <Field name="email" v-slot="{ field }"> 
          <input v-bind="field" name="email" type="email" placeholder="User name or email*">
        </Field>
        <err-msg :msg="errors.email" />
      </div>
      <div class="col-md-6">
        <Field name="password" v-slot="{ field }">
          <input v-bind="field" name="password" type="password" placeholder="Password*">
        </Field>
        <err-msg :msg="errors.password" />
      </div>
    </div>

    <button type="submit" class="btn-ten tran3s">Login</button>
    <a href="#" class="lost-passw">Lost your Password?</a>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

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
