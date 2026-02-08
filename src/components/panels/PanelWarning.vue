<template>
  <div class="warning">
    <slot></slot>
  </div>
</template>
<style scoped=true>
.warning {
  border-radius: 2px;
  padding: 4px 4px;
  background-color: rgba(255, 213, 0, 0.142);
  display: flex;
  flex-direction: column;
  border-left: 4px solid rgb(255, 213, 0);
  width: fit-content;
}

.warning::before {
  content: '⚠️ Warning';
  color: rgb(255, 213, 0);
}
</style>
