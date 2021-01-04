<template>
  <section class="px-6 py-16 text-white bg-primary-blue">
    <!--- BIO PIC --->
    <div class="w-full pt-10 text-center">
      <img
        src="/CDN/assets/images/biopic.jpg"
        alt="image"
        class="mx-auto border-4 border-blue-900 rounded-full w-36 h-36"
      />
    </div>

    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.author_title" />

    <!--- BIO --->
    <div
      class="mx-auto prose text-white"
      style="max-width: 760px"
      v-html="$md.render(content.bio)"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: "content goes here",
    },
  },
};
</script> 

<style>
.prose strong {
  color: #fff;
}
</style>