<template>
  <div class="plans">
    <div :key="plans.plan_id" v-for="plan in plans">
      <img class="plan-img" :src="plan.plan_img" />
      <h3>{{ plan.plan_name }}</h3>
      <h4>${{ plan.price_per_month }}/month</h4>
      <router-link class="link" :to="{ name:'PlanDisplay', params: {id: plan.plan_id} }">More Details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanCard",
  props: {
    plans: Array,
  },
  data() {
    return {
      list: [],
    };
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
