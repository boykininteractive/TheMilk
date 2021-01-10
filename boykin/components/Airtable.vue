<template>
  <b-container>
    <div v-for="record in records" :key="record.id">{{records}}></div>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Airtable",
  props: ["base", "table", "airtableView"],

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
          "/?view=" +
          this.airtableView,
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
        <Airtable
          base="appCmtsKmOy9DQxQD"
          table="schedule",
          airtableView=""
        />
*/
