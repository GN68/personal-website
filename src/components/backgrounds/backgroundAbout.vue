<script setup lang="ts">
</script>

<template>
  <div class="background">
    <div class="lines">
      <h2>help ive fallen and I cant get up, I need @someone. help ive fallen and I cant get up, I need @someone.</h2>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima totam, earum autem eaque temporibus distinctio consectetur veritatis modi tempora quis et! Nostrum porro beatae, numquam ratione atque eos quae itaque.</h2>
      <div class="ribbon">
      </div>
      <h1>THE GREEN NEON.THE GREEN NEON.THE GREEN NEON.THE GREEN NEON.</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima totam, earum autem eaque temporibus distinctio consectetur veritatis modi tempora quis et! Nostrum porro beatae, numquam ratione atque eos quae itaque.</h2>
      <h1>ABOUT ME ABOUT ME ABOUT ME ABOUT ME </h1>
      <h2>na finalize mo na ba? na finalize mo na ba? na finalize mo na ba? na finalize mo na ba?</h2>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
* {
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  font-weight: 1000;
  white-space: preserve nowrap;
}

h1 {
  border: none;
  font-size: 12rem;
  line-height: 12rem;
  margin: 0;
  color: rgb(23, 23, 23);
  animation: scrollMarquee linear infinite 180s;
  background-color: var(--green);
  gap: 1rem;
  padding-right: 1rem; /* Matches the gap to prevent awkward jumps */
  white-space: preserve nowrap;
  width: fit-content;
}

h2 {
  border: none;
  font-size: 8rem;
  line-height: 8rem;
  margin: 0;
  color: var(--gray);
  animation: scrollMarquee linear infinite 70s;
}

h3 {
  border: none;
  font-size: 3rem;
  line-height: 3rem;
  margin: 0;
  color: var(--gray);
  animation: scrollMarquee linear infinite 120s;
}

.lines {
  display: flex;
  flex-direction: column;
}

.background {
  transform: rotate(30deg) translateY(-8rem);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>
