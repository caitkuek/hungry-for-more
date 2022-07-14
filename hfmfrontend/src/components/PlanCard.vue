<template>
  <div class="plans">
    <div :key="plans.plan_id" v-for="plan in plans">
      <div class="left">
      <img class="plan-img" :src="plan.plan_img" />
      </div>
      <div class="right">
      <h3>{{ plan.plan_name }}</h3>
      <h4>estimated cost of ${{ plan.price_per_month }}/month</h4>
      <p>includes: meat, vegetables, fruits and snacks</p>
      <p>purchase every 2-3 weeks</p>
      </div>
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
