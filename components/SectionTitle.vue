<!--- SECTION TITLE

<LazySectionTitle
  :title="content.benefits_title"
  :subtitle="content.benefits_subtitle"
/>

--->
<template>
  <div>
    <!--- SECTION TITLE --->
    <div
      class="w-full my-8 text-3xl font-bold text-center md:text-4xl font-Ubuntu"
    >
      {{ title }}
    </div>
    <!--- SECTION SUBTITLE --->
    <div
      class="max-w-screen-md mx-auto -mt-6 text-2xl font-light text-center text-gray-600"
    >
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title goes here",
    },
    subtitle: {
      type: String,
      default: "Subtitle goes here",
    },
  },
};
</script> 

<style></style>