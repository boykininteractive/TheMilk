// Install
// https://www.npmjs.com/package/vuex-persistedstate
// npm install --save vuex-persistedstate

// COOKIES / VUEX MODULES
//
// vuex-persistedstate.js

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, isDev, req }) => {
  createPersistedState({
    key: 'mySiteCookie',
    paths: [ 'myVuexModule' ],
    storage: {
      getItem: (key) => process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie||'')[key],
      setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: !isDev }),
      removeItem: (key) => Cookies.remove(key)
    }
  })(store)
  // }
}

// nuxt.config.js

module.exports = {
  ...
  plugins: [{ src: '~/plugins/vuex-persistedstate.js', ssr: true }],
  ...
}




// LOCAL STORAGE
//
// Plugins / localStorage.js
import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "vuex",
      // paths: ["form"]
    })(store);
  });
};

// nuxt.config.js
plugins: [{ src: "~/plugins/localStorage.js", ssr: false }];
