<template>
<div class="plans"> 
  <img id="homeimg" src="https://i.imgur.com/lh1ZBbB.jpg" alt="cover" />
<h2>All Plans</h2>
<PlanCard :plans="plans" />
</div>
</template>

<script>
import axios from 'axios';
import PlanCard from '../components/PlanCard'

export default {
  name: 'Plans',
  components: {
      PlanCard
  },
  data() {
    return {
      plans: [],
    };
  },
    async created() {
      await axios
        .get("http://localhost:8000/plans")
        .then((response) => (this.plans = response.data));
    },
};
</script>

<style scoped>
.plans {
  padding-top: 10px;
}

h2 {
  position: absolute;
  bottom: 250px;
  left: 23rem;
}
</style>
