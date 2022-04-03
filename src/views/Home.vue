<template>
  <div class="text-center">
    <img  alt="Vue logo" src="../assets/logo.png">
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1 class="bg-tahiti-400 text-3xl font-bold underline">
    Hello world, We are IrisEvolution  HDP!
  </h1>
  <button class="py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Save changes
  </button>
  <button class="btn-primary">
  Save changes
  </button>
  <div class="bg-lavamemucho-200"> Hello AtGram, this is TailwindCSS!</div>
  <div class="flex flex-col">
    <div class="py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">01</div>
    <div class="py-2 px-4 bg-blue-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">02</div>
    <div class="py-2 px-4 bg-lavamemucho-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">03</div>
    <div class="py-2 px-4 bg-silver text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">04</div>
    <div class="py-2 px-4 bg-tahiti-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">05</div>
  </div>
    <div class="flex flex-col">
    <div class="py-2 px-4 bg-red-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">01</div>
    <div class="py-2 px-4 bg-blue-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">02</div>
    <div class="py-2 px-4 bg-lavamemucho-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">03</div>
    <div class="py-2 px-4 bg-silver text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">04</div>
    <div class="py-2 px-4 bg-tahiti-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">05</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
