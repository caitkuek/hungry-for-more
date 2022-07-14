<template>
    <div class="popular-plans">
        <h2>Popular plans</h2>
        <p id="blurb">What are most people are using?</p>
    <div class="trending-plans-container">
        <div :key="plans.plan_id" v-for="plan in plans" class="trending-plans-cards">
            <TrendingPlansCard :plan="plan"/>
        </div>
    </div>
        <router-link to="/plans"><button>Discover the right plan for you!</button></router-link>
    </div>
</template>

<script>
import TrendingPlansCard from "../components/TrendingPlansCard"

export default {
    name: "TrendingPlans",
    props: {
        plans: Array
    },
    components: {
        TrendingPlansCard
    }
}
</script>

<style scoped>
.popular-plans h2 {
    color: #5864A0
}

#blurb {
    color: #2B363D;
}

.trending-plans-container {
  display: grid;
  /* justify-content: center;
  align-content: center; */
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 80%;
  margin: auto;
}

.trending-plans-cards {
  /* background-color: #EDE9DB; */
  color: #2B363D;
  margin-bottom: 10px;
  border: 1px solid #627291;
  border-radius: 10px;
  padding: 1rem;
  min-height: 150px;
  /* max-width: 175px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
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
/* button css from https://getcssscan.com/css-buttons-examples */
</style>