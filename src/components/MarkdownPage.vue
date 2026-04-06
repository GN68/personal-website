<script setup lang="ts">
import { VueMarkdown ,type CustomAttrs } from '@crazydos/vue-markdown';
import remarkGfm from 'remark-gfm';
const props = defineProps<{
  content: string
}>()

const customAttrs: CustomAttrs = {
  // use html tag name as key
  code: { 'class': ["code"] },
  //a: { target: '_blank', rel: "noopener noreferrer" }
}
</script>

<template>
  <VueMarkdown :markdown="props.content" :custom-attrs="customAttrs" :remark-plugins="[remarkGfm]" />
</template>

<style scoped>

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
  color: var(--lighter-green);
}

.md-header {
  font-family: "Roboto Condensed";
  font-weight: normal;
}

@media screen and (max-width: 600px) {
  .header1 {
    font-size: 3.5rem;
  }
}

</style>
