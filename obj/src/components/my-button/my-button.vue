<template>
	<div class="my-button">
		<button class="btn" :style="{background:bgColor}" @click="$emit('click',$event)">
			<template v-if="text !== '确 定'">
				{{text}}
			</template>
			<slot v-if="text === '确 定'">确 定</slot>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'my-button',
		props:{
			bgColor:{
				type:String,
				default:'gray'
			},
			text:{
				type:String,
				default:'确 定'
			}
			
		}
	}
</script>

<style scoped>
	.btn {
		width: 4.65rem;
		height: 0.65rem;
		background: #4c4f50;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		/* margin-top: 0.62rem; */
		font-size: 0.28rem;
		border: none;
		outline: none;
	}
</style>
