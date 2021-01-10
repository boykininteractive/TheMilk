<template>
  <div class="body">
    <div class="span-12 divv">Span 12</div>
    <div class="span-6 divv">Span 6</div>
    <div class="span-4 divv">Span 4</div>
    <div class="span-2 divv">Span 2</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.body {
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
}

.divv {
  display: grid;
  place-items: center;
}

.span-12 {
  background: lightpink;
  grid-column: 1 / 13;
}

.span-6 {
  background: lightblue;
  grid-column: 1 / 7;
}

.span-4 {
  background: coral;
  grid-column: 4 / 9;
}

.span-2 {
  background: yellow;
  grid-column: 3 / 5;
}

body {
  font-family: system-ui, sans-serif;
}
</style>