<template>
  <SmartLink :to=to>
    <div class="app-icon-link">
      <Icon :icon="icon" width="30" />
      {{ title }}
    </div>
  </SmartLink>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SmartLink from "../utils/SmartLink.vue";
defineProps<{
  icon: string,
  title: string,
  to: string
}>()
</script>

<style scoped>
.app-icon-link {
  white-space: collapse ;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
  
  transition: background-color 0.1s linear;
  
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(179, 179, 179, 0.164);
  box-sizing: border-box;
  ;
}

.app-icon-link:hover {
  transition: background-color 0.1s linear;
  color: black;
  background-color: var(--light-green); 
}

.app-icon-link h3 {
  margin: 0;
  font-size: 12pt;
  font-weight: normal;
}

</style>
