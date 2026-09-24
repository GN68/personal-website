<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';

</script>

<template>
  <ContentPanel>
    <h1>Hello World!</h1>
    <div class="display">
      <button>Primary Button</button>
    </div>
  </ContentPanel>
</template>

<style scoped>
div.display {
  min-height: calc(100vh - 18rem);
}

button {
  position: relative;
  border-radius: 0;
  box-sizing:content-box;
}

button:hover {
    animation: buttonPress 0.2s;
    background-color: var(--light-green);
    color: black;
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
