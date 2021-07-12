import { createRouter, createWebHistory  } from "vue-router"

const home = () => import("../views/home/home.vue")
const login = () => import("../views/login/login.vue")

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})