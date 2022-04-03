<template>
    <div class="slider" ref="slider">
        <div class="slider_controls">
            <a v-on:click="moveSlider(n)"  v-for="n in slides.length" :key="n" class="slider_controls_link">{{ n }}</a>
        </div>
        <div v-for="(slide,index) in slides" :key="index" :style="`background-image:url(${slide.image})`" class="slider_content">
            <!-- {{ slide.text }} -->
            <div v-if="index===0" >
                <div class="container2 flex flex-wrap justify-center items-center">
                        <div class="grid grid-cols-4 grid-rows-2 gap-4 w-46 p-2 flex items-center ">
                        <div class=" text-white p-2 w-52">Nos enfocamos en el desarrollo de software,
                            hemos rabajado con gran
                            variedad de empresas de
                            diversas ramas en el 
                            mundo de los negocios
                        </div>
                        <div class="text-pink-700  w-52">
                            <img class="w-40 m-auto " src="@/assets/onepunchman.jpg" >
                            hemos rabajado con gran
                            variedad de empresas de
                            diversas ramas en el 
                            mundo de los negocios
                        </div>
                        <div class=" px-0 row-span-2 col-span-2 text-white w-96 m-auto">
                            <div>
                                <img class="h-72 m-auto mb-5" src="@/assets/lavame.jpeg" >
                            </div>
                            <a class=" px-5 font-bold" href="https://irissevolution.github.io/lavamemucho/index2.html" target="_blank">
                                Lávame mucho lavanderías (click aquí)
                            </a>
                            <div class=" px-5 py-5 pr-7">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et 
                                soluta praesentium enim error ipsa obcaecati qui quaerat,
                                omnis est animi amet atque dicta nobis quia facilis! Numquam 
                                harum facere rerum?
                            </div>
                            <div class="flex  justify-around text-red-700">
                                <div class="bg-blue-200 rounded-full w-28 text-center">
                                    #Photography
                                </div>
                                <div class="bg-blue-200 rounded-full w-20 text-center">
                                    #travel
                                </div>
                                <div class="bg-blue-200 rounded-full w-20 text-center">
                                    #winter
                                </div>
                            </div> 
                        </div>
                        <div class="bg-blue-400">A</div>
                        <div class="bg-blue-400">A</div>
                    </div>
                </div>
            </div>
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