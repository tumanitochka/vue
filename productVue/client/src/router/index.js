import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/product-list',
            name: 'product-list',
            component: () => import('../views/ProductView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import('../views/InfoView.vue')
        },
    ]
})

export default router