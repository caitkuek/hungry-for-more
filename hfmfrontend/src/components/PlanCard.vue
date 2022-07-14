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
      <router-link :to="{ name:'PlanDisplay', params: {id: plan.plan_id} }"><button>More Details</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Button from './Button.vue';

export default {
  // components: { Button },
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

button {
  align-items: center;
  background-clip: padding-box;
  background-color: #5864A0;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  background-color: #6871a1;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #5864A0;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
  text-decoration: none;
}

a {
    text-decoration: none;
}
</style>
