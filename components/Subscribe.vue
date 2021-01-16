<template>
  <section class="max-w-6xl px-6 pt-0 mx-auto mt-0 mb-12 text-black">
    <!--- SECTION TITLE --->
    <LazySectionTitle
      :title="content.subscribe_title"
      :subtitle="content.subscribe_subtitle"
    />

    <div class="box-border text-base font-normal leading-6 text-left">
      <!--       <form
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
      </form> -->

      <div class="flex justify-center w-full mt-8">
        <B_EmailSubscription
          placeholder="Enter your email ..."
          buttonLabel="Subscribe"
          buttonColor="bg-primary-blue"
          buttonText="text-white"
          listid="82759f27b97166d17e3719a8dd26834f"
        />
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