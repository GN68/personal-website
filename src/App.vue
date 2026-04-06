<script setup lang="ts">
import BackgroundTrees from './components/backgrounds/backgroundTrees.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <NavigationBar />
  <div class="background">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
  <BackgroundTrees />
  <FooterBar />
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
