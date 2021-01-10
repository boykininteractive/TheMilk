npm install lazysizes


// plugins / lazysizes.client.js
import lazySizes from 'lazysizes'
export default lazySizes




// nuxt.config.js

plugins: [
  '~/plugins/lazysizes.client.js'
],
build: {
  extend (config, { isDev, isClient, loaders: { vue } }) {
    if (isClient) {
      vue.transformAssetUrls.img = ['data-src', 'src']
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    }
  }
}


// example

<template>
    <!--- PHOTO 1 --->
    <picture>
      <source
        data-srcset="
          https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_1280/v1602217152/PCAA/twins.jpg   1280w,
          https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_1024/v1602217152/PCAA/twins.jpg   1024w,
          https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_768/v1602217152/PCAA/twins.jpg   768w,
          https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_640/v1602217152/PCAA/twins.jpg   640w,
          https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_375/v1602217152/PCAA/twins.jpg   375w
        "
      />

      <img src="http://placehold.it/350" alt="" class="lazyload" />
    </picture>
</template>
