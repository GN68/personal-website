<script setup lang="ts">

import ContentPanel from '@/components/ContentPanel.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';

</script>
<template>
  <div>
    <ContentPanel :width="50">
        <div class="hero-text-container">
        <h1>Hi! I am <span class="highlight">GN</span></h1>
        <p>Programmer, 3D Animator, Graphic Designer, and UI Lover</p>
        <div class="socials">
          <ButtonSecondary class="social" icon="material-symbols:chat-info" title="About" to="/about" />
          <ButtonSecondary class="social" icon="wordpress:gallery" title="Gallery" to="/about" />
        </div>
      </div>
      <div class="credits">
        Screenshot by: "csecure." w Chronospic Shaders by "<a href="https://www.patreon.com/u49201970">Jessie</a>"
      </div>
    </ContentPanel>
  </div>
</template>

<style scoped>


.credits {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  font-size: 1rem;
  color: #c7cfdd52;
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


.social {
  width: 9rem;
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
