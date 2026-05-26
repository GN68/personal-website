<script setup lang="ts">

import ContentPanel from '@/components/ContentPanel.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';
import TextRandom from '@/components/TextRandom.vue';
import { useHead } from '@vueuse/head';
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'The main page of this website' }
  ]
});

</script>
<template>
  <div>
    <ContentPanel :width="50">
      <div class="hero-text-container">
        <h1>Hi! I am <span class="highlight">GN</span></h1>
        <TextRandom :lines='[
          "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
          "Well its time to be that one drop inside that ocean full of opportunities, am I right?",
          "Time dosent heal anything by itself, you have to do the work!",
          "The longer you wait, the heavier it gets",
          "Ignoring a problem dosent make it disappear, it just makes it stronger",
          "Truth dosent care how ready you are, it shows up anyway!",
          "No one is coming, youre it",
          "The gap between who you are and who you want to be is your habits!",
          "Excuses feel better than results, thats why theyre dangerous!",
          "You cant fix a life you wont look at honestly",
          "The truth feels harsh because it removes your excuses",
          "You dont know how valuable what you have is until you lose it",
          "Respect is earned quietly, and lost loudly",
          "Attention is cheap, Loyalty is rare",
          "Not everyone clapping wants you to win",
          "Silence reveals more than words ever will",
          "Facing the truth is where things finally start",
          "You can rebuild, just not without honesty",
          "Progress begins the moment excuses end",
          "Awareness is step one. action is step two!",
          "In this world, wherever there is light, there are also shadows.",
          "A lesson without pain is meaningless.",
          "The world isnt perfect. But its there for us, doing the best it can.",
          "When you hit the point of no return, thats the moment it truly becomes a journey.",
          "Chaos isnt a pit. Chaos is a ladder",
          "You either die a hero, or you live long enough to see yourself become the villain.",
          "We all make choices, but in the end, our choices make us.",
          "Fear is not evil. It tells you what your weakness is.",
          "A person grows up when hes able to overcome hardships.",
          "You cant change what youve done, only what you do next.",
          "In their last moments, people show you who they really are.",
          "Wake up, Samurai. We have a city to burn.",
          "Youve survived 100% of your worst days so far.",
          "Slow progress is still progress.",
          "Even standing still is better than giving up.",
          "What feels like falling apart might be you outgrowing something.",
          "I love you cer! <3",
        ]'></TextRandom>
        <div class="socials">
          <ButtonSecondary class="social" icon="material-symbols:chat-info" title="About" to="/about" />
          <ButtonSecondary class="social" icon="wordpress:gallery" title="Gallery" to="/gallery" />
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

.quote::before {
  content: '“';
}

.quote::after {
  content: '”';
}

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
