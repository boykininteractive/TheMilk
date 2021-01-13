<template>
  <section class="px-6 py-16 text-black bg-primary-gray">
    <!--- SECTION TITLE --->
    <LazySectionTitle :title="content.chapterlist_title" subtitle="" />

    <div class="flex flex-wrap items-center justify-center py-8">
      <!--- BOOK COVER --->
      <div class="max-w-md text-center md:max-w-sm md:mr-20">
        <img
          data-src="https://res.cloudinary.com/boykinllc/image/upload/c_scale,f_auto,w_500/v1610455616/The%20Pursuit%20of%20Happiness%20at%20Work/bookcover_shadow.png"
          alt="book cover"
          class="mx-auto lazyload"
        />
      </div>

      <!--- CHAPTER LISTING --->
      <div class="pt-6 leading-loose text-center text-gray-700">
        <div
          v-for="chap in content.Chapter"
          :key="chap.id"
          class="text-lg text-left md:text-xl"
        >
          {{ chap.chapter_name }}
        </div>
      </div>
    </div>
    <div class="w-full text-center">
      <button
        class="px-10 py-4 mx-auto mt-10 text-white uppercase rounded-full bg-primary-blue md:mr-8"
      >
        I Want This Book
      </button>
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