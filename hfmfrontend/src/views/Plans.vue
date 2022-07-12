<template>
<PlanCard :plans="plans" />
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
