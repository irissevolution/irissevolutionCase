<template>
  <AppSlider :slides="slides"/>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";

export default {
  components: {
    AppSlider,
  },
  data() {
    return {
      slides: [
        {
          image:"@/assets/onepunchman.jpg",
        },
        {
          image:"https://iso.500px.com/wp-content/uploads/2014/10/2048-51.jpg",
        },
        {
          image:"https://wallpaperstock.net/wallpapers/thumbs1/34549wide.jpg",
        },
        {
          image:"https://iso.500px.com/wp-content/uploads/2014/10/2048-51.jpg",
        }
      ],
    };
  },
  // Property
  methods: {},
};
</script>