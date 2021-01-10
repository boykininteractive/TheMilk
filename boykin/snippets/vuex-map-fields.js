// Install
// https://www.npmjs.com/package/vuex-map-fields
// npm install --save vuex-map-fields

// STORE / index.js
import { getField, updateField } from "vuex-map-fields";

export const state = {};

export const mutations = {
  updateField,
};

export const getters = {
  getField,
};

// USE IN COMPONENT
<template>
    <div id="app">
        <div class="row" v-for="address in addresses">
            <div class="form-element">
                <label>
                    ZIP:
          <input v-model="address.zip" />
                </label>
            </div>
            <div class="form-element">
                <label>
                    Town:
          <input v-model="address.town" />
                </label>
            </div>
            <div class="form-element">
                <label>
                    Street:
          <input v-model="address.street" />
                </label>
            </div>
        </div>
  </div>
</template >
<script>
    import {mapMutations} from "vuex";
    import {mapMultiRowFields} from "vuex-map-fields";

    export default {
        computed: {
        // The `mapMultiRowFields()` function of
        // the vuex-map-fields package, makes it
        // possible to dynamically map the fields
        // of multiple rows of data, to Vuex conform
        // getter and setter functions.
        ...mapMultiRowFields(["addresses"])
    },
    methods: {
        // We're using the native Vuex function
        // `mapMutations()` to map our mutation
        // for adding a new address row, to a
        // method with the same name as the mutation.
        ...mapMutations(["addAddressRow"])
    }
};
</script>