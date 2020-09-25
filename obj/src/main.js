import Vue from 'vue'
import App from './layouts/App.vue'


Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/js/font.js'


//引入路由配置
import router from './plugins/router.js'

//引入拦截器
import './plugins/axios';

//引入全局过滤器
import './filters';

import store from './plugins/vuex.js'
import { UPDATE_USER } from './store/types'

//强刷同步动作
let local = window.localStorage.getItem('user')
if (local) {
    store.commit(UPDATE_USER, JSON.parse(local))
}

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')