<script setup lang="ts">
import { VueMarkdown ,type CustomAttrs } from '@crazydos/vue-markdown';
import remarkGfm from 'remark-gfm';
const props = defineProps<{
  content: string
}>()

const customAttrs: CustomAttrs = {
  // use html tag name as key
  h1: { 'class': ["header","header1"] },
  h2: { 'class': ["header","header2"] },
  h3: { 'class': ["header","header3"] },
  h4: { 'class': ["header","header4"] },
  p: { 'class': ["paragraph"] },
  li: { 'class': ["line-item"] },
  strong: { 'class': ["bold"] },
  code: { 'class': ["code"] },
  //a: { target: '_blank', rel: "noopener noreferrer" }
}
</script>

<template>
  <VueMarkdown :markdown="props.content" :custom-attrs="customAttrs" :remark-plugins="[remarkGfm]" />
</template>

<style>

code {
  display: inline-block;
  padding: 0.1rem;
  border-radius: 0.25rem;
  border: 2px solid var(--clr-outline);
  background-color: rgba(128, 128, 128, 0.042);
}

.paragraph {
  color: var(--clr-text-secondary);
  line-height: 1.2rem;
}

.line-item {
  color: var(--clr-text-secondary);
  margin: 0.4rem 0;
}

.bold {
  font-weight: bold;
  color: var(--green);
}

.header {
  font-family: "Roboto Condensed";
  font-weight: normal;
}

.header1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 4rem;
  border-bottom: 1px solid var(--clr-outline);
}

.header2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.header3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.header4 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

@media screen and (max-width: 600px) {
  .header1 {
    font-size: 3.5rem;
  }
}

</style>
