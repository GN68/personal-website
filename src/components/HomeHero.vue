<script setup lang="ts">

import ContentPanel from './ContentPanel.vue';
import AppIconLink from './links/AppIconLink.vue';

</script>
<template>
  <div>
    <ContentPanel :width="50">
        <div class="hero-text-container">
        <h1>Hi! I am <span class="highlight">GN</span></h1>
        <p>Programmer, 3D Animator, Graphic Designer, and UI Lover</p>
        <div class="socials">
          <AppIconLink icon="material-symbols:chat-info" title="About" to="/about" />
          <AppIconLink icon="uil:link" title="Links" to="/about" />
          <AppIconLink icon="fluent:chat-12-filled" title="Projects" to="/gallery" />
        </div>
      </div>
    </ContentPanel>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');

.hero-video {
  pointer-events: none;
  user-select: none;
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}


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
  font-family: 'Google Sans', sans-serif;
  font-size: 5rem;
  font-weight: 400;
  margin: 0;
  border-bottom: none;
  line-height: 5rem;
}


.quote {
  display: block;
  margin: 0;
  text-align: center;
}
.quote::before {content: '“';}
.quote::after {content: '”';}

.hero-text-container {
  width: 100%;
  height: calc(100vh - var(--nav-height));
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  text-shadow: 0 0 2rem rgba(0, 0, 0, 0.8), 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
  .hero-text-container {
    width: 100%;
    left: 0;
    padding: 1rem;
  }
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
