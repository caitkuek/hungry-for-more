<template>
  <div class="home">
    <img id="homeimg" src="https://i.imgur.com/O0lIowh.jpg?1" alt="cover" />
    <h1 id="title">Hungry for More</h1>
    <div>bella, where the hell have you been loca {{ produce.data }} </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  data() {
      return {
          produce: []
      }
  },
    mounted () {
    axios
      .get('http://localhost:8000/produce/')
      .then(response => (this.produce = response))
  }
};
</script>

<style>
.home {
    position: relative;
    text-align: center;
}

#title {
  position: absolute;
  bottom: 50px;
  left: 375px;
}

#homeimg {
  max-width: 60%;
  max-height: auto;
}
</style>
