<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { VueMarkdown, type PluggableList } from '@crazydos/vue-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

const props = defineProps<{ content: string }>()

const remarkPlugins: PluggableList = [remarkGfm]
const rehypePlugins: PluggableList = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  rehypeHighlight,
]

function scrollToHash() {
  const hash = window.location.hash
  if (!hash) return
  setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}

function addCopyButtons() {
  // Remove any existing buttons first (in case of re-render)
  document.querySelectorAll('.copy-code-btn').forEach(btn => btn.remove())

  document.querySelectorAll('pre code').forEach(codeEl => {
    const pre = codeEl.parentElement!

    // Make sure pre is positioned so the button can be absolute
    pre.style.position = 'relative'

    const btn = document.createElement('button')
    btn.className = 'copy-code-btn'
    btn.textContent = 'copy'

    btn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(codeEl.textContent ?? '')
      btn.textContent = 'copied'
      setTimeout(() => (btn.textContent = 'Copy'), 2000)
    })

    pre.appendChild(btn)
  })
}

onMounted(async () => {
  scrollToHash()
  await nextTick()
  addCopyButtons()
})

watch(() => props.content, async () => {
  scrollToHash()
  await nextTick()
  addCopyButtons()
})
</script>

<template>
  <VueMarkdown :markdown="props.content" :remark-plugins="remarkPlugins" :rehype-plugins="rehypePlugins" />
</template>

<style scoped>
/* Can't use scoped for dynamically injected elements, use :deep or global */
</style>

<style>
.copy-code-btn {
  position: absolute;
  top: 0rem;
  right: 0rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.1s;
}

pre:hover .copy-code-btn {
  opacity: 1;
}

.copy-code-btn:hover {
}
</style>
