<template>
  <div>
    <h1>Gallery</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/gallery/${item.id}`">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const items = [
  { id: '123', name: 'Sunset' },
  { id: '456', name: 'Mountains' }
]
</script>
