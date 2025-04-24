<!-- src/components/NavBar.vue -->
<template>
  <div class="nav-bar">
    <ContentPanel>
      <div class="separator">
        <GNLogo />
        <div class="nav-links">
          <RouterLink to="/about" class="link">About</RouterLink>
          <RouterLink to="/gallery" class="link">Gallery</RouterLink>
        </div>
      </div>
    </ContentPanel>
  </div>
  <div v-if="route.path !== '/'" class="nav-bar-push"></div>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import GNLogo from './GNLogo.vue';
import ContentPanel from './ContentPanel.vue';

// route checks
import { useRoute } from 'vue-router'

const route = useRoute()

</script>


<style>

.separator {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  width: fit-content;
}

.nav-bar-push {
  height: var(--nav-height);
}

.nav-bar {
  background-color: rgba(0, 0, 0, 0.111);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--clr-outline);

  position: fixed;
  top: 0;
  width: 100vw;
  height: var(--nav-height);

  display: flex;
  align-items: center;

  z-index: 100;
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
