<template>
	<div class="my-cell">
		<div @click="toDetail" class="cell-content">
			<h2><span v-show="index !=null">{{index+1}}.</span>{{data.title}}</h2>
			<div>
				<img :src="data.detail.auth_icon">
				<span>{{data.detail.auth}}</span>
			</div>
			<p>{{data.des}}</p>
			<ul>
				<li>{{data.agreeNum|wan}} 万赞同·</li>
				<li>{{data.commentNum|wan}} 万评论</li>
			</ul>
			<a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"my-cell",
		props:{
			data:{
				type:Object,
				required:true
			},
			collectionName:{
				type:String,
				default:null
			},
			index:{
				type:Number,
				default:null
			},
			isAdd:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			toDetail(){
				if(this.collectionName){
					this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
					
				}
			}
		}
	}
</script>

<style>
	.my-cell{position: relative;}
	.my-cell:active {background: #ccc;}
	.my-cell .cell-content { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
	.my-cell .cell-content h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;color: #e7edf3;}
	.my-cell .cell-content>div{
		display: flex;
		align-items: center;
		padding: 0.1rem 0;
	}
	.my-cell .cell-content>div>img{
		width: 0.4rem;
		height: auto;
		border-radius: 50px;
	}
	.my-cell .cell-content>div>span{
		margin-left: 0.2rem;
		color: #9a7fff!important;
	}
	.my-cell .cell-content p{color: #dfe4e4;max-height:1.8rem; margin-top:0.05rem;overflow:hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;font-size: 0.25rem;}
	.my-cell .cell-content>ul{
		padding-top: 0.1rem;
		display: flex;
	}
	.my-cell .cell-content>ul>li{
		color: #dfe4e4;
	}
	.cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
	
</style>
