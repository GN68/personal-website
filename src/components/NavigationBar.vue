<!-- src/components/NavBar.vue -->
<template>
  <div class="nav-bar">
    <ContentPanel>
      <div class="separator">
        <LogoGN />
        <div class="nav-links">
          <RouterLink to="/" class="link">Home</RouterLink>
          <RouterLink to="/about" class="link">About</RouterLink>
          <RouterLink to="/gallery" class="link">Projects</RouterLink>
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
  height: 100%;
  display: flex;
  align-items: center;
}

.link::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 1px solid var(--light-green);
  transition: all 0.2s ease-in-out;
}

.link.router-link-active {
  
  color: black;
}

.link.router-link-active::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 4rem solid var(--light-green);
  transition: all 0.2s ease-in-out;
  z-index: -1;
}

</style>
