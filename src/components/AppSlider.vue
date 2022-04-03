<template>
  <div class="slider" ref="slider">
      <div class="slider_controls">
          <a v-on:click="moveSlider(n)"  v-for="n in slides.length" :key="n" class="slider_controls_link">{{ n }}</a>
      </div>
    <div v-for="(slide,index) in slides" :key="index"
    :style="`background-image:url(${slide.image})`" class="slider_content">
        {{ slide.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',
  mounted(){
      this.slider=this.$refs.slider;
      this.height=this.slider.offsetHeight;
  },
  props: {
      slides: {
          type: Array,
          required: true, 
      }
  },
  data() {
      return{
          slider: null,
          height: null,
      };
  },

  methods: {
      moveSlider(n){
          n=n-1;
          this.slider.scrollTo({
              top: this.height*n,
              behavior: 'smooth'
          })
      }
  }
}
</script>