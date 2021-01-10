<template>
  <div class="body">
    <header>
      <h1>Header.com</h1>
    </header>
    <main></main>
    <footer>Footer Content — Header.com 2020</footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
}

header {
  background: lightpink;
  padding: 2rem;
}

main {
  background: coral;
}

footer {
  background: wheat;
  padding: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, sans-serif;
}
</style>