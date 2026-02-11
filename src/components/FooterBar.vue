<script lang="ts" setup>
import ContentPanel from './ContentPanel.vue';
import LogoGN from './LogoGN.vue';



</script>

<template>
  <div class="footer-bar">
    <ContentPanel class="column">
      <div class="columns">
        <div class="column">
          <LogoGN/>
        </div>
      </div>
      © Copyright 2022-2026 GNanimates. All rights reserved
    </ContentPanel>
  </div>
</template>

<style scoped>

.footer-bar {
  background-color: rgba(0, 0, 0, 0.111);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--clr-outline);
  padding: 1rem;
  margin-top: 2rem;
  
  display: flex;
}

.logo {
  width: 3rem;
  height: 3rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
}

.columns {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

</style>
