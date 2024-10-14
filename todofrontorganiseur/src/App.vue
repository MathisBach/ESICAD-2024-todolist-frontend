<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <img alt="vue logo" src="../assets/"
 
   <nav>
    <RouterLink to="/">Home</RouterLink>
    <routeur-link to="/about" >About</routeur-link>
    <RouterLink to="/"> </RouterLink>
   </nav>
  <RouterView />
 
</template>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

</style>

nav {
  padding: 30px;
}

