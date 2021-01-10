<template>
  <div class="body">
    <div class="divv">1</div>
    <div class="divv">2</div>
    <div class="divv">3</div>
    <div class="divv">4</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.body {
  display: grid;
  height: 100vh;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.divv {
  display: grid;
  place-items: center;
  background: lightpink;
}

body {
  font-family: system-ui, sans-serif;
}
</style>