<!-- src/components/NavBar.vue -->
<template>
  <div class="nav-bar">
    <audio
    ref="audio"
    :src="musicFile"
    loop
  />
    <ContentPanel :width="50">
      <div class="separator">
        <LogoGN />
        <div class="combiner">
          <div class="nav-links">
            <RouterLink to="/about" class="link">About</RouterLink>
            <RouterLink to="/" class="link">Home</RouterLink>
            <RouterLink to="/library" class="link">Library</RouterLink>
          </div>
          <button @click="toggleMusic" style="visibility: hidden;">
            {{ isPlaying ? '♫+' : '♫×' }}
          </button>
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
import musicFile from '@/assets/tuna_sandwitch.ogg'

import { ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const audio: any = ref(null)
const isPlaying = ref(false)

function toggleMusic() {
  if (isPlaying.value) {
    audio.value.pause()
    isPlaying.value = false
  } else {
    audio.value.play()
    isPlaying.value = true
  }
}


</script>


<style scoped>
.combiner {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:0.5rem;
  height: 100%;
}
button {
  border: 1px solid rgba(255, 255, 255, 0.121);
  background-color: var(--darker-gray);
  border-radius: 3rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

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
  height: 2.5rem;
  background: var(--darker-gray);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.196);
  border: 1px solid rgba(255, 255, 255, 0.121);
  border-radius: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav-bar-push {
  height: var(--nav-height);
}

.nav-bar {
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
  border-radius: 4rem;
  box-sizing: border-box;
  position: relative;
  color: var(--clr-text);
  padding-left: 1rem;
  padding-right: 1rem;
  width: 6rem;
  background-color: transparent;
  justify-content: center;
  height: 2.5rem;
  display: flex;
  align-items: center;
}

.link.router-link-active {
  background-image: linear-gradient(var(--green),var(--light-green));
  color: black;
  animation: buttonPress 0.1s;
}


@keyframes buttonPress {
  0%  {
    background: black;
    color: white;
  }
  25%   { 
    background: white;
    color: black;
  }
  50% {
    background: black;
    color: white;
  }
}
</style>
