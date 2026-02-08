<script setup lang="ts">
import BackgroundGrid from './components/backgrounds/BackgroundGrid.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <div class="background">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    
    <BackgroundGrid />
  </div>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {

  opacity: 0;
}

</style>
