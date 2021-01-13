<template>
  <section
    class="max-w-6xl px-6 pt-32 mx-auto mt-32 mb-12 text-black sm:pt-16 sm:mt-16 md:pt-0 md:mt-0"
  >
    <!--- SECTION TITLE --->
    <LazySectionTitle
      :title="content.benefits_title"
      :subtitle="content.benefits_subtitle"
    />

    <div class="flex flex-wrap justify-center mt-10">
      <div
        class="w-full px-4 my-10 text-center md:my-6 md:w-1/3 xl:px-10"
        v-for="benefit in content.benefits_item"
        :key="benefit.id"
      >
        <i :class="benefit.icon" class="mb-4 text-5xl text-primary-blue"></i>
        <div class="mb-4 text-lg font-bold font-Ubuntu">
          {{ benefit.header }}
        </div>
        <div class="text-gray-700">{{ benefit.description }}</div>
      </div>
    </div>
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

<style>
</style>