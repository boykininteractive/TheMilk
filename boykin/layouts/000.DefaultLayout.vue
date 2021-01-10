<template>
  <nuxt />
</template>

<script>
import COMPONENT from "~/components/COMPONENT.vue";

export default {
  head() {
    return {
      title: "LAYOUT TITLE",
      script: [
        /* script: {src: "https://code.jquery.com/jquery-3.4.1.min.js"} */
      ]
      link: [
        /* css:   { rel: "stylesheet", href: "/CDN/assets/client.css" }, */
      ]
    };
  },
  layout: "default",
  // page component definitions
  components: {
    COMPONENT
  },
  methods: {}
};
</script>

<style scoped>
</style>