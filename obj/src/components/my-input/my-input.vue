<template>
	<div :class="arrow === 'smallInput' ? 'smallInput' : 'default'">
		<input :type="type" :value="value" :style="{'padding-left':label?'1.24rem':'.24rem','color':color}" :placeholder=placehold @input="$emit('input',$event.target.value)">
		<span v-if="label">{{label}}</span>
	</div>
</template>

<script>
	export default{
		name:'my-input',
		props:{
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:''
			},
			label:{
				type:String,
				default:''
			},
			arrow:{
				type:String,
				default:'default'
			},
			color:{
				type:String,
				default:''
			},
			placehold:{
				type:String,
				default:''
			}
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.default {
	  border-bottom:1px solid #e5e7e8;
	  position: relative;
	  height: 0.95rem;
	}
	.default input{
	  padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;
	}
	.default span{
	  width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;
	}
	
	
	.smallInput {
	  /* border-bottom:1px solid #e5e7e8; */
	  position: relative;
	  height: 0.5rem;
	  
	}
	.smallInput input{
	  padding-left:1.24rem;width:3.8rem;height:100%; font-size:0.2rem;border-radius: 20px;background: #bec2c2;
	}
	.smallInput span{
	  width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;
	}
</style>
