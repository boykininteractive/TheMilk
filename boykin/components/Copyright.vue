<template>
  <div class="boykin-copyright">Copyright &copy; {{ new Date().getFullYear() }}, {{ myClient }}</div>
</template>


<script>
import pkg from "@/package";

export default {
  data: function() {
    return {
      myClient: pkg.client
    };
  }
};
</script>
