<template>
  <div class="plans">
    {{ this.id }}
    <router-link :to="{ name: 'Plans' }"><button>&lt;</button></router-link>
    <h2>{{ plans.plan_name }}</h2>
    <h3>What you'll receive:</h3>
    <div :key="produce.produce_id" v-for="produce in produce">
      <ul>
        <li>{{ produce.weight }}g of {{ produce.produce_name }}</li>
      </ul>
    </div>
    <button>This is the plan for me! [add to user!!!]</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanDisplay",
  props: {
    id: { type: Number, required: true },
  },
  data() {
    return {
      produce: [],
      plans: [],
    };
  },
  async created() {
    await axios
      .get(`http://localhost:8000/plans/${this.id}`)
      .then((response) => (this.plans = response.data));
    // console.log(this.plans);

    await axios
      .get(`http://localhost:8000/list/${this.id}/`)
      .then((response) => (this.produce = response.data));
    // console.log(this.produce[1].produce_name);
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
