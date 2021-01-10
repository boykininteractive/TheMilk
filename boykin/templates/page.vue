<template></template>

<script>
export default {
  head() {
    return {
      title: "PAGE TITLE"
      /* link: [{rel: "stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"}], */
      /* script: [{src: "https://code.jquery.com/jquery-3.4.1.min.js"}] */
    };
  },
  layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
  methods: {
    async userLogin() {
      try {
      } catch (error) {}
    }
  },
  data: function() {
    return {
      siteURL: pkg.siteURL
    };
  },
  computed: {
    filteredNames() {}
  },
  mounted() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  created() {}
};
</script>

<style scoped>
</style>
