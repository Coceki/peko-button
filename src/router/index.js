import Vue from 'vue'
import VueRouter from 'vue-router'
import MainUI from '../components/Main.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: MainUI,
    meta: {
        title: "Peko按钮",
    },
}, ]

const router = new VueRouter({
    routes
})

export default router