import Vue from 'vue'
import VueRouter from 'vue-router'
import Splash from '@/components/Splash'
import Calculator from '@/components/Calculator'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Splash',
            component: Splash
        },
        {
            path: '/calculator',
            name: 'Calculator',
            component: Calculator
        }
    ]
})