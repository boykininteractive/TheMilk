<template>
  <!--- SECTION TITLE --->
  <div
    class="w-full my-8 text-3xl font-bold text-center md:text-4xl font-Ubuntu"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "Title goes here",
    },
  },
};
</script> 

<style></style>