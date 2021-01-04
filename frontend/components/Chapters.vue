<template>
  <section class="px-6 py-16 text-black bg-primary-gray">
    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.chapterlist_title" />

    <div class="flex flex-wrap justify-center">
      <!--- BOOK COVER --->
      <div class="max-w-md -mt-10 text-center md:max-w-sm md:mr-20">
        <img src="/CDN/assets/images/bookcover_shadow.png" class="mx-auto" />
      </div>

      <!--- CHAPTER LISTING --->
      <div class="leading-loose text-center text-gray-600">
        <div
          v-for="chap in content.Chapter"
          :key="chap.id"
          class="text-lg text-left md:text-xl"
        >
          {{ chap.chapter_name }}
        </div>
        <button
          class="px-10 py-4 mx-auto mt-10 text-white uppercase rounded-full bg-primary-blue md:mr-8"
        >
          I Want This Book
        </button>
      </div>
    </div>
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
</style>