<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { GLTFModel } from '@tresjs/cientos'

const cameraY = ref(1) // starting Y position
const fov = ref(45) // Default FOV

// Scroll listener
const updateCameraY = () => {
  const scrollY = window.scrollY
  cameraY.value = 0.8 + scrollY * -0.00193 // tweak the multiplier for sensitivity
}

const updateFOV = () => {
  const aspect = window.innerWidth / window.innerHeight
  // You can tweak this formula — it's just a nice start
  fov.value = 60 - aspect * 10
}

onMounted(() => {
  window.addEventListener('scroll', updateCameraY)
  window.addEventListener('resize', updateFOV)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCameraY)
  window.removeEventListener('resize', updateFOV)
})
updateFOV()
updateCameraY()

</script>

<template>
  <div class="hero-3d-scene">
    <TresCanvas
      window-size
      >
      <TresPerspectiveCamera
        :position="[0, cameraY, 3]"
        :look-at="[0, cameraY, 0]"
        :fov="fov"
      />
      <Suspense>
        <GLTFModel path="/hero.glb" />
      </Suspense>

      <TresAmbientLight :intensity="1" />
    </TresCanvas>
  </div>
</template>

<style scoped>
.hero-3d-scene {
  position: fixed;
  inset: 0;
  z-index: -1; /* sends it behind everything */
  pointer-events: none; /* so it doesn’t block clicks */
}

</style>
