<template>
    <h2 v-html="$md.render(strapi_content.bio)"></h2>
</template>


    
    
<script>
export default {
  async asyncData({ params, $strapi }) {
    const strapi_content = await $strapi.find("book-site-content");

    return { strapi_content };
  },
};
</script>