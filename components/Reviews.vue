<template>
  <section class="px-6 py-16 text-black bg-primary-gray">
    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.reviews_title" />

    <!--- SECTION SUBTITLE --->
    <div class="mx-auto -mt-6 text-xl text-center text-gray-600 lg:text-2xl">
      {{ content.reviews_subtitle }}
    </div>

    <div class="flex flex-wrap justify-center max-w-screen-xl mx-auto">
      <div
        class="relative px-6 pt-12 pb-6 mx-4 mt-16 text-base italic font-normal bg-white lg:border-2 lg:w-1/4 lg:px-4 lg:mx-4"
        v-for="review in content.review"
        :key="review.id"
      >
        <div
          class="mx-auto prose-md"
          style="max-width: 760px"
          v-html="$md.render(review.review_content)"
        ></div>
        <div
          class="mx-auto mt-8 text-xs prose-sm"
          style="max-width: 760px"
          v-html="$md.render(review.reviewer)"
        ></div>
        <div
          class="absolute inline-block w-12 h-12 pt-4 text-center rounded-full bg-primary-blue"
          style="left: 50%; margin-left: -25px; top: -25px"
        >
          <i class="text-xl text-white fa fa-quote-right"></i>
        </div>
      </div>
      <div class="leading-loose text-center text-gray-600">
        <button
          class="px-10 py-4 mx-auto mt-10 text-white uppercase rounded-full outline-none bg-primary-blue"
        >
          Get Your Copy Today
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