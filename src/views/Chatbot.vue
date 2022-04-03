<template>
  <div class="bg-red-300 text-black-600 font-mono text-3xl font-bold">Chatbot</div>
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

  <div class="bg-red-300 border border-red-400 text-black-600 font-mono text-3xl font-bold">About</div>
  <button class="slide-fade py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    <router-link to="/">Home</router-link>
  </button>

  <button @click="Changeview" class="slide-fade py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Home with js and vue
  </button>

  <button class="py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" @click="show = !show">
    Mostrar/Ocultar
  </button>
  <transition name="slide-fade">
    <p v-if="show">Holis
    </p>
  </transition>
</template>

<script>
export default {
  name: 'Change', // name:value = key:vale
  components: {
  },
  data () { // Método
    return { // array
      pass: '',
      pass2: '',
      tokenb: ''
    }
  },
  methods: // Property
  {
    // Simulando la vista de ingresar contraseña
    Changeview(){ // Ingresa una ves que fue positiva la respuesta del backend
      console.log('padh', this.$route.path) // Muestra la ruta
      console.log('Parametro', this.$route.params) // Muestra lo que sigue después de la ruta
      // this.tokenb=this.$route.params.token;
    }
  }
}
</script>
