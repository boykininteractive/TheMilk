// package.json
    "swiper": "5.4.5",
    "vue-awesome-swiper": "4.1.1"


// nuxt.config.js
plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

  
  
// plugins
//vue-awesome-Swiper.js

import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);



// component

<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/CDN/assets/images/photo1.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="/CDN/assets/images/photo2.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="/CDN/assets/images/photo3.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="/CDN/assets/images/photo4.jpg" alt />
      </div>

      <div class="swiper-pagination" slot="pagination"></div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "componentSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disabledOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>