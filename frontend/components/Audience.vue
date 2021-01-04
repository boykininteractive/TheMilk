<template>
  <section class="max-w-6xl px-6 pt-0 mx-auto mt-0 mb-12 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.audience_title" />

    <!--- SECTION SUBTITLE --->
    <div
      class="max-w-screen-md mx-auto -mt-6 text-xl text-center text-gray-600 lg:text-2xl"
    >
      {{ content.audience_subtitle }}
    </div>

    <!--- CONTENT AREA --->
    <div
      class="mx-auto mt-12 text-lg prose text-black"
      style="max-width: 500px"
      v-html="$md.render(content.audience_description)"
    ></div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://kit.fontawesome.com/f19292244f.js",
          crossorigin: "anonymous",
        },
      ],
    };
  },
  props: {
    content: {
      type: Object,
      default: "content goes here",
    },
  },
};
</script> 

<style scoped>
.prose strong {
  color: #000;
}
</style>