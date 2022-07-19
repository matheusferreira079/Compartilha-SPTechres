import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import ToList from '../views/ToList.vue';

const router: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/toList',
        name: 'ToList',
        component: ToList
    }
];

const routers = createRouter({
    history: createWebHashHistory(),
    routes: router
});

export default routers;