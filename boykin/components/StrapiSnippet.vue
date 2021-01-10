<template>
  <div class="mx-12">
    <div class="my-12" v-for="record in records" :key="record.id">
      <span class="text-xs text-gray-400"
        >{{ record.id }} - {{ record.date }}</span
      >
      <img
        class="w-auto h-16"
        :src="`https://strapi.boykin.dev${record.image.url}`"
      />
      <strong class="block my-4 text-2xl">{{ record.title }}</strong>

      <div v-html="$md.render(record.description)"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StrapiSnippet",
  props: ["base"],

  data: function () {
    return {
      apiUrl: "https://strapi.boykin.dev/",
      records: {},
    };
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      axios({
        url: this.apiUrl + this.base,
        //headers: {
        //  Authorization: `Bearer ${this.apiKey}`,
        //},
      }).then((res) => {
        console.log(res.data);
        this.records = res.data;
      });
    },
  },
};
</script>



// USAGE:
/*
    <StrapiSnippet
    base="appClGpIxjPNEgYDu"
    table="content-snippets"
    alias="about"
    />

*/