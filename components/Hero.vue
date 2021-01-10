<template>
  <!-- Hero Section Starts -->
  <section class="relative bg-primary-blue" style="height: 610px">
    <!--- SECTION BACKGROUND DESIGN --->
    <img
      src="/CDN/assets/images/hero-shape-left.png"
      class="absolute top-0 left-0 z-10"
      alt="left shape"
    />
    <div
      class="flex flex-wrap justify-center max-w-screen-xl px-10 mx-auto text-center md:pt-6"
    >
      <div
        class="self-center w-full px-0 py-10 mb-12 text-center sm:px-4 lg:px-12 md:text-left md:w-6/12 lg:w-7/12"
      >
        <h1
          class="w-full mb-4 text-3xl font-bold leading-tight text-white capitalize lg:text-5xl xl:text-6xl font-Ubuntu"
        >
          {{ content.hero_title }}
        </h1>
        <div class="mb-10 text-xl text-white">
          {{ content.description }}
        </div>
        <div class="cta-holder">
          <a class="px-10 py-4 uppercase bg-white rounded-full md:mr-8"
            >Buy for $9.99</a
          >
          <a
            class="hidden px-10 py-4 text-white uppercase border-2 rounded-full lg:inline border-primary-white bg-none"
            href="#benefits-section"
            >Learn More</a
          >
        </div>
      </div>
      <!--- BOOK COVER --->
      <div class="w-full -mt-16 md:mt-0 md:w-6/12 lg:w-5/12">
        <img
          src="/CDN/assets/images/bookcover_hardcover.png"
          class="relative z-20 h-auto max-w-xs mx-auto md:max-w-sm"
        />
      </div>
    </div>

    <!--- HERO SHAPE BOTTON --->
    <img
      class="bottom-0 left-0 right-0 hidden w-full md:block md:absolute"
      style="height: 380px"
      src="/CDN/assets/images/hero-shape-bottom.png"
    />
  </section>
</template> 

<script>
export default {
  props: {
    content: {
      type: Object,
      default: "",
    },
  },
};
</script> 

<style>
</style>