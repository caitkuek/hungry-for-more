<template>
  <div>
      <div class="home-header">
        <img id="homeimg" src="https://i.imgur.com/O0lIowh.jpg?1" alt="cover" />
         <h1 id="title">Hungry for More</h1>
      </div>
    <TrendingPlans :plans="plans" /> 
  </div>
</template>

<script>
import axios from 'axios';
import TrendingPlans from '../components/TrendingPlans'

export default {
  name: "Home",
  components: {
      TrendingPlans,
  },
  // data to be used on Home
  data() {
      return {
          plans: []
      }
  },
  // using axios to fetch data hehe
    async created () {
    await axios
      .get('http://localhost:8000/plans/')
      .then(response => (this.plans = response.data))
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
  left: 32rem;
}

#homeimg {
  max-width: 50%;
  max-height: auto;
}
</style>
