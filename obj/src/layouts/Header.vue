<template>
	<div class="my-header">
		<div class="header-search">
			<img src="../assets/img/hy.gif" style="width: 0.3rem;height: 0.3rem;padding-left: 0.2rem;">
			<MyInput arrow="smallInput" placehold='请输入'/>
			<div style="width: 0.2rem;height: 0.2rem;" @click="submit"></div>
		</div>
		<ul>
			<router-link to="/follow" tag="li" active-class="active"><a href="javascript:;" >关注</a></router-link>
			<router-link to="/home" tag="li" active-class="active"><a href="javascript:;" >推荐</a></router-link>
			<router-link to="/column" tag="li" active-class="active"><a href="javascript:;" >热榜</a></router-link>
			<!-- <router-link to="eqer" tag="li" active-class="active"><a href="javascript:;" >圈子</a></router-link> -->
		</ul>
	</div>
</template>

<script>
	import MyInput from '../components/my-input/my-input.vue';
	export default{
		name:'my-header',
		components:{
			MyInput
		},
		methods:{
			submit(){
				this.$router.push('/list');
			}
		}
	}
</script>

<style scoped>
	.my-header{
		background: #1a1a1a;
		height: 1.2rem;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.my-header .header-search{
		padding: 0.1rem 0.2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.my-header .header-search img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.my-header ul{
		display: flex;
	}
	.my-header ul li a{
		padding-left: 0.5rem;
		font-size: 0.25rem;
	}
	.my-header ul li.active a{
		font-size: 0.3rem;
	}
</style>
