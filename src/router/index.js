import VueRouter from "vue-router";
import Layout from "@/views/Layout"
import Home from "@/views/Home"
import Search from "@/views/Search"
import Play from "@/views/Play"

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/layout",
        },
        {
            path: "/layout",
            component: Layout,
            redirect: "/layout/home",
            children: [
                {
                    path: 'home',
                    component: Home,
                    meta: { // meta保存路由对象额外信息的
                        title: "首页"
                    }
                },
                {
                    path: 'search',
                    component: Search,
                    meta: {
                        title: "搜索"
                    }
                }
            ]
        },
        {
            path: '/play',
            component: Play
        }
    ]
})