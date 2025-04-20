<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { GLTFModel } from '@tresjs/cientos'
import { PerspectiveCamera } from 'three'
import Lenis from '@studio-freight/lenis'
import InlineIcon from './InlineIcon.vue'
import { Icon } from "@iconify/vue";

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

  const handleScroll = ({ scroll }: { scroll: number }) => {
    scrollY = scroll

    // Smooth camera shift based on scroll
    if (cameraRef.value) {
      const x = Math.cos(Math.min(scrollY / window.innerHeight, 1) * Math.PI) * 0.5 + 0.5
      cameraRef.value.position.y =0.5 - (scrollY / window.innerHeight)
      cameraRef.value.position.z = 1 + x * -1
      cameraRef.value.rotation.y = x * -10 * (Math.PI / 180)
    }
  }

  lenis.on('scroll', handleScroll)
  handleScroll({ scroll: 0 })

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
    <h1>Hi. I am GN68s</h1>
    <p>
      I am a 3D Generalist<InlineIcon src="/src/assets/blender.png" alt="🎩" :size="20" />  Game Developer<InlineIcon src="/src/assets/godot.png" alt="🎩" :size="20" />
    </p>
    <div class="socials">
      <Icon icon="simple-icons:github" width="24" height="24" />
      <Icon icon="simple-icons:bluesky" width="24" height="24" />
      <Icon icon="simple-icons:itchdotio" width="24" height="24" />
      <Icon icon="simple-icons:youtube" width="24" height="24" />

    </div>
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

.socials {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

h1 {
  font-size: 4rem;
  font-weight: normal;
  margin: 0;
  line-height: 4rem;
}



p {
  margin: 0;
}

.hero-text-container {
  height: 100vh;
  width: 50%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  text-shadow: 0 0 2rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .hero-text-container {
    width: 100%;
    left: 0;
    padding: 1rem;
  }
  h1 {
    font-size: 3.2rem;
    line-height: 3.2rem;
  }
  p {
  width: 50%;}
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
