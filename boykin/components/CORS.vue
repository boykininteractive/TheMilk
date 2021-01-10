<template>
  <h1>CORS Test</h1>
</template>

<script>
// import CORS from "~/boykin/components/CORS";

export default {
  head() {},
  // layout: "default",
  // page component definitions
  components: {},
  methods: {
    async testCORS() {
      console.log("START CORS TEST");
      //////////////////////////////////////////////
      ///
      /// GET - https://api.v2.boykin-framework.com
      ///
      //////////////////////////////////////////////
      console.log("GET - https://api.v2.boykin-framework.com");
      try {
        this.records = await this.$axios.$get(
          "https://api.v2.boykin-framework.com"
        );
        // success
        // DEBUG -
        console.log("SUCCESS - https://api.v2.boykin-framework.com");
        console.log(this.records);
      } catch (error) {
        console.log("ERROR - https://api.v2.boykin-framework.com");
        // error
        if (error.response.request.status === 401) {
          console.log("401 - Log the user out");
          await this.$auth.logout();
        }
        // DEBUG -
        console.log(error.response);
      }
      //////////////////////////////////////////////
      ///
      /// POST - https://api.v2.boykin-framework.com
      ///
      //////////////////////////////////////////////
      console.log("POST - https://api.v2.boykin-framework.com");
      try {
        this.records = await this.$axios.$post(
          "https://api.v2.boykin-framework.com"
        );
        // success
        // DEBUG -
        console.log("SUCCESS - https://api.v2.boykin-framework.com");
        console.log(this.records);
      } catch (error) {
        console.log("ERROR - https://api.v2.boykin-framework.com");
        // error
        if (error.response.request.status === 401) {
          console.log("401 - Log the user out");
          await this.$auth.logout();
        }
        // DEBUG -
        console.log(error.response);
      }
      //////////////////////////////////////////////
      ///
      /// GET - https://auth.boykin-hosting.com/api/system-configuration
      ///
      //////////////////////////////////////////////
      console.log(
        "GET - https://auth.boykin-hosting.com/api/system-configuration"
      );
      try {
        this.$axios.setHeader(
          "Authorization",
          "2aTXYkZ3DUowPVphf0G3Ukhay3aoJZW-JPAO6TOAzbM",
          ["get"]
        );
        this.records = await this.$axios.$get(
          "https://auth.boykin-hosting.com/api/system-configuration"
        );
        // success
        // DEBUG -
        console.log(
          "SUCCESS - https://auth.boykin-hosting.com/api/system-configuration"
        );
        console.log(this.records);
      } catch (error) {
        console.log(
          "ERROR - https://auth.boykin-hosting.com/api/system-configuration"
        );
        // error
        if (error.response.request.status === 401) {
          console.log("401 - Log the user out");
          await this.$auth.logout();
        }
        // DEBUG -
        console.log(error.response);
      }
      //////////////////////////////////////////////
      ///
      /// POST - https://auth.boykin-hosting.com/api/system-configuration
      ///
      //////////////////////////////////////////////
      console.log(
        "POST - https://auth.boykin-hosting.com/api/system-configuration"
      );
      try {
        this.$axios.setHeader(
          "Authorization",
          "2aTXYkZ3DUowPVphf0G3Ukhay3aoJZW-JPAO6TOAzbM",
          ["post"]
        );
        this.records = await this.$axios.$post(
          "https://auth.boykin-hosting.com/api/system-configuration"
        );
        // success
        // DEBUG -
        console.log(
          "SUCCESS - https://auth.boykin-hosting.com/api/system-configuration"
        );
        console.log(this.records);
      } catch (error) {
        console.log(
          "ERROR - https://auth.boykin-hosting.com/api/system-configuration"
        );
        // error
        if (error.response.request.status === 401) {
          console.log("401 - Log the user out");
          await this.$auth.logout();
        }
        // DEBUG -
        console.log(error.response);
      }
    }
  },
  data: function() {
    return {};
  },
  mounted() {
    this.testCORS();
  }
};
</script>

<style>
</style>



<!--- CORS PAGE

<template>
  <CORS />
</template>

<script>
import CORS from "~/boykin/components/CORS";

export default {
  head() {},
  // layout: "default",
  // page component definitions
  components: {
    CORS
  },
  methods: {},
  data: function() {
    return {};
  }
};
</script>

<style>
</style>