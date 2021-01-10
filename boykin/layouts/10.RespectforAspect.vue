<template>
  <div class="card">
    <h1>Title Here</h1>
    <div class="visual"></div>
    <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  display: grid;
  place-items: center;
  height: 100vh;
}

.visual {
  aspect-ratio: 16/9;
  background: wheat;
  margin: 0.5rem 0;
}

.card {
  width: 80%;
  display: flex;
  flex-direction: column;
  background: lightpink;
  padding: 1rem;
}

body {
  font-family: system-ui, sans-serif;
}

h1 {
  font-size: 1.5rem;
}
</style>