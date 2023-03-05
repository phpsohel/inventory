require('./bootstrap');
import { createApp } from 'vue'
// router
import * as  VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
const routes = [
    {
        path: '/',
        component:HomeComponent
    }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})
const app = createApp({});
app.component('home-component',HomeComponent)

app.mount('#app');
