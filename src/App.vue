<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"/>
    </Transition>
  </RouterView>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter-from,
.fade-leave-to{

  opacity: 0;
}

</style>
