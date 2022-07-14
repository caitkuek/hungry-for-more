<template>
    <div class="trendingplans-card">
        <img class="plan-img" :src="plan.plan_img"/>
        <h3 id="plan-name">{{ plan.plan_name }}</h3>
        <h4>estimated cost of ${{ plan.price_per_month }}/month</h4>
    </div>
</template>

<script>
export default {
    name: 'TrendingPlansCard',
    props: {
        plan: Object
    }
}
</script>

<style scoped>
.trendingplans-card {
    max-height: 100%;
}

.plan-img {
    max-width: 150px;
}
</style>