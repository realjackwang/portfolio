import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import VueNavigationBar from 'vue-navigation-bar'
import VTooltip from 'v-tooltip'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Home from './views/Home.vue'
import About from './views/About.vue'
import Subscribe from './views/Subscribe.vue'
import Cool from './views/Cool.vue'
import CoolGame from './views/Cool-Game.vue'
import CoolCode from './views/Cool-Code.vue'
import CoolTool from './views/Cool-Tool.vue'
import CoolBook from './views/Cool-Book.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(VTooltip)
Vue.use(Element)
Vue.component("vue-navigation-bar", VueNavigationBar)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/subscribe', component: Subscribe },
    { path: '/cool', component: Cool},
    { path: '/cool-game', component: CoolGame},
    { path: '/cool-code', component: CoolCode},
    { path: '/cool-tool', component: CoolTool},
    { path: '/cool-book', component: CoolBook}
  ]
})

Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
