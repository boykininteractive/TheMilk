<template>
  <div class="content_snippet_wrapper">
    <div
      v-html="record.fields.content"
      class="content_snippet"
      v-for="record in records"
      :key="record.id"
    ></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContentSnippet",
  props: ["base", "table", "alias"],

  data: function() {
    return {
      apiUrl: "https://api.airtable.com/v0/",
      apiKey: "keywGmx3GLXa7JITD", // Always use a read-only account token
      records: []
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      axios({
        url:
          this.apiUrl +
          this.base +
          "/" +
          this.table +
          "/?filterByFormula=alias='" +
          this.alias +
          "'",
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }).then(res => {
        this.records = res.data.records;
      });
    }
  }
};
</script>



// USAGE:
/*
    <ContentSnippet
    base="appClGpIxjPNEgYDu"
    table="content-snippets"
    alias="about"
    />

*/