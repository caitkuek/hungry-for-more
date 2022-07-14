<template>
  <div class="plans">
    <!-- {{ this.id }} -->
    <router-link :to="{ name: 'Plans' }"><button>&lt;</button></router-link>
    <div class="plan-detail-header">
    <img class="plan-img" :src="plans.plan_img" />
    <h2>{{ plans.plan_name }}</h2>
    </div>
    <h3>What you'll receive:</h3>
    <div :key="produce.produce_id" v-for="produce in produce">
      <ul>
        <li>{{ produce.weight }}g of {{ produce.produce_name }}</li>
      </ul>
    </div>
    <!-- <AddPlan :plans="plans" /> -->
  </div>
</template>

<script>
import axios from "axios";
import AddPlan from "../components/AddPlan"

export default {
  name: "PlanDisplay",
  props: {
    id: { type: Number, required: true },
  },
  components: {
    AddPlan
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
