<template>
  <div class="plans">
    <!-- {{ this.id }} -->
    <div class="plan-detail-header">
      <h2>{{ plans.plan_name }}</h2>
    <img class="plan-img" :src="plans.plan_img" />
    </div>
    <h3>What's on the list</h3>
    <div :key="produce.produce_id" v-for="produce in produce">
      <ul class="list">
        <li>{{ produce.weight }}g of <span id="name"><strong>{{ produce.produce_name }}</strong></span></li>
      </ul>
    </div>
    <router-link :to="{ name: 'Plans' }"><button class="btn">Go back</button></router-link>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plan-img {
  max-width: 150px;
}

li {
  list-style: none;
}

.list {
  margin-right: 40px;
}

#name {
  color: #5864A0;
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
