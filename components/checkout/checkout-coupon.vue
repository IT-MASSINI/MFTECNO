<template>
  <form @submit="onSubmit" id="promo-code" class="collapse">
    <p>Please enter your promo code below.</p>
    <div>
      <Field name="coupon" v-slot="{ field }">
        <input v-bind="field" name="coupon" type="text" placeholder="Coupon code">
      </Field>
      <err-msg :msg="errors.coupon" />
    </div>
    <button type="submit" class="btn-ten tran3s">Apply coupon</button>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  coupon?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    coupon: yup.string().required().label("Message"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>
