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
    errorMessage.value = 'Updated text successfully!';
  } catch (error) {
    errorMessage.value = "" + error;
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
      <h1>Input</h1>
      <div  class="error" ref="errorText"> {{ errorMessage }}</div>
      <textarea v-model="textInput"/>
      <button @click="syncText">Submit</button>
    </div>
  </ContentPanel>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

*::selection {
  background-color: var(--light-green);
  color: black;
}


</style>
