<template>
  <header>
    <router-link to="/">
      <!-- <img id="logo" src="https://i.imgur.com/iFP0YlT.png" alt="logo" /> -->
      <h3>hungry for more</h3>
    </router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/plans">plans</router-link>
    <router-link to="/login">login</router-link>
    <!-- <div v-if="$route.name === '/login'">
         <router-link to="/login">login</router-link>
        </div>
        <div v-else>
        <router-link :to="{ name:'UserProfile', params: {id: 1} }">profile</router-link>
        </div> -->
    <!-- fetch id from login when username = user.username -->
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "AppHeader",
};
</script>

<style scoped>
#logo {
  max-width: 200px;
}
</style>
