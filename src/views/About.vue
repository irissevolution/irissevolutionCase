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
          image:"https://iso.500px.com/wp-content/uploads/2014/10/2048-51.jpg",
          text: "Culo"
        },
        {
          image:"https://iso.500px.com/wp-content/uploads/2014/10/2048-51.jpg",
          text:"Halo"
        },
        {//   "https://images2.minutemediacdn.com/image/upload/c_crop,h_1613,w_2480,x_0,x_17/v1572194246/shape",
          image:"https://wallpaperstock.net/wallpapers/thumbs1/34549wide.jpg",
          text:"Halso"
        },
        {
          image:"https://iso.500px.com/wp-content/uploads/2014/10/2048-51.jpg",
          text:"Hasgflo"
        }
      ],
    };
  },
  // Property
  methods: {},
};
</script>