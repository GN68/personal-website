<script setup lang="ts">
import { computed } from 'vue'
import SmartLink from '@/components/utils/SmartLink.vue'

const props = defineProps<{
  title?: string
  desc?: string
  img?: string
  id?: string
  tags?: string[]
}>()

const hasContent = computed(() => !!(props.title || props.desc))
const isDisabled = computed(() => !props.id)
const isUrl = computed(() => props.title?.startsWith('https://') ?? false)

function tagColor(tag: string) {
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) | 0
  }

  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 40%, 60%)`
}

</script>

<template>
  <component :is="id ? SmartLink : 'div'" :to="id" class="card" :class="{
    'image-only': !hasContent,
    'disabled': isDisabled
  }">
    <div class="thumbnail" :style="img ? { backgroundImage: `url(${img})` } : undefined" />

    <div v-if="hasContent" class="card-content">
      <img v-if="isUrl" :src="title" style="max-height: 4rem; max-width: 100%;" class="title" />

      <h1 v-else-if="title" class="title">
        {{ title }}
      </h1>

      <div v-if="desc" class="description">
        {{ desc }}
      </div>
      <div class="tag-list">
        <div v-for="item in tags" :key="item" class="tag" :style="{backgroundColor: tagColor(item)}">
        {{item}}
      </div>
      </div>
    </div>
  </component>
</template>

<style scoped>
.card {
  color: var(--clr-text);
  border-radius: 2px;
  height: 25rem;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.178);

  background-size: cover;
  background-position: center;

  transition: all 0.1s ease-in-out;
}

.tag {
  border-radius: 0.25rem;
  padding-left: 0.2rem;
  padding-right: 0.1rem;
  white-space-collapse: collapse;
  color: black;
  text-wrap: nowrap;
}

.tag-list {
  display: flex;
  gap: 0.2rem;
  flex-wrap:wrap;
}

.card:hover {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}


.card::after {
  --clr-outline: var(--white);
  --corner-size: 16px;

  position: absolute;
  content: "";
  inset: -3px;

  background:
    linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 0,
    linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 0 0,
    linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 0,
    linear-gradient(to bottom, var(--clr-outline) 1px, transparent 1px) 100% 0,

    linear-gradient(to right, var(--clr-outline) 1px, transparent 1px) 0 100%,
    linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 0 100%,
    linear-gradient(to left, var(--clr-outline) 1px, transparent 1px) 100% 100%,
    linear-gradient(to top, var(--clr-outline) 1px, transparent 1px) 100% 100%;

  background-repeat: no-repeat;
  background-size: var(--corner-size) var(--corner-size);

  border: 1px solid rgba(255, 255, 255, 0.158);
  transition: all 0.1s ease-in-out;
}

.card:hover::after {
  --clr-outline: var(--light-green);
  inset: -8px;
}

/* Disabled */

.card.disabled {
  cursor: default;
  border-color: rgba(255, 255, 255, 0.08);
}

.card.disabled .card-content {
  opacity: 0.6;
}

.card.disabled::after,
.card.disabled:hover::after {
  --clr-outline: #666;
  inset: -3px;
  border-color: rgba(255, 255, 255, 0.08);
}

.card.disabled:hover {
  color: var(--clr-text);
  border-color: rgba(255, 255, 255, 0.08);
}

/* Thumbnail */

.thumbnail {
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.card.image-only .thumbnail {
  height: 100%;
}

/* Content */

.card-content {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  padding-left: 0.25rem;
  min-height: 8rem;
  padding-right: 0.25rem;
  padding-bottom: 0.25rem;

  text-overflow: ellipsis;
}

.title {
  margin: 0;
  display: block;
  z-index: 1;
  text-overflow: ellipsis;
}

.description {
  margin-top: 0.25rem;
  z-index: 1;
  flex-grow: 1;
}

h1 {
  font-size: 2.5rem;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
