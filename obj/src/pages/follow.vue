<template>
	<div class="follow">
		<div 
		v-for="(item,index) of list"
		:style="{'color':'#'+(Math.random().toString(16).slice(-6))}"
		:key="index"
		>
		{{item}}
		</div>
	</div>
</template>
<!-- 关注 -->
<script>
	import vm from '../main.js'
	export default{
		data(){
			return{
				list:'这里什么都没有因为我很懒没有写'
			}
		},
		mounted() {
			this.show()
		},
		methods:{
			show(){
				this.list = (this.list).split("")
			}
		}
	}
</script>

<style scoped>
	.follow{
		padding: 1.2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.follow>div{
		font-size: 0.8rem;
	}
</style>
