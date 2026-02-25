<template>
  <form @submit="onSubmit" id="contact-form" data-toggle="validator">
    <div class="messages"></div>
    <div class="row controls">
      <div class="col-12">
        <div class="input-group-meta form-group mb-30">
          <label for="">Name*</label>
          <Field name="name" v-slot="{ field }"> 
            <input v-bind="field" name="name" type="text" placeholder="Your Name *">
          </Field>
          <div class="help-block with-errors">
            <err-msg :msg="errors.name" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="input-group-meta form-group mb-40">
          <label for="">Email*</label>
           <Field name="email" v-slot="{ field }"> 
            <input v-bind="field" name="email" type="email" placeholder="Email Address*">
          </Field>
          <div class="help-block with-errors">
            <err-msg :msg="errors.email" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="input-group-meta form-group mb-35">
           <Field name="message" v-slot="{ field }">
            <textarea v-bind="field" name="message" placeholder="Your message*"></textarea>
          </Field>
          <div class="help-block with-errors">
            <err-msg :msg="errors.message" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn-four tran3s w-100 d-block">Send Message</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>
