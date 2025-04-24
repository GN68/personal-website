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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3.5rem;
  aspect-ratio: 9/10;

  border-radius: 0.5rem;
  padding: 0.25rem;

  border: 1px solid var(--clr-outline);
}

.app-icon-link h3 {
  margin: 0;
  font-size: 12pt;
  font-weight: normal;
}

</style>
