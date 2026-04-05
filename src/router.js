import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Advice from './views/Advice.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/advice', name: 'Advice', component: Advice }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;