<template>
  <SmartLink :to=to>
    <div class="app-icon-link">
      <Icon :icon="icon" width="30" />
      <h3>{{ title }}</h3>
    </div>
  </SmartLink>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SmartLink from "./SmartLink.vue";
defineProps<{
  icon: string,
  title: string,
  to: string
}>()
</script>

<style scoped>
.app-icon-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  gap: 1rem;
  margin: 0.5rem 0;

  padding: 0.25rem 0.5rem;
  
  
  transition: background-color 0.1s linear;
  border: 1px solid var(--clr-outline);
  border-radius: 0.5rem;
}

.app-icon-link:hover {
  transition: background-color 0.1s linear;
  background-color: var(--clr-outline); 
}

.app-icon-link h3 {
  margin: 0;
  font-size: 12pt;
  font-weight: normal;
}

</style>
