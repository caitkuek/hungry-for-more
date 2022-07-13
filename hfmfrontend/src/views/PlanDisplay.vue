<template>
  <div class="plans">
      here are the details bitch
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanDisplay",
  data() {
    return {
      plans: [],
    };
  },
  async created() {
    await axios
      .get(`http://localhost:8000/list/${id}`)
      .then((response) => (this.plans = response.data));
      console.log(typeof this.plans.plan_id)
      console.log(this.plans.plan_id)
  },
};
</script>

<style scoped>
.plans {
  max-height: 100%;
}

.plan-img {
  max-width: 150px;
}
</style>
