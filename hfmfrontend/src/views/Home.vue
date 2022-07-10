<template>
  <div>
      <div class="home-header">
        <img id="homeimg" src="https://i.imgur.com/O0lIowh.jpg?1" alt="cover" />
         <h1 id="title">Hungry for More</h1>
      </div>
    <div>
        bella, where the hell have you been loca {{ plans.data }} 
    </div>   
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  // data to be used on Home
  data() {
      return {
          plans: []
      }
  },
  // using axios to fetch data hehe
    mounted () {
    axios
      .get('http://localhost:8000/plans/')
      .then(response => (this.plans = response))
  }
};
</script>

<style>
.home-header {
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
