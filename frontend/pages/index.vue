<template>
  <div>
    <LazyHero :content="cms.Hero" />
    <!-- <LazyBenefits /> -->

    <!--- CHAPTERS --->
    <LazyChaptersTop />
    <LazyChapters :content="cms.ChapterList" />
    <LazyChaptersBottom />

    <!-- <LazyAudience /> -->

    <!--- REVIEWS
    <LazyReviewsTop />
    <LazyReviews />
    <LazyReviewsBottom /> --->

    <!-- <LazySubscribe /> -->

    <!--- AUTHOR --->
    <LazyAuthorTop />
    <LazyAuthor :content="cms.Author" />
  </div>
</template>


<script>
export default {
  async asyncData({ params, $strapi }) {
    const cms = await $strapi.find("book-site-content");

    return { cms };
  },
};
</script>


