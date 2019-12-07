import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Dashboard,
        },
        {
            path:'/buttons',
            component: Buttons,
        }
    ],
});

export default router;