<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  lines: string[]
}>()

const chosenText = computed(() => {
  return props.lines[Math.floor(Math.random() * props.lines.length)]
})

</script>
<template>
  <span>{{ chosenText }}</span>
</template>
