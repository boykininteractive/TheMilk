<template>
  <section class="max-w-6xl px-6 pt-0 mx-auto mt-0 mb-12 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle
      :title="content.audience_title"
      :subtitle="content.audience_subtitle"
    />
    <div class="mt-16">
      <div
        class="mx-auto mt-8 text-lg text-black"
        style="max-width: 500px"
        v-for="item in content.audience_item"
        :key="item.id"
      >
        <div class="my-2 text-xl font-bold">
          <i class="mr-3 fa fa-angle-right"></i>{{ item.audience_item_heading }}
        </div>
        <div class="font-light text-gray-700">
          {{ item.audience_item_description }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {};
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