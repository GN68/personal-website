<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  size?: number
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt || ''"
    :width="size || 16"
    :height="size || 16"
    class="inline-icon"
  />
</template>

<style scoped>
.inline-icon {
  transform: translateY(-2px);
  display: inline-block;
  vertical-align: middle;
  object-fit: contain;
  margin: 0 0.2em;
}
</style>
