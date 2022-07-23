import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import Mural from '../views/Mural.vue';
import Principal from '../views/Principal.vue'

const router: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/principal',
        name: 'Principal',
        component: Principal
    },
    {
        path: '/mural/semestre',
        name: 'MuralSemestre',
        component: Mural
    },
    {
        path: '/mural/curso',
        name: 'MuralCurso',
        component: Mural
    }
];

const routers = createRouter({
    history: createWebHashHistory(),
    routes: router
});

export default routers;