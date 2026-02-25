<template>
  <div class="order-review">
      <table class="product-review">
          <tbody>
              <tr v-for="item in cartStore.cart_products" :key="item.id">
                  <th>
                      <span>{{ item.title }}</span>
                  </th>
                  <td><span>${{ item.price * item.orderQuantity! }}</span></td>
              </tr>
              <tr>
                  <th>
                      <span>Subtotal</span>
                  </th>
                  <td><span>${{ cartStore.totalPriceQuantity.total.toFixed(2) }}</span></td>
              </tr>
              <tr>
                  <th>
                      <span>Shipping</span>
                  </th>
                  <td><span>${{shipCost}}</span></td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <th><span>Total</span></th>
                  <td><span>${{(cartStore.totalPriceQuantity.total + shipCost).toFixed(2)}}</span></td>
              </tr>
          </tfoot>
      </table> <!-- /.product-review -->
      <div class="payment-option">
          <ul class="payment-list style-none">
              <li>
                  <input @click="paymentType = 'direct_bank'" type="radio" name="paymenttype" value="direct_bank" :checked="paymentType === 'direct_bank'" :class="`payment-radio-button ${paymentType === 'direct_bank' ? 'active' : ''}`">
                  <label>Direct Bank Transfer</label>
                  <p>Make your payment directly into our account. Plase use your Order ID as payment reference.</p>
              </li>
              <li>
                  <input @click="paymentType = 'paypal'" type="radio" name="paymenttype" value="paypal" class="payment-radio-button" :checked="paymentType === 'paypal'">
                  <label>PayPal</label>
              </li>
              <li>
                  <input @click="paymentType = 'creditCard'" type="radio" name="paymenttype" value="creditCard" id="credit-card" class="payment-radio-button" :checked="paymentType === 'creditCard'">
                  <label>Credit Card</label>
              </li>
              <li :class="`credit-card-form ${paymentType === 'creditCard' ? 'show' : ''}`">
                  <div class="row">
                      <div class="col-12">
                          <h6>Card number</h6>
                          <input type="text">
                      </div>
                      <div class="col-8">
                          <h6>Expiry date</h6>
                          <div class="d-flex align-items-center">
                              <input type="tel" placeholder="MM">
                              <span>/</span>
                              <input type="tel" placeholder="YY">
                          </div>
                      </div>
                      <div class="col-4 ml-auto">
                          <h6>CVV</h6>
                          <input type="text">
                      </div>
                  </div>
              </li>
          </ul> <!-- /.payment-list -->
      </div> <!-- /.payment-option -->
      <p class="policy-text">Your personal data will be use for your order, support your experience through this website & for other purpose described in our privacy policy</p>
      <div class="agreement-checkbox">
          <input type="checkbox" id="agreement">
          <label for="agreement">I have read and agree to the website terms and conditions*</label>
      </div> <!-- /.agreement-checkbox -->

      <button type="submit" class="btn-ten tran3s w-100">Place Order</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();
let shipCost = ref<number>(5);
let paymentType = ref<string>("direct_bank");
</script>