<template>
  <div class="checkout-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
    <div class="container">
      <div class="checkout-toggle-area mb-80 md-mb-60">
        <p>Already have an account? <button class="d-inline-block" data-bs-toggle="collapse"
            data-bs-target="#login-form">Click here to login.</button></p>
        <!-- login form -->
        <checkout-login />
        <!-- login form -->
        <p>Have a promo code? <button class="d-inline-block" data-bs-toggle="collapse"
            data-bs-target="#promo-code">Click to enter your code.</button></p>
        <!-- coupon form -->
        <checkout-coupon />
        <!-- coupon form -->
      </div>
       <!-- /.checkout-toggle-area -->
      <form @submit="onSubmit" class="checkout-form">
        <div class="row">
          <div class="col-lg-7">
            <h2 class="main-title">Billign Details</h2>
            <div class="user-profile-data">
              <div class="row">
                <div class="col-lg-6 ns-input">
                  <Field name="firstName" v-slot="{ field }">
                    <input v-bind="field" name="firstName" type="text" placeholder="First Name*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.firstName" />
                </div>
                <div class="col-lg-6 ns-input">
                  <Field name="lastName" v-slot="{ field }">
                    <input v-bind="field" name="lastName" type="text" placeholder="Last Name*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.lastName" />
                </div>
                <div class="col-12 ns-input">
                  <Field name="company" v-slot="{ field }">
                    <input v-bind="field" name="company" type="text" placeholder="Company Name*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.company" />
                </div>
                <div class="col-12 ns-input">
                  <Field name="country" v-slot="{ field }">
                    <select v-bind="field" name="country" class="theme-select-menu">
                      <option value="">Country*</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">&Aring;land Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                    </select>
                  </Field>
                  <err-msg :msg="errors.country" />
                </div>
                <div class="col-12 ns-input">
                  <Field name="address" v-slot="{ field }">
                    <input v-bind="field" name="address" type="text" placeholder="Street Address*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.address" />
                </div>

                <div class="col-lg-4 ns-input">
                  <Field name="city" v-slot="{ field }">
                    <input v-bind="field" name="city" type="text" placeholder="Town/City*" class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.city" />
                </div>

                <div class="col-lg-4 ns-input">
                  <Field name="state" v-slot="{ field }">
                    <input v-bind="field" name="state" type="text" placeholder="State*" class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.state" />
                </div>

                <div class="col-lg-4 ns-input">
                  <Field name="postcode" v-slot="{ field }">
                    <input v-bind="field" name="postcode" type="text" placeholder="Zip Code*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.postcode" />
                </div>

                <div class="col-lg-6 ns-input">
                  <Field name="email" v-slot="{ field }">
                    <input v-bind="field" name="email" type="email" placeholder="Email Address*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.email" />
                </div>

                <div class="col-lg-6 ns-input">
                  <Field name="phone" v-slot="{ field }">
                    <input v-bind="field" name="phone" type="text" placeholder="Phone Number*"
                      class="single-input-wrapper">
                  </Field>
                  <err-msg :msg="errors.phone" />
                </div>

                <div class="col-12">
                  <ul class="checkbox-list style-none">
                    <li>
                      <input type="checkbox" id="new-account">
                      <label for="new-account">Create Account?</label>
                    </li>
                    <li>
                      <input type="checkbox" id="shipping">
                      <label for="shipping">Ship to Different Address?</label>
                    </li>
                  </ul>
                </div>
                <div class="col-12">
                  <div class="other-note-area">
                    <p>Order Note (Optional)</p>
                    <Field name="note" v-slot="{ field }">
                      <textarea v-bind="field" name="note"
                        placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </Field>
                  </div> <!-- /.other-note-area -->
                </div>
              </div> <!-- /.row -->
            </div> <!-- /.user-profile-data -->
          </div> <!-- /.col- -->

          <div class="col-xxl-4 col-lg-5 ms-auto">
            <div class="order-confirm-sheet md-mt-60">
              <h2 class="main-title">Order Details</h2>
              <checkout-order /> <!-- /.order-review -->
            </div> <!-- /.order-confirm-sheet -->
          </div>
        </div> <!-- /.row -->
      </form> <!-- /.checkout-form -->
    </div> <!-- /.container -->
  </div>
</template>

<script setup lang="ts">
import { useForm, Field } from 'vee-validate';
import * as yup from 'yup';
import { useCartStore } from '@/pinia/useCartStore';

const cartStore = useCartStore();

interface IFormValues {
  firstName?: string | null;
  lastName?: string | null;
  country?: string | null;
  company?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  postcode?: string | null;
  email?: string | null;
  phone?: string | null;
  note?: string | null;
}
const { errors, handleSubmit, resetForm, values } = useForm<IFormValues>({
  validationSchema: yup.object({
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().required().label("Last Name"),
    country: yup.string().required().label("Country"),
    company: yup.string().required().label("Company"),
    address: yup.string().required().label("Address"),
    city: yup.string().required().label("City"),
    state: yup.string().required().label("State"),
    postcode: yup.string().required().label("Postcode"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    note: yup.string().label("Order note"),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>