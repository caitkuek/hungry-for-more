# Hungry for More

## Overview
Hungry for More is currently a fixed grocery planning app for users who are too busy to plan their meals in advance. It will eventually be an online grocery app utilizing subscription plans with the intention to reduce waste and save cost for users. 

### Tools and technologies used
- PostgreSQL 
- Express
- Node.js
- Vue
- Prisma
- Axios

### App structure
Frontend (Vue)
```
├── App.vue
├── assets
│   └── logo.png
├── components
│   ├── AddPlan.vue
│   ├── AppHeader.vue
│   ├── Delete.vue
│   ├── DeleteButton.vue
│   ├── EditAddress.vue
│   ├── PlanCard.vue
│   ├── TrendingPlans.vue
│   └── TrendingPlansCard.vue
├── main.js
├── router
│   └── index.js
└── views
    ├── About.vue
    ├── Home.vue
    ├── Login.vue
    ├── PlanDisplay.vue
    ├── Plans.vue
    ├── Signup.vue
    └── UserProfile.vue
```

Prisma
```
├── migrations
│   ├── 20220708065910_introspected_change
│   │   └── migration.sql
│   ├── 20220710141853_introspected_change
│   │   └── migration.sql
│   └── migration_lock.toml
├── schema.prisma
└── seed.js
```


## WIP
WIP
- Add plans to user database 
- Create customizable grocery plans
- Potentially add a checkout and an Add to Cart etc. 
- Login authentication using JWT/auth0




