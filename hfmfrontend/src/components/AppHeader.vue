<template>
  <header>
    <nav>
    <router-link to="/">
      <img id="logo" src="https://i.imgur.com/Kp5ZU9E.png" alt="logo" />
      <!-- <h3>hungry for more</h3> -->
    </router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/plans">plans</router-link>
    <router-link id="login-route" to="/login">login</router-link>
    <!-- <div v-if="$route.name === '/login'">
         <router-link to="/login">login</router-link>
        </div>
        <div v-else>
        <router-link :to="{ name:'UserProfile', params: {id: 1} }">profile</router-link>
        </div> -->
    <!-- fetch id from login when username = user.username -->
    </nav>
    <hr>
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
  max-height: 150px;
  padding: 5px;
  /* margin: 5px 20px 5px 0; */
  display: inline-block;
  vertical-align: middle;
}

nav {
  /* background: grey; */
  max-height: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

nav h3 {
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}

nav a {
  color: #5864ac;
  display: inline-block;
  padding: 20px;
  font-size: 1.2em;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

hr {
  max-width: 85rem;
  /* padding-bottom: 30px; */
}

#login-route {
  display: inline-block;
  position: absolute;
  right: 0;
  padding: 75px;
  /* margin-top: 10px;
  margin-left: 45rem; */
  /* max-height: 30px; */
}
</style>
