<!-- src/components/NavBar.vue -->
<template>
  <div
  class="nav-bar"
  :class="{ 'nav-bar-transparent': isAtTop, 'nav-bar-opaque': !isAtTop }">
    <GNLogo />
    <RouterLink to="/" class="link">Projects</RouterLink>
    <RouterLink to="/" class="link">Games</RouterLink>
    <RouterLink to="/gallery" class="link">Renders</RouterLink>
  </div>
  <div v-if="route.path !== '/'" class="nav-bar-push"></div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GNLogo from './GNLogo.vue';

// Transparent nav bar
import { ref, onMounted, onUnmounted } from 'vue'

const isAtTop = ref(true)

const handleScroll = () => {
  isAtTop.value = window.scrollY < 50
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
.nav-bar-push {
  height: var(--nav-height);
}

.nav-bar {
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

.nav-bar-transparent {
  transition: background-color 0.1s linear;
  background-color: transparent;
}

.nav-bar-opaque {
  transition: background-color 0.1s linear;
  background-color: rgba(0, 0, 0, 0.111);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--clr-outline);
}



.nav-bar-left {
  display: flex;
  align-items: center;
  margin: 0;
}

.nav-bar-center {
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
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
