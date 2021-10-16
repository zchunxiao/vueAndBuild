import Vue from "vue"
import VueRouter from "vue-router"
// import home from '@/views/home'
// import page1 from '@/views/page1'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    base: process.env.NODE_ENV == "development"?"/":"/test/",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            // component:home,
            component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
            meta: {
                title: "首页",
                isAuth: false,
                isLogin: false
            },
        },
        {
            path: "/page1",
            name: "page1",
            component: () => import(/* webpackChunkName: "page1" */ "@/views/page1"),
            meta: {
                title: "页面1",
                isAuth: false,
                isLogin: false
            },
        },
        {
            path: "/page2",
            name: "page2",
            component: () => import(/* webpackChunkName: "page2" */ "@/views/page2"),
            meta: {
                title: "页面2",
                isAuth: false,
                isLogin: false
            },
        }
    ]
})


router.beforeEach((to, _, next) => {
    // 登陆鉴权处理
    document.title = to.meta.title;
    next();
})


export default router;