<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  width?: number // optional prop
}>()

const computedWidth = computed(() => {
  return `min(100% - 2rem, ${props.width ?? 80}rem)`
})
</script>

<template>
  <div class="page-container" :style="{ width: `calc(${computedWidth})` }">
    <slot />
  </div>
</template>

<style scoped>
.page-container {
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  position: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: inherit;
  gap: inherit;
}
</style>
