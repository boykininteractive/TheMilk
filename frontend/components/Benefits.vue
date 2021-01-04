<template>
  <section class="px-6 py-16 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.benefits_title" />

    <div
      class="max-w-screen-md mx-auto -mt-6 text-xl text-center text-gray-600"
    >
      {{ content.benefits_subtitle }}
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <div
        class="w-1/3 px-16 my-16 text-center"
        v-for="benefit in content.benefits_item"
        :key="benefit.id"
      >
        <div class="icon">icon</div>
        <div class="mb-4 text-lg font-bold font-Ubuntu">
          {{ benefit.header }}
        </div>
        <div class="text-gray-600">{{ benefit.description }}</div>
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
.prose strong {
  color: #fff;
}
</style>