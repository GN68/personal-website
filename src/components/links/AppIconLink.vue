<template>
  <SmartLink :to=to>
    <div class="app-icon-link">
      <Icon :icon="icon" width="48" />
      <h3>{{ title }}</h3>
    </div>
  </SmartLink>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SmartLink from "../SmartLink.vue";
defineProps<{
  icon: string,
  title: string,
  to: string
}>()
</script>

<style scoped>
.app-icon-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3.5rem;
  aspect-ratio: 9/10;

  border-radius: 0.5rem;
  padding: 0.25rem;

  background-color: rgba(255, 255, 255, 0.053);
  box-shadow: 
  inset 0 0 0px rgba(255, 255, 255, 0.205),
  inset 0 1px 2px rgba(255, 255, 255, 0.207)
  ;
}

.app-icon-link h3 {
  margin: 0;
  font-size: 12pt;
  font-weight: normal;
}

</style>
