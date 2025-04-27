<script setup lang="ts">

import ContentPanel from './ContentPanel.vue';
import AppIconLink from './AppIconLink.vue';
import RandomText from './RandomText.vue';

</script>
<template>
  <ContentPanel>
      <div class="hero-text-container">
      <h1>Hi! I am <span class="highlight">GN</span></h1>
      <RandomText class="quote" :lines="[
        'Welcome to my secret lair! muwahahaha',
        'The right man in the wrong place can make all the BBQ in the world',
        'Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer',
        'Bring me a bucket, and I\'ll show you a bucket',
        'it\'s not out of the question that you might have a very minor case of serious brain damage. But don\'t be alarmed, alright? Although, if you do feel alarm, try to hold onto that feeling because that is the proper reaction to being told you have brain damage.',
        'Nothing is more badass than treating a woman with respect!',
        'Thank you Mario! But our Princess is in another castle!',
        'Snake? Snake? SNAAAAAAAAKE!!!',
        'Science isn\'t about why! It’s about why not!',
        ]" />
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
  align-items: center;
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
