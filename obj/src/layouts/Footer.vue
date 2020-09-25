<template>
	    <div class="my-footer">
			<van-tabbar v-model="active"  class="footer" active-color="#07c160" inactive-color="#6c696c">
			  <van-tabbar-item name="home" to='/home' icon="home-o">首页</van-tabbar-item>
			  <van-tabbar-item name="search" to='/find' icon="search">发现</van-tabbar-item>
			  <van-tabbar-item name="friends" to='/user' icon="friends-o">我的</van-tabbar-item>
			</van-tabbar>
		</div>
</template>

<script>
	import Vue from 'vue';
	import { Tabbar, TabbarItem } from 'vant';
	
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default{
		name:'foot-btn',
		 data() {
		     return {
		       active: 'home',
		     };
		   },
	}
</script>

<style scoped>
	.footer{
		height: 1.2rem;
		background: #1a1a1a;
	}
	.van-tabbar-item--active{
		background: #1a1a1a;
	}
</style>
