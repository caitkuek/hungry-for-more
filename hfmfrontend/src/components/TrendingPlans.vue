<template>
    <div class="yo">
        <h2>Most popular plans</h2>
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
.yo h2 {
    text-decoration: underline;
}

.trending-plans-container {
    color: blueviolet;
    display: flex;
}

.trending-plans-cards {
    display: flex;
    justify-content: center;
    margin: 0 auto;

}
</style>