<template>
  <Navbar :logo="logo_src" :alt="alt_src"/>
  <RouterView />
  <Baseboard />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Header/Navbar.vue';
import Baseboard from './components/Footer/Baseboard.vue';
  export default{
    name: 'App',
    components:{
    Navbar,
    Baseboard
},
    data(){
      return{
        logo_src: "/img/SaludLogo.svg",
        alt_src: "Salud Logo"
      }
    }
  }

</script>


<style>
    *{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container{
    max-width: 1076px;
    margin: 0 auto;
  }
</style>
