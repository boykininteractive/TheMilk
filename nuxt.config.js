
export default {
  server: {
    port: 3031, // default: 3000
    host: "localhost" // default: localhost
  },
  // target: 'static', // default is 'server',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preload",
        as: "style",
        onload: "this.onload=null;this.rel='stylesheet'",
        media: "all",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      }
    ],
    script: [{
      src: "https://kit.fontawesome.com/f19292244f.js",
      crossorigin: "anonymous",
      defer: "true",
    }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazysizes.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  components: [
    // Module Option as an array of Strings
    {
      path: "~/components/",
    },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],
  /*
  ** MARKDOWNIT
  */
  markdownit: {
    injected: true
  },
    /*
   ** PWA Icon Configuration
   */
  icon: {
    iconSrc: "/CDN/assets/favicon/android-chrome-512x512.png"
  },
  pwa: {
    meta: {
      /* meta options */
      /* Address Bar Matches Brand Colors */
      theme_color: "#3158a0"
    },
    manifest: {
      name: 'TPOHAW',
      short_name: 'TPOHAW',
      lang: 'en',
      useWebmanifestExtension: true
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};