<template>
  <div>
    <LazyHero :content="cms.Hero" />
    <LazyBenefits :content="cms.Benefits" />

    <!--- CHAPTERS --->
    <LazyChaptersTop />
    <LazyChapters :content="cms.ChapterList" />
    <LazyChaptersBottom />

    <LazyAudience :content="cms.Audience" />

    <!--- REVIEWS --->
    <LazyReviewsTop />
    <LazyReviews :content="cms.Reviews" />
    <LazyReviewsBottom />

    <LazySubscribe :content="cms.Subscribe" />

    <!--- AUTHOR --->
    <LazyAuthorTop />
    <LazyAuthor :content="cms.Author" />
  </div>
</template>


<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://api.thepursuitofhappinessatwork.com/book-site-content`
    );
    return { cms: data };
  },
};
</script>


