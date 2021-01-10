<template>
  <div class="h-full">
    <div class="bg"></div>
  </div>
</template>



<script>
</script>

<style >
.bg {
  /* The image used */
  /* background-image: url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"); */
  background-image: url("/CDN/assets/vendor/unsplash_photo.jpeg");
  background-color: #000;
  opacity: 1;
  filter: alpha(opacity=100);
  position: absolute;
  z-index: -10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>