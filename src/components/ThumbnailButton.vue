

<script setup lang="ts">
import { computed } from 'vue';
import SmartLink from './SmartLink.vue';

const props = defineProps<{
  title: string,
  desc: string,
  img?: string,
  id: string
}>()


const isUrl = computed(() => props.title.startsWith('https://'))

</script>

<template>
  <SmartLink :to="id">
    <div class="thumbnail-button" :style="{ backgroundImage: `url(${img})` }">
      <div class="overlay"></div>
      <img v-if="isUrl" :src="title" style="max-height: 4rem; max-width: 100%;" class="title"/>
      <h1 v-else class="title">{{ title }}</h1>
      <div class="description"> {{ desc }} </div>
    </div>
  </SmartLink>
</template>

<style scoped>
.thumbnail-button {
  color: var(--clr-text);
  border: 2px solid rgb(59, 59, 59);
  border-radius: 10px;
  height: 16rem;
  
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 1rem;
  box-sizing: border-box;
  
  background-size: cover;
  background-position: center;
  
  position: relative;
}

.title {
  z-index: 1;
  margin: 0;
  display: block;
}

.description {
  margin-top: 0.25rem;
  z-index: 1;
}

.overlay {
  border-radius: 8px;
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 0;
}

h1 {
  font-size: 3rem;
  width: 100%;
  border-color: var(--clr-border);
}
</style>
