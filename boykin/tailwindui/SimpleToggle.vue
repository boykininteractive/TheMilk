<template>
  <div>
    <!--
    Simple toggle
    On: "bg-primary-600", Off: "bg-gray-200"
    -->
    <span
      role="checkbox"
      tabindex="0"
      aria-checked="false"
      @click="toggle"
      :class="isOn ? 'bg-primary-600' : 'bg-gray-200'"
      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
    >
      <!-- On: "translate-x-5", Off: "translate-x-0" -->
      <span
        aria-hidden="true"
        :class="isOn ? 'translate-x-5' : 'translate-x-0'"
        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
      ></span>
    </span>
  </div>
</template>

<script>
export default {
  //props: { isOn: { type: Boolean, default: false, required: false } },
  data: function () {
    return {
      isOn: false,
    };
  },
  methods: {
    toggle() {
      this.isOn = !this.isOn;
      this.$emit("toggleChanged", this.isOn);
    },
  },
};
</script>

<style>
</style>