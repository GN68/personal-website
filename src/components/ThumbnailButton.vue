

<script setup lang="ts">
import { computed } from 'vue';
import SmartLink from './utils/SmartLink.vue';

const props = defineProps<{
  title: string,
  desc: string,
  img?: string,
  id: string
}>()


const isUrl = computed(() => props.title.startsWith('https://'))

</script>

<template>
  <SmartLink :to="id" class="card">
    <div class="thumbnail" :style="{ backgroundImage: `url(${img})` }">
    </div>
    <div class="card-content">
      <img v-if="isUrl" :src="title" style="max-height: 4rem; max-width: 100%;" class="title"/>
      <h1 v-else class="title">{{ title }}</h1>
      <div class="description"> {{ desc }} </div>
    </div>
  </SmartLink>
</template>

<style scoped>
.card {
  color: var(--clr-text);
  border-radius: 1rem;
  height: 25rem;
  
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  box-sizing: border-box;
  
  background-color: rgba(0, 0, 0,0.5);
  border: 1px solid rgba(255, 255, 255, 0.178);
  overflow: hidden;
  
  background-size: cover;
  background-position: center;
  
  position: relative;
}

.thumbnail {
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.card-content {
  margin: 1rem;
  display: flex ;
  flex-direction: column;
  align-items: start;
  justify-content: start;
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

h1 {
  font-size: 3rem;
  width: 100%;
}
</style>
