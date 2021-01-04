<template>
  <div>
    <Hero :content="cms.Hero" />
  </div>
</template>


<script>
export default {
  async asyncData({ params, $strapi }) {
    const cms = await $strapi.find("book-site-content");

    return { cms };
  },
};
</script>


