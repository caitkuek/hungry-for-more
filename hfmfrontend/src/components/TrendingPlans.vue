<template>
    <div class="trending-plans-container">
        <h2>Most popular plans</h2>
        <div :key="plans.plan_id" v-for="plan in plans">
            <TrendingPlansCard :plan="plan"/>
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