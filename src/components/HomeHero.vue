<script setup lang="ts">

import InlineIcon from './InlineIcon.vue'
import ContentPanel from './ContentPanel.vue';

import iconBlender from '@/assets/icons/blender.png';
import iconGodot from '@/assets/icons/godot.png';
import AppIconLink from './AppIconLink.vue';

</script>
<template>
  <ContentPanel>
      <div class="hero-text-container">
      <h1>Hi! I am <span class="highlight">GN</span></h1>
      <p>
        3D Generalist
        <InlineIcon :src="iconBlender" alt="🎩" :size="20" />
        Game Developer
        <InlineIcon :src="iconGodot" alt="🎩" :size="20" />
      </p>
      <div class="socials">
        <AppIconLink icon="material-symbols:chat-info" title="About" to="/about" />
        <AppIconLink icon="uil:link" title="Links" to="/about" />
        <AppIconLink icon="fluent:chat-12-filled" title="Contact" to="/gallery" />
      </div>
    </div>
  </ContentPanel>
</template>

<style scoped>

.highlight {
  color: var(--primary);
  color: var(--light-green);
}

.socials {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

h1 {
  font-size: 5rem;
  font-weight: normal;
  margin: 0;
  line-height: 5rem;
}



p {
  margin: 0;
}

.hero-text-container {
  height: 100vh;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  aspect-ratio: 16 / 9;
  pointer-events: none;
}
</style>
