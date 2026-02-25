<template>
 <div class="product-block-one mb-60 md-mb-40">
    <div class="img-holder style-two">
        <nuxt-link :href="`/shop-details/${item.id}`" class="d-flex align-items-center justify-content-center h-100">
            <img :src="item.img" alt="" class="lazy-img product-img tran4s w-100">
        </nuxt-link>
        <a @click.prevent="wishlistStore.add_wishlist_product(item)" href="#" :class="`cart-icon ${isItemInWishlist(item) ? 'active' : ''}`">
          <i class="bi bi-suit-heart"></i>
        </a>
        <a v-if="!isItemInCart(item)" @click.prevent="cartStore.addCartProduct(item)" href="#" class="cart-button">
          Add to cart
        </a>
        <nuxt-link v-if="isItemInCart(item)" href="/cart" class="cart-button">
          View cart
        </nuxt-link>
    </div> <!-- /.img-holder -->
    <div class="product-meta">
        <div class="d-lg-flex align-items-center justify-content-between">
            <nuxt-link :href="`/shop-details/${item.id}`" class="product-title">
              {{item.title}}
            </nuxt-link>
            <ul class="style-none d-flex rating">
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star"></i></li>
            </ul>
        </div>
        <div class="price">${{item.price.toFixed(2)}}</div>
    </div> <!-- /.product-meta -->
 </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-d-t";
import { useCartStore } from "@/pinia/useCartStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

defineProps<{item:IProduct}>();

function isItemInCart (item:IProduct) {
  return cartStore.cart_products.some((c:IProduct) => c.id === item.id)
}
function isItemInWishlist (item:IProduct) {
  return wishlistStore.wishlists.some((c:IProduct) => c.id === item.id)
}
</script>