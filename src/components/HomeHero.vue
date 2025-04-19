<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
}
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 1" :key="slide">
      <img src="@/assets/hero/dark.webp" alt="Hero1" class="hero">
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>

.carousel {
  --vc-nav-color: #fff;
}
.hero {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
</style>
