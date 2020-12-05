purgeCSS: {
  enabled: false;
}
export default {
    server: {
    port: 3031, // default: 3000
    host: "localhost" // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "The Pursuit of Happiness at Work - %s",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

    /*
     ** Google Analytics Configuration
     */
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-175536441-1"
      }
    ]
  ],
  components: [
    // Module Option as an array of Strings
    // "~/components/ui-1/",

    // Module Option as an array of Objects
    {
      path: "~/components/",
      extensions: ["vue"],
      // prefix: "aex",
      // ignore: ["**/*.js"], // will ignore js files found directly under components/ui-2 and sub-folders
      // ignore: ["**/Card/*.js"], // will ignore js files found under components/ui-2/card
      // ignore: ["**/List/*.js"], // will ignore js files found under components/ui-2/list
    },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    "@nuxtjs/sitemap"
  ],
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
      theme_color: "#375B76"
    }
  },
  sitemap: {
    // custom configuration
    hostname: "https://boykin.website/"
  },
  robots: {
    /* module options */
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
