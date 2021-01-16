<template>
  <section class="max-w-6xl px-6 pt-0 mx-auto mt-0 mb-12 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle
      :title="content.subscribe_title"
      :subtitle="content.subscribe_subtitle"
    />

    <div class="box-border text-base font-normal leading-6 text-left">
      <form
        method="post"
        @submit.prevent="subscribe"
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
            v-model="user_signup.email"
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
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div
        v-if="success"
        class="w-1/3 p-4 mx-auto mt-4 bg-green-100 border-2 border-green-400 rounded-md"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: check-circle -->
            <svg
              class="w-5 h-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">
              Your email has been added succesfully
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="failure"
        class="w-1/3 p-4 mx-auto mt-4 bg-red-100 border-2 border-red-400 rounded-md"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: check-circle -->
            <svg
              class="w-5 h-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">
              {{ failure_message }}
            </p>
          </div>
        </div>
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
  data() {
    return {
      user_signup: {
        name: "",
        email: "",
      },
      success: false,
      failure: false,
      failure_message: "",
    };
  },
  methods: {
    subscribe({ params, $campaignmonitor }) {
      console.log("Method - Subscribe");
      //console.log(this.user_signup);
      let result = this.$campaignmonitor.addSubscriber(
        "82759f27b97166d17e3719a8dd26834f",
        this.user_signup
      );
      console.log("result");
      console.log(result);
      if (result.status === "success") {
        this.success = true;
        this.user_signup.name = "";
        this.user_signup.email = "";
      } else if (result.status === "error") {
        console.log("FAILED");
        this.failure = true;
        this.failure_message = result.message;
        this.user_signup.name = "";
        this.user_signup.email = "";
      }
    },
  },
};
</script> 

<style scoped>
.prose strong {
  color: #000;
}
</style>