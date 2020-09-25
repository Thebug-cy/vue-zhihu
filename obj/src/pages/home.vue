<template>
	<div class="home">
		<myBanner 
		:data="$store.state.banner"
		collectionName="banner"
		/>
		<my-cell 
		v-for="(item,index) of $store.state.list" 
		:data="item" 
		:key="index"
		collectionName="home" 
		style="padding: 0 0.3rem;"
		class="mycell"
		/>
	</div>
</template>

<script>
	import MyBanner from '../components/my-banner/my-banner.vue'
	import MyCell from '../components/my-cell/my-cell.vue'
	import {UPDATE_BANNER,UPDATE_HOME} from '../store/types'
	import {mapState} from 'vuex'
	export default{
		name:'home',
		components:{
			MyBanner,MyCell
		},
		computed:{
			...mapState(['list','banner'])
		},
		methods:{
		},
		mounted() {
			// this.$axios({
			// 	url:'/api/home',
			// 	params:{_limit:20,page:1}
			// }).then(
			// res=>this.list=res.data.data
			// )
			
			// this.$axios({
			// 	url:'/api/banner',
			// 	params:{_limit:5,page:1}
			// }).then(
			// res=>this.banner = res.data.data
			// )
			
			// this.$axios.all([
			//   this.$axios({url:'/api/home',params:{_limit:20,page:1}}), 
			//   this.$axios({url:'/api/banner'})
			// ]).then(this.$axios.spread((home, banner)=>{
			//    this.list=home.data.data;
			//    this.banner=banner.data.data;
			// }))

			this.$store.dispatch(UPDATE_BANNER)
			this.$store.dispatch(UPDATE_HOME)
		},
		updated() {
			// console.log('更新')
		}
	}
</script>

<style scoped>
	.home{
		padding: 1.2rem 0;
	}
</style>
