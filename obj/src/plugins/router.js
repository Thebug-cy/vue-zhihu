import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from '../pages/home.vue'
import Detail from '../pages/detail.vue'
import Column from '../pages/column.vue'
import Follow from '../pages/follow.vue'
import Find from '../pages/find.vue'
import List from '../pages/list.vue'
import Reg from '../pages/reg.vue'
import Login from '../pages/login.vue'
import User from '../pages/user.vue'
import NoPage from '../pages/no-page.vue'
let routes = [
	{path:'/home',component:Home,},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/column',component:Column},
	{path:'/follow',component:Follow},
	{path:'/find',component:Find},
	{path:'/list',component:List},
	{path:'/reg',component:Reg},
	{path:'/login',component:Login},
	{path:'/user',component:User},
	{path:'/',redirect:'/home',},
	{path:'*',component:NoPage}
];

let router = new VueRouter({
	routes
});

export default router;