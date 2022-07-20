import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import Mural from '../views/Mural.vue';

const router: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/mural',
        name: 'Mural',
        component: Mural
    }
];

const routers = createRouter({
    history: createWebHashHistory(),
    routes: router
});

export default routers;