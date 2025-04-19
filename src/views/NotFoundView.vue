<!-- src/views/NotFoundView.vue -->
<template>
  <div class="not-found">
    <img src="@/assets/404.webp" alt="" class="not-found">
    <a href="/">Return Home</a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.not-found {
  width: min(100vw, calc(100vh - var(--nav-height)));
}

</style>
