<template>
  <div>
    <LazyHero />
    <LazyBenefits />

    <!--- CHAPTERS --->
    <LazyChaptersTop />
    <LazyChapters />
    <LazyChaptersBottom />

    <LazyAudience />

    <!--- REVIEWS --->
    <LazyReviewsTop />
    <LazyReviews />
    <LazyReviewsBottom />

    <LazySubscribe />

    <!--- AUTHOR --->
    <LazyAuthorTop />
    <LazyAuthor />
  </div>
</template>

<script>
export default {
  layout: "chayma",
  head() {
    return {
      title: "Home",
    };
  },
};
</script>

<style>
</style>
