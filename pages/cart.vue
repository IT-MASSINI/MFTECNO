<template>
 <div>
  <nuxt-layout name="layout-one">
      <!-- cart area start -->
      <div class="cart-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
        <div class="container">
          <div v-if="!cartStore.cart_products.length" class="text-center pt-50">
            <h3>No Cart Items Found</h3>
            <nuxt-link href="/shop" class="btn-ten tran3s update-cart-button mt-20">
              Continue Shipping
            </nuxt-link>
          </div>

          <div v-else class="cart-list-form">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="2">Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartStore.cart_products" :key="item.id">
                    <td class="product-thumbnails">
                      <a href="#" class="product-img">
                        <img :src="item.img" alt=""/>
                      </a>
                    </td>
                    <td class="product-info">
                      <a href="#" class="product-name">{{ item.title }}</a>
                      <div class="serial">#859632007881</div>
                      <ul class="style-none">
                        <li class="size">Size: 23”</li>
                        <li class="color">Color: Red</li>
                      </ul>
                    </td>
                    <td class="price">
                      <span>${{ item.price }}</span>
                    </td>
                    <td class="quantity">
                      <ul class="order-box style-none">
                        <li>
                          <div
                            @click="cartStore.quantityDecrement(item)"
                            class="btn value-decrease"
                          >
                            -
                          </div>
                        </li>
                        <li>
                          <input
                            type="text"
                            :value="item.orderQuantity"
                            :v-model="item.orderQuantity"
                            class="product-value val"
                          />
                        </li>
                        <li>
                          <div
                            @click="cartStore.addCartProduct(item)"
                            class="btn value-increase"
                          >
                            +
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td class="price total-price">
                      <span>${{ item.price * item.orderQuantity! }}</span>
                    </td>
                    <td>
                      <a
                        @click.prevent="cartStore.removeCartProduct(item)"
                        href="#"
                        class="remove-product"
                        >
                        x
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->

            <div class="d-sm-flex justify-content-between cart-footer">
              <div class="coupon-section d-flex flex-column">
                <form
                  @submit.prevent="handleCouponSubmit"
                  class="coupon-form d-lg-flex align-items-center"
                >
                  <input
                    type="text"
                    placeholder="Enter your code"
                    v-model="couponCode"
                  />
                  <button
                    type="submit"
                    class="btn-ten tran3s md-mt-20 xs-mb-20"
                  >
                    Apply Coupon
                  </button>
                </form>
                <!-- /.coupon-form -->
                <div class="mt-auto">
                  <button
                    @click="cartStore.clear_cart()"
                    class="btn-ten tran3s update-cart-button"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
              <!-- /.coupon-section -->

              <div class="cart-total-section d-flex flex-column sm-pt-40">
                <table class="cart-total-table">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        ${{ cartStore.totalPriceQuantity.total.toFixed(2) }}
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping Cost</th>
                      <td>${{ shipCost }}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        ${{(cartStore.totalPriceQuantity.total + shipCost).toFixed(2)}}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- /.cart-total-table -->
                <nuxt-link href="/checkout" class="btn-ten tran3s checkout-process mt-30">
                  Checkout
                </nuxt-link>
              </div>
            </div>
            <!-- /.cart-footer -->
          </div>
        </div>
        <!-- /.container -->
      </div>
      <!-- cart area end -->

      <!-- fancy banner area start -->
      <fancy-banner-three></fancy-banner-three>
      <!-- fancy banner area end -->
  </nuxt-layout>
 </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({ title: "Cart - Babun" });

import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();
let couponCode = ref<string>("");
let shipCost = ref<number>(5);

// handleCouponSubmit
const handleCouponSubmit = () => {
  console.log(couponCode.value);
};
</script>
