<template>
  <section class="px-6 py-16 text-white bg-primary-blue">
    <!--- BIO PIC --->
    <div class="w-full pt-10 text-center">
      <img
        src="/CDN/assets/images/biopic.jpg"
        alt="image"
        class="mx-auto border-4 border-blue-900 rounded-full w-36 h-36"
      />
    </div>

    <!--- SECTION TITLE --->
    <LazySectionTitle :content="content.author_title" />

    <!--- BIO --->
    <div
      id="bio"
      class="max-w-screen-md mx-auto prose text-white"
      v-html="$md.render(content.bio)"
    ></div>

    <!--- SOCIAL / FOLLOW ME --->
    <div class="w-full mt-12 text-center">
      <div class="text-2xl font-bold font-Ubuntu">Follow Me</div>
      <div class="flex justify-around w-64 mx-auto my-4">
        <LazySocialIcon
          type="facebook"
          userName="ThePursuitOfHappinessAtWork"
        />
        <LazySocialIcon type="twitter" userName="TPOHAW" />
        <LazySocialIcon type="instagram" userName="TPOHAW" />
        <LazySocialIcon
          type="linkedin"
          userName="company/thepursuitofhappinessatwork"
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
};
</script> 

<style >
#bio strong {
  color: #fff;
}
</style>