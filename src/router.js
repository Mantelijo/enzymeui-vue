import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";
import Forms from "./views/Forms";
import Typography from "./views/Typography";

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Dashboard,
        },
        {
            path:'/buttons',
            component: Buttons,
        },
        {
            path:'/forms',
            component: Forms,
        },
        {
            path:'/typography',
            component: Typography,
        },
    ],
});

export default router;