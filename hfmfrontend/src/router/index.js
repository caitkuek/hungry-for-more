import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home"
import Login from "../views/Login"
import Signup from "../views/Signup"
import Plans from "../views/Plans"
import About from "../views/About"
import UserProfile from "../views/UserProfile"
import PlanDisplay from "../views/PlanDisplay"

// route creation
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/plans',
        name: 'Plans',
        component: Plans
    },
    {
        path: '/plans/:id',
        name: 'PlanDisplay',
        component: PlanDisplay,
        props: (route) => ({ id: parseInt(route.params.id) }),
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user/:id',
        name: 'UserProfile',
        component: UserProfile,
        props: (route) => ({ id: parseInt(route.params.id) }), // parseInt to make number
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;