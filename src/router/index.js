import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            progress: {
                func: [
                    { call: 'color', modifier: 'temp', argument: '#ffb000' },
                    { call: 'fail', modifier: 'temp', argument: '#6e0000' },
                    { call: 'location', modifier: 'temp', argument: 'top' },
                    { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 } }
                ]
            }
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/brand',
        name: 'Brand',
        component: () =>
            import ('../views/Brand.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () =>
            import ('../views/Detail.vue')
    },
    // {
    //     path: '/news',
    //     name: 'News',
    //     component: '../views/News.vue',
    // },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router