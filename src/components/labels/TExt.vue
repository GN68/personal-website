<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  text: String
})

const display = ref('')

async function typeText(newText : string) {
  display.value = ''
  for (let i = 0; i < newText.length; i++) {
    display.value += newText[i]
    await new Promise(r => setTimeout(r, 30))
  }
}

async function deleteText() {
  while (display.value.length > 0) {
    display.value = display.value.slice(0, -1)
    await new Promise(r => setTimeout(r, 20))
  }
}

watch(() => props.text, async (newVal, oldVal) => {
  if (oldVal) {
    await deleteText()
  }
  if (newVal) {
    await typeText(newVal)
  }
}, { immediate: true })
</script>

<template>
  <span>{{ display }}</span>
</template>
