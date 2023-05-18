import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import VueRouter from 'vue-router'
import router from '@/router'

import { NavBar, Tabbar, TabbarItem, Row, Col, Image as VanImage, Cell,CellGroup, Icon, Search  } from 'vant';

Vue.config.productionTip = false,
Vue.use(VueRouter)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Row)
Vue.use(Col)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
