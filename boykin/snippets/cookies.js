// Install Vue-Cookies
// https://www.npmjs.com/package/vue-cookies
npm install vue - cookies--save

// cookieparser
npm install --save cookieparser 

// Plugins   
// plugins/vue-cookies.js
import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// Nuxt Config   
// plugins / vue-cookies.js
plugins: [
    { src: "~plugins/vue-cookies", ssr: false },
],
    
    
//Create a Cookie
this.$cookies.set("username", "John Doe");

// Get a Cookie
this.$cookies.get(keyName)  // return value           

// Delete a Cookie
this.$cookies.remove(keyName)  // return this

// Check a Cookie Exists
this.$cookies.isKey(keyName)  // return false or true



// https://strapi.io/blog/cooking-a-deliveroo-clone-with-nuxt-vue-js-graphql-strapi-and-stripe-authentication-part-4-7
import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      user = (parsed.user && JSON.parse(parsed.user)) || null
    }

    commit('auth/setUser', user)
  }
}