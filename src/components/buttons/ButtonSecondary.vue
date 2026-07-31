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
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  white-space-collapse: preserve-spaces;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 0.1rem 0.5rem;
  line-height: 1.2rem;

  transition: background-color 0.05s linear;

  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.3);
}


.app-icon-link:hover {
  transition: background-color 0.1s linear;
  color: black;
  background-image: linear-gradient(to bottom, var(--light-green), var(--green));
}



.app-icon-link::after {
  --clr-outline: var(--light-green);
  --corner-size: 8px;

  position: absolute;
  content: "";
  inset: 0;
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
  background-size: var(--corner-size) var(--corner-size);
  /* Length of the corner bars */
  transition: all 0.05s ease-in-out;

  border: 1px solid rgba(255, 255, 255, 0.158);
}


.app-icon-link:hover::after {
  --clr-outline: white;
  position: absolute;
  content: "";
  inset: -4px;
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
  background-size: var(--corner-size) var(--corner-size);
  /* Length of the corner bars */
  transition: all 0.05s ease-in-out;
}




.app-icon-link h3 {
  margin: 0;
  font-size: 12pt;
  font-weight: normal;
}
</style>
