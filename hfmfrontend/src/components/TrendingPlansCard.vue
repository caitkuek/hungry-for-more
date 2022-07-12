<template>
    <div class="trendingplans-card">
        <h3>{{ plan.plan_name }}</h3>
        <h4>${{ plan.price_per_month }}/month</h4>
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