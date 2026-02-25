<template>
  <div :class="`counter-wrapper ${spacing}`">
      <div class="row">
       
          <div v-for="item in counter_data" :key="item.id" class="col-md-3 col-6">
              <div class="counter-block-two text-center mt-35  wow fadeInUp" :data-wow-delay="`0.${item.id}s`">
                  <div class="main-count fw-500 text-dark">
                    {{item.prev_text ? item.prev_text : ''}}
                    <span class="counter">{{item.numb}}</span>{{item.text}}
                  </div>
                  <p class="m0 text-md">{{item.title}}</p>
              </div>
              <!-- /.counter-block-two -->
          </div>

      </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?:string}>(),{
  spacing:'mt-70 lg-mt-40'
})

const counter_data = [
  {
    id:1,
    numb:'120',
    text:'+',
    title:'Partner with us'
  },
  {
    id:2,
    prev_text:'$',
    numb:'1.3',
    text:'b+',
    title:'Cumulative trading volume'
  },
  {
    id:3,
    numb:'705',
    text:'k',
    title:'Successful Projects'
  },
  {
    id:4,
    prev_text:'$',
    numb:'1.2',
    text:'%',
    title:'Low interest rate'
  },
]
</script>