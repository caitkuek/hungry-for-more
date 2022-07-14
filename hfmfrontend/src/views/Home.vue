<template>
  <div class="home">
      <div class="home-header">
        <img id="homeimg" src="https://i.imgur.com/lh1ZBbB.jpg" alt="cover" />
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
.home {
  padding-top: 10px;
}

.home-header {
    position: relative;
    text-align: center;
}

#title {
  position: absolute;
  bottom: 40px;
  left: 23rem;
}

#homeimg {
  max-width: 60%;
  max-height: auto;
}
</style>
