<template>
	<div class="column">
		<router-link 
		class="column-content" 
		v-for="(item,index) of $store.state.column" 
		:key="index"
		tag="div"
		:to="{name:'detail',params:{_id:item._id},query:{collectionName:'column'}}"
		>
			<div class="columnIndex">
				<span>{{index+1}}</span>
			</div>
			<div class="columnDes">
				<p>{{item.title}}</p>
				<span>{{item.commentNum|wan}}万热度</span>
			</div>
			<div class="columnImg">
				<img :src="item.img">
			</div>
		</router-link>


	</div>

</template>

<script>
	import * as types from '../store/types'
	export default {
		mounted() {
			this.$store.dispatch(types.UPDATE_COLUMN)
		},
	}
</script>

<style scoped>
	.column {
		padding: 1.2rem 0;
	}

	.column-content {
		padding: 0.25rem 0;
		border-bottom: 1px solid #C7CBCB;
		/* background: #fff; */
		display: flex;
		justify-content: space-evenly;
	}

	.column-content .columnIndex span {
		display: block;
		text-align: center;
		font-size: 0.3rem;
		font-weight: 900;
		color: #c7cbcb;
		width: 0.5rem;
	}

	.column-content .columnDes {
		width: 3rem;
	}

	.column-content .columnDes p {
		color: #c7cbcb;
		font-size: 0.3rem;
	}

	.column-content .columnDes span {
		display: block;
		color: #c7cbcb;
		margin-top: 0.2rem;
	}

	.column-content .columnImg {
		width: 1.6rem;
	}
</style>
