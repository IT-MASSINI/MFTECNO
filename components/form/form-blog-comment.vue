<template>
  <form @submit="onSubmit" class="mt-30">
    <div class="input-wrapper mb-35">
      <label>Name*</label>
       <Field name="name" v-slot="{ field }"> 
        <input v-bind="field" name="name" type="text" placeholder="Your Name *">
      </Field>
      <err-msg :msg="errors.name" />
    </div>
    <!-- /.input-wrapper -->
    <div class="input-wrapper mb-40">
      <label>Email*</label>
       <Field name="email" v-slot="{ field }"> 
        <input v-bind="field" name="email" type="email" placeholder="Email Address*">
      </Field>
      <err-msg :msg="errors.email" />
    </div>
    <!-- /.input-wrapper -->
    <div class="input-wrapper mb-30">
       <Field name="comment" v-slot="{ field }">
        <textarea v-bind="field" name="comment" placeholder="Your Comment*"></textarea>
      </Field>
      <err-msg :msg="errors.comment" />
    </div>
    <!-- /.input-wrapper -->
    <button type="submit" class="btn-four tran3s rounded-2">Post Comment</button>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  name?: string | null;
  email?: string | null;
  comment?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    comment: yup.string().required().label("Comment"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>
