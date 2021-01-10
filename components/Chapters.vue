<template>
  <section class="px-6 py-16 text-black bg-primary-gray">
    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.chapterlist_title" />

    <div class="flex flex-wrap justify-center">
      <!--- BOOK COVER --->
      <div class="max-w-md -mt-10 text-center md:max-w-sm md:mr-20">
        <img
          src="https://res.cloudinary.com/boykinllc/image/upload/c_scale,f_auto,w_500/v1610244895/The%20Pursuit%20of%20Happiness%20at%20Work/bookcover_shadow.png"
          alt="book cover"
          class="mx-auto"
        />
      </div>

      <!--- CHAPTER LISTING --->
      <div class="leading-loose text-center text-gray-700">
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