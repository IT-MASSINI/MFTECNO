<template>
  <div>
  <nuxt-layout name="layout-one">
      <!-- cart area start -->
      <div class="cart-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
        <div class="container">
          <div v-if="!wishlistStore.wishlists.length" class="text-center pt-50">
            <h3>No Wishlist Items Found</h3>
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
                    <th>Add Cart</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                    <tr v-for="item in wishlistStore.wishlists" :key="item.id">
                      <td class="product-thumbnails">
                        <nuxt-link href="#" class="product-img">
                          <img :src="item.img" alt="cart-img" />
                        </nuxt-link>
                      </td>
                      <td class="product-info">
                        <nuxt-link href="#" class="product-name">
                          {{item.title}}
                        </nuxt-link>
                        <div class="serial">#859632007881</div>
                        <ul class="style-none">
                          <li class="size">Size: 23”</li>
                          <li class="color">Color: Red</li>
                        </ul>
                      </td>
                      <td class="price">
                        <span>${{item.price}}</span>
                      </td>
                      <td class="cart-btn d-flex align-items-center justify-content-center" style="transform: translateY(18px);">
                        <button @click="cartStore.addCartProduct(item)" class="btn-ten tran3s">
                          Add To cart
                        </button>
                      </td>
                      <td>
                        <a @click.prevent="wishlistStore.removeWishlist(item)" class="remove-product pointer">
                          x
                        </a>
                      </td>
                    </tr>

                </tbody>
              </table>
            </div>
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
useSeoMeta({ title: "Wishlist - Babun" });

import { useWishlistStore } from "@/pinia/useWishlistStore";
import { useCartStore } from "@/pinia/useCartStore";
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
</script>
