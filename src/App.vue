<template>
  <div class="container  max-w-full  mx-0 p-0 my-0"><!---->
    <div class="flex justify-around items-center h-20 border-b-2 border-gray-300" id="nav">
      <router-link class="" to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/d_web">Desarrollo Web</router-link> |
      <img class="bg-white py-1" src="@/assets/logo-iris-4.png" >|
      <router-link to="/chatbot">Chatbot</router-link> |
      <router-link to="/robotica">Robótica</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </div>
  <router-view/> <!--Esto permite que se vea en todos lados-->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0773a5;
    }
  }
  a:hover {
  color: orange;
  }
}
</style>
