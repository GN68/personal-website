<script setup lang="ts">
import { ref } from 'vue'
const isHovered = ref(false)
</script>


<template>
  <div
  class="logo-title"
  @mouseenter="isHovered = true"
  @mouseleave="isHovered = false"
  >
    <img src="@/assets/icon.webp" alt="🎩" class="logo">
    <RouterLink to="/" class="custom-link">
    <transition name="fade">
        <span :key="isHovered ? 'hovered' : 'default'" class="text-layer">
          {{ isHovered ? "GNanimates" : "GN68s" }}
        </span>
      </transition>
    </RouterLink>
  </div>
</template>

<style scoped>

.custom-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  height: 100%;
}


.logo-title {
  font-weight: bold;
  font-size: 16pt;
  position: relative;
  width: calc(var(--nav-height) - 10px + 8rem); /* lock size */
  height: 1.5em;
  display: inline-block;
  user-select: none;
}

.text-layer {
  position: absolute;
  top: 0;
  left: calc(var(--nav-height) - 10px);
  right: 0;
  bottom: 0;

  line-height: 1.5em;
  text-align: left;
  justify-content: left;
  align-items: center;
}

/* Fade effect */
.fade-enter-active {
  transition: opacity 0.2s cubic-bezier(0.33, 1, 1, 1);
}
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier( 1, 0.33, 1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

