<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { GLTFModel } from '@tresjs/cientos'
import { PerspectiveCamera } from 'three'
import Lenis from '@studio-freight/lenis'

const cameraRef = ref<PerspectiveCamera | null>(null)
const windowHeight = ref(0)
const windowWidth = ref(0)

let scrollY = 0

onMounted(() => {
  const lenis = new Lenis()

  const handleResize = () => {
    windowHeight.value = window.innerHeight
    windowWidth.value = window.innerWidth
  }

  lenis.on('scroll', ({ scroll }: { scroll: number }) => {
    scrollY = scroll

    // Smooth camera shift based on scroll
    if (cameraRef.value) {
      cameraRef.value.position.y =0.5 - (scrollY / window.innerHeight)
    }
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {})
})

const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', setViewportHeight)
window.addEventListener('orientationchange', setViewportHeight)
setViewportHeight()

</script>

<template>
  <div class="hero-3d-scene">
    <TresCanvas>
      <TresPerspectiveCamera
        ref="cameraRef"
        :position="[0, 0, 1]"
        :look-at="[0, 0, 0]"
        :fov="53"
      />
      <Suspense>
        <GLTFModel path="/hero.glb" />
      </Suspense>
    </TresCanvas>
  </div>
  <div class="hero-text-container">
    <h1>Hi I am GN68s</h1>
  </div>
</template>

<style scoped>

:root {
  --vh: 100%;
}

@media (hover: none) and (pointer: coarse) {
  /* only for touch devices */
  :root {
    --vh: 100vh;
  }
}

.hero-text-container {

}

.hero-3d-scene {
  position: fixed;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  pointer-events: none;
}
</style>
