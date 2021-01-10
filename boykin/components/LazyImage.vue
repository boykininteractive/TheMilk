<template>
  <picture>
    <source
        :data-srcset="
        'https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_1280/' + src + '   1280w,' +
        'https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_1024/' + src + '   1024w,' +
        'https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_768/' + src + '   768w,' +
        'https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_640/' + src + '   640w,' +
        'https://res.cloudinary.com/boykinllc/image/upload/f_auto,q_70,w_375/' + src + '   375w,'
        "/>
    <img
      src="https://placehold.co/600x400/white/gray?text=Loading"
      :alt="$attrs.alt || ''"
      class="lazyload"
      v-bind="$attrs"
    />
  </picture>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: String,
    background: String,
  },

  computed: {
    dataUrl() {
      const { width, height } = this.$attrs;
      if (!width || !height) return "";

      // create a tiny png with matching aspect ratio as img
      const w = 100;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = (height / width) * w;

      return canvas.toDataURL();
    },
  },
};
</script>

<style>
.app-img {
  display: inline-block;
  position: relative;
}

.app-img__placeholder {
  position: absolute;
  overflow: hidden;
}

.app-img__placeholder img {
  transform: scale(1.05);
  filter: blur(10px);
}

.app-img__img {
  opacity: 0;
  transition: opacity 300ms ease;
}

.app-img--loaded .app-img__img {
  opacity: 1;
}
</style>