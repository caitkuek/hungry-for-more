# Hungry for More

## Overview
Hungry for More is currently a fixed grocery planning app for users who are too busy to plan their meals in advance. It will eventually be an online grocery app utilizing subscription plans with the intention to reduce waste and save cost for users. 

Made because I love groceries and convenience.

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

## Wireframe
My outline will be put here


## WIP
Things I would like to add at my own time and pace (and maybe use MongoDB instead)
- Add plans to user database 
- Create customizable grocery plans
- Potentially add a checkout and an Add to Cart etc. 




