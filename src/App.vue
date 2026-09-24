<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BackgroundTrees from './components/backgrounds/backgroundTrees.vue';

const route = useRoute()
const currentBackground = computed(() => route.meta.background || BackgroundTrees)
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
  <Transition name="fade" mode="out-in" >
    <component :is="currentBackground" />
  </Transition>
  <FooterBar />
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {

  opacity: 0;
}

</style>
