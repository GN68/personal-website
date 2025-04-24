<template>
  <div class="title-bar">
    <slot/>
  </div>
</template>

<style scoped>
.title-bar {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
    text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  .title-bar {
    text-align: center;
  }
}
</style>
