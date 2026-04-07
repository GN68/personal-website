

<script setup lang="ts">
import { computed } from 'vue';
import SmartLink from '@/components/utils/SmartLink.vue';

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
  border-radius: 2px;
  height: 25rem;
  
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  
  background-color: rgba(0, 0, 0,0.5);
  border: 1px solid rgba(255, 255, 255, 0.178);
  
  background-size: cover;
  background-position: center;
  
  position: relative;
  transition: all 0.1s ease-in-out;
}

.card:hover {
  transition: all 0.1s ease-in-out;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card::after {
  --clr-outline: var(--white);
  --corner-size: 16px;
  
  position: absolute;
  content: "";
  inset: -3px;
  border-image-slice: 8px;
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
  background-size: var(--corner-size) var(--corner-size); /* Length of the corner bars */
  transition: all 0.1s ease-in-out;
  
  border: 1px solid rgba(255, 255, 255, 0.158);
}

.card:hover::after {
  --clr-outline: var(--light-green);
  position: absolute;
  content: "";
  inset: -8px;
  border-image-slice: 8px;
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
  background-size: var(--corner-size) var(--corner-size); /* Length of the corner bars */
  transition: all 0.05s ease-in-out;
}

.thumbnail {
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}



.card-content {
  text-overflow: ellipsis;  
  width:auto;
  display: flex;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
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
