<!-- src/components/NavBar.vue -->
<template>
  <div
  class="navigation-bar"
  :class="{ 'navigation-bar-transparent': isAtTop, 'navigation-bar-opaque': !isAtTop }">
    <GNLogo />
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/about" class="link">About</RouterLink>
    <RouterLink to="/gallery" class="link">Gallery</RouterLink>
  </div>
  <div v-if="route.path !== '/'" class="navigation-bar-push"></div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GNLogo from './GNLogo.vue';

// Transparent navigation bar
import { ref, onMounted, onUnmounted } from 'vue'

const isAtTop = ref(true)

const handleScroll = () => {
  isAtTop.value = window.scrollY === 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// route checks
import { useRoute } from 'vue-router'

const route = useRoute()

</script>


<style>
.navigation-bar-push {
  height: var(--nav-height);
}

.navigation-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);

  display: flex;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  z-index: 100;
}

.navigation-bar-transparent {
  background-color: transparent;
}

.navigation-bar-opaque {
  background-color: var(--clr-background);
  border-bottom: 1px solid var(--clr-outline);
}



.navigation-bar-left {
  display: flex;
  align-items: center;
  margin: 0;
}



div.content {
  margin-top: var(--nav-height);
}

.link {
  color: var(--clr-text);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
