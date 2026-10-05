<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">

const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div>
    <h2>Gallery Item {{ id }}</h2>
  </div>
</template>
