<!-- SmartLink.vue -->
<template>
  <component
    :is="isInternal ? RouterLink : 'a'"
    v-bind="componentAttrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to: string
}>()

const isInternal = computed(() => /^\/./.test(props.to))

// Build proper props depending on external or not
const componentAttrs = computed(() => {
  if (isInternal.value) {
    return {
      to: props.to,
    }
  } else {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
})
</script>
