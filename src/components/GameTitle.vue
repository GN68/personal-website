<template>
  <div v-if="isUrl" :style="backgroundStyle" class="bg-container"></div>
  <h3 v-else>{{ title }}</h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props once
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// Computed to check if title is a URL
const isUrl = computed(() => props.title.startsWith('https://'))

// Computed style for background div
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.title})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '200px', // adjustable default height
  borderRadius: '8px'
}))
</script>

<style scoped>
.bg-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
