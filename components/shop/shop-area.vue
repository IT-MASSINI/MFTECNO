<template>
  <div class="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div class="container">
          <div class="shop-page-header d-lg-flex align-items-center justify-content-between">
              <p class="m0 md-pb-20">Showing <span class="fw-500 text-dark">1–{{filterProducts.slice(startIndex, endIndex).length}}</span> of <span class="fw-500 text-dark">{{filterProducts.length}}</span> results</p>
              <ul class="shop-filter-one style-none d-md-flex align-items-center">
                  <li class="me-md-3 sm-mb-10">
                      <select @change="onPriceChange" class="theme-select-menu">
                          <option value="price">Price</option>
                          <option value="low">Price: low to high</option>
                          <option value="high">Price: high to low</option>
                      </select>
                  </li>
                  <li class="me-md-3 sm-mb-10">
                      <select @change="onCategoryChange" class="theme-select-menu">
                          <option value="">Category</option>
                          <option value="books">Books</option>
                          <option value="visiting-card">Visiting Card</option>
                          <option value="magazine">Magazine</option>
                      </select>
                  </li>
                  <li>
                      <select @change="onFilterChange" class="theme-select-menu">
                          <option value="">Popularity</option>
                          <option value="trending">Trending items</option>
                          <option value="new">Newest items</option>
                      </select>
                  </li>
              </ul>
          </div> <!-- /.shop-page-header -->

          <div class="products-wrapper mt-40">
              <div class="row gx-xxl-5">
                  <div v-for="item in filterProducts.slice(startIndex, endIndex)" :key="item.id" class="col-lg-4 col-sm-6">
                      <shop-product-single :item="item"/>
                  </div>
              </div>

              <div class="pagination-one mt-30 lg-mt-10">
                  <pagination
                    :items-per-page="9"
                    :data="filterProducts"
                    @handle-paginate="handlePagination"
                    cls="justify-content-center"
                  />
              </div>
              <!-- /.pagination-one -->
          </div> <!-- /.products-wrapper -->
      </div>
  </div>
</template>

<script setup lang="ts">
import product_data from '@/data/product-data';
import { type IProduct } from '@/types/product-d-t';

const price_val = ref('');
const category_val = ref('');
const filter_val = ref('');

const onPriceChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  price_val.value = target.value;
};

const onCategoryChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  category_val.value = target.value;
};

const onFilterChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  filter_val.value = target.value;
};

const filterProducts = computed(() => {
  let product_items = [...product_data]
  if(price_val.value === 'low'){
    product_items = [...product_data].sort((a,b) => a.price - b.price)
  }
  else if(price_val.value === 'high'){
    product_items = [...product_data].sort((a,b) => b.price - a.price)
  }
  else if(category_val.value){
    product_items = [...product_data].filter(p => p.category === category_val.value)
  }
  else if(filter_val.value === 'trending'){
    product_items = [...product_data].filter(item => item.reviews.some(review => review.rating > 3));
  }
  else if(filter_val.value === 'new'){
    product_items = [...product_data].slice(-10);
  }
  return product_items;
})


let filteredProductsItems = ref<IProduct[]>(filterProducts.value);
let startIndex = ref<number>(0);
let endIndex = ref<number>(filterProducts.value.length);

const handlePagination = (data: IProduct[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};
</script>