<template>
   <div class="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-lg-2">
          <div class="tab-content product-img-tab-content h-100">
              <div class="active h-100">
                <a class="w-100 h-100 d-flex align-items-center justify-content-center">
                  <img :src="activeImg" alt="product-img" class="lazy-img" />
                </a>
              </div>
            </div>
        </div>
        <div class="col-lg-1 order-lg-1">
          <ul class="nav nav-tabs flex-lg-column product-img-tab" id="myTab" role="tablist">
            <li v-for="(imgSrc,i) in product.related_images" :key="i" class="nav-item">
              <button :class="`nav-link ${activeImg === imgSrc ? 'active' : ''}`" @click="activeImg = imgSrc">
                <img :src="imgSrc" alt="img" class="m-auto lazy-img">
              </button>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 order-lg-3">
          <div class="product-info ps-xxl-5 md-mt-40">
            <div class="stock-tag">In Stock</div>
            <h2 class="product-name">{{product.title}}</h2>
            <ul class="style-none d-flex align-items-center rating">
              <li><i class="bi bi-star-fill"></i></li>
              <li><i class="bi bi-star-fill"></i></li>
              <li><i class="bi bi-star-fill"></i></li>
              <li><i class="bi bi-star-fill"></i></li>
              <li><i class="bi bi-star"></i></li>
              <li><a href="#">({{product.reviews.length}} Customer Reviews)</a></li>
            </ul>
            <div class="price"><del>${{product.old_price}}</del> ${{product.price}}</div>
            <p class="availability">{{product.quantity}} Piece Available </p>
            <p class="description-text">Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.</p>
            <ul class="product-feature style-none">
              <li>Free delivery available</li>
              <li>Use promo-code and save up to 25%</li>
            </ul>
            <div class="customize-order">
              <div class="quantity d-flex align-items-center mt-40">
                <h6>Quantity:</h6>
                <div class="button-group">
                  <ul class="style-none d-flex align-items-center">
                    <li><button @click="cartStore.decrement" class="value-decrease">-</button></li>
                    <li>
                      <input type="number" :value="cartStore.orderQuantity" disabled class="product-value val">
                    </li>
                    <li><button @click="cartStore.increment" class="value-increase">+ </button></li>
                  </ul>
                </div>
              </div>
            </div> <!-- /.customize-order -->
            <div class="button-group mt-30 d-sm-flex align-items-center">
              <a href="#" @click.prevent="cartStore.addCartProduct(product)" class="btn-four mt-15 me-sm-4 d-block">Add To Cart</a>
              <a href="#" @click.prevent="wishlistStore.add_wishlist_product(product)" class="btn-six mt-15 d-block">Add To wishlist</a>
            </div>
          </div> <!-- /.product-info -->
        </div>
      </div>
  
      <div class="product-review-tab mt-130 lg-mt-100">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#item1" type="button" role="tab" aria-selected="true">Description</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#item2" type="button" role="tab" aria-selected="false">Technical Info</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#item3" type="button" role="tab" aria-selected="false">Feedback</button>
          </li>
        </ul>
        <div class="tab-content mt-50 lg-mt-20">
          <div class="tab-pane fade show active" id="item1" role="tabpanel">
            <div class="row gx-5">
              <div class="col-xl-6">
                <h5>Specifications:</h5>
                <p>{{product.details.specifications}}</p>
              </div>
              <div class="col-xl-6">
                <h5>Check product main features:</h5>
                <ul class="style-none product-feature">
                  <li v-for="(l,i) in product.details.main_features" :key="i">{{l}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="item2" role="tabpanel">
            <div class="row gx-5">
              <div class="col-xl-6">
                <h5>Check product main features:</h5>
                <ul class="style-none product-feature">
                  <li v-for="(l,i) in product.details.main_features" :key="i">{{l}}</li>
                </ul>
              </div>
              <div class="col-xl-6">
                <h5>Specifications:</h5>
                <p>{{product.details.specifications}}</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="item3" role="tabpanel">
            <div class="row">
              <div class="col-xl-10">
                <div class="user-comment-area">
                  <div v-for="(r) in product.reviews" :key="r.id" class="single-comment d-flex align-items-top">
                    <img :src="r.user" alt="" class="user-img">
                    <div class="user-comment-data">
                      <h6 class="name">{{r.name}}</h6>
                      <ul class="style-none d-flex rating">
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star"></i></li>
                      </ul>
                      <p>{{r.review_text}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- /.product-review-tab -->
  
      <div class="mt-80 lg-mt-50">
        <!-- shop-details-feature -->
        <shop-details-feature/>
        <!-- shop-details-feature -->
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-d-t";
const props = defineProps<{product:IProduct}>();

let activeImg = ref(props.product.img);
import { useCartStore } from "@/pinia/useCartStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
</script>