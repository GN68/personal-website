<!-- src/components/NavBar.vue -->
<template>
  <div class="nav-bar">
    <ContentPanel>
      <div class="separator">
        <LogoGN />
        <div class="nav-links">
          <RouterLink to="/" class="link">About</RouterLink>
          <RouterLink to="/library" class="link">Library</RouterLink>
          <RouterLink to="/widgets" class="link">Widgets</RouterLink>
        </div>
      </div>
    </ContentPanel>
  </div>
  <div class="nav-bar-push"></div>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import LogoGN from './LogoGN.vue';
import ContentPanel from './ContentPanel.vue';
</script>


<style>

.separator {
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav-bar-push {
  height: var(--nav-height);
}

.nav-bar {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
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
  box-sizing: border-box;
  position: relative;
  color: var(--clr-text);
  padding-left: 1rem;
  padding-right: 1rem;
  width: 6rem;
  background-color: transparent;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
}

.link.router-link-active {
  background-color: var(--light-green);
  color: black;
}

</style>
