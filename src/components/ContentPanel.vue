<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  width?: number // optional prop
}>()

const computedWidth = computed(() => {
  return `min(100vw - 2rem, ${props.width ?? 70}rem)`
})
</script>

<template>
  <div class="content-panel" :style="{ width: `calc(${computedWidth})` }">
    <slot />
  </div>
</template>

<style scoped>
.content-panel {
  margin: 0 auto;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: inherit;
  gap: inherit;
  
  overflow: hidden;
}
</style>
