<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import { onMounted, ref } from 'vue';
import { ref as dbref, onValue, set } from 'firebase/database';
import { database } from '@/firebase';

const textInput = ref('');
const errorMessage = ref('');

async function syncText() {
  const textRef = dbref(database, 'sharedText'); // "sharedText" is the key in the DB
  try {
    await set(textRef, textInput.value);
    errorMessage.value = 'Pushed';
  } catch (error) {
    errorMessage.value = "[ERROR] " + error;
    console.error(error);
  }
}

onMounted(() => {
  const textRef = dbref(database, 'sharedText');
  onValue(textRef, (snapshot) => {
    const value = snapshot.val();
    if (value !== null) {
      textInput.value = value;
      errorMessage.value = 'Recived message';
    }
  });
});

</script>

<template>
  <ContentPanel>
    <div class="content">
      <div class="error" ref="errorText"> {{ errorMessage }}</div>
      <textarea class="input" v-model="textInput" />
      <button class="app-icon-link" @click="syncText">SUBMIT CHANGES</button>
    </div>
  </ContentPanel>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 2px;
  height: calc(100vh - 14rem);
}

.app-icon-link {
  border: 0;
  font-size: 1rem;
  font-family: "Jetbrains Mono";
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 1rem 3rem;
  line-height: 1.2rem;

  transition: background-color 0.1s linear;

  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.3);
}



.app-icon-link::after {
  --clr-outline: var(--light-green);
  --corner-size: 8px;
  
  position: absolute;
  content: "";
  inset: 0;
  border-image-slice: 8px;
  background:
  linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 0,
  linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 0 0,
  linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 0,
  linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 100% 0,
  
  linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 100%,
  linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 0 100%,
  linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 100%,
  linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 100% 100%;
  
  background-repeat: no-repeat;
  background-size: var(--corner-size) var(--corner-size); /* Length of the corner bars */
  transition: all 0.2s ease-in-out;
  
  border: 1px solid rgba(255, 255, 255, 0.158);
}


.app-icon-link:hover::after {
  --clr-outline: white;
  position: absolute;
  content: "";
  inset: -4px;
  border-image-slice: 8px;
  background:
  linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 0,
  linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 0 0,
  linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 0,
  linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 100% 0,
  
  linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 100%,
  linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 0 100%,
  linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 100%,
  linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 100% 100%;
  
  background-repeat: no-repeat;
  background-size: var(--corner-size) var(--corner-size); /* Length of the corner bars */
  transition: all 0.2s ease-in-out;
}

.app-icon-link:hover {
  transition: background-color 0.1s linear;
  color: black;
  background-color: var(--light-green);
}

</style>
