<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  lines: string[]
}>()

const display = ref('')
const intervalMs = 8000 // 👈 change this to control how often it swaps

let interval: ReturnType<typeof setTimeout>

let currentLine = 0

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomLine() {
  const lastLine = currentLine
  while (lastLine === currentLine) {
    currentLine = Math.floor(Math.random() * props.lines.length)
  }
  return props.lines[currentLine]
}

async function typeText(text: string) {
  for (let i = 0; i < text.length; i++) {
    display.value += text[i]
    await wait(20)
  }
}

async function deleteText() {
  while (display.value.length > 0) {
    display.value = display.value.slice(0, -1)
    await wait(10)
  }
}

let isAnimating = false

async function cycleText() {
  if (isAnimating) return
  isAnimating = true

  const newText = getRandomLine()

  await deleteText()
  await wait(150) // small pause
  await typeText(newText)

  isAnimating = false
}

onMounted(async () => {
  // initial text
  await typeText(getRandomLine())

  interval = setInterval(() => {
    cycleText()
  }, intervalMs)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <span class="text">{{ display }}<span class="cursor">_</span></span>
</template>

<style scoped>
.cursor {
  color: var(--light-green);
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.5s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

span {
  margin: 0;
  padding: 0;
  min-height: 1rem;
  line-height: 1rem;
}
</style>
