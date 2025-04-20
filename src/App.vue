<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'

const lenis = new Lenis()

onMounted(() => {
  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

