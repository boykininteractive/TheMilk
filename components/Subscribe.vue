<template>
  <section class="max-w-6xl px-6 pt-0 mx-auto mt-0 mb-12 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle
      :title="content.subscribe_title"
      :subtitle="content.subscribe_subtitle"
    />

    <div class="box-border text-base font-normal leading-6 text-left">
      <form
        class="box-border flex flex-row flex-wrap items-center justify-center mt-8 text-base font-normal leading-6 text-left"
      >
        <div
          class="box-border relative flex flex-wrap items-stretch mb-4 text-base font-normal leading-6 text-left"
        >
          <input
            id="email"
            type="email"
            placeholder="Enter your email ..."
            aria-label="Enter your email ..."
            aria-describedby="subscribe"
            required="required"
            class="box-border relative flex-1 block w-64 h-12 px-6 py-0 m-0 overflow-visible overflow-x-visible overflow-y-visible text-sm font-normal leading-5 align-middle bg-white border-t border-b border-l border-r border-solid rounded-full outline-none bg-clip-padding"
          />
          <button
            type="submit"
            id="subscribe"
            class="box-border right-0 z-20 w-32 h-12 m-0 -ml-10 overflow-visible overflow-x-visible overflow-y-visible text-base font-normal leading-6 text-center text-white normal-case bg-scroll bg-repeat bg-auto border-t-0 border-b-0 border-l-0 border-r-0 border-white rounded-full outline-none cursor-pointer bg-primary-blue bg-clip-border bg-none"
          >
            Subscribe
          </button>
        </div>
      </form>
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

<style scoped>
.prose strong {
  color: #000;
}
</style>