<template>
	<div v-if="detail.detail">
		<MyNav arrow="gray" bgColor="#1a1a1a"/>
		<div class="content" >
			<h2>{{detail.title}}</h2>
			<router-link to="" tag="span"><a href="javascript:;">知乎·{{detail.commentNum|wan}}万个回答</a></router-link>
			<ul>
				<router-link to="" tag="li"><a href="javascript:;">邀请回答</a></router-link>
				<router-link to="" tag="li"><a href="javascript:;">写回答</a></router-link>
			</ul>
			<div class="authC">
				<img :src="detail.detail.auth_icon"/>
				<p>{{detail.detail.auth}}</p>
			</div>
			<div class="cont">
			    <h3 v-show="detail.sub_title">{{detail.sub_title}}</h3>
			    <div class="time" v-show="detail.time"><p>{{detail.time|date}}</p></div>
			    <div class="text-box" v-html="detail.detail.content"></div>
			</div>
			<MyToolBar/>
		</div>
	</div>
	<frame-screen type="list" v-else></frame-screen>
</template>


<script>
	import MyNav from '../components/my-nav/my-nav.vue'
	import MyToolBar from '../components/my-toolbar/my-toolbar.vue'
	import FrameScreen from '../components/frame-screen/frame-screen.vue'
	import {mapActions,mapState} from 'vuex'
	import { UPDATE_DETAIL,CLEAR_DETAIL } from '../store/types.js'
	export default{
		components:{
			MyNav,MyToolBar,FrameScreen
		},
		computed:mapState(['detail']),
		mounted(){
			let collectionName = this.$route.query.collectionName; 
			let _id = this.$route.params._id;
			this[UPDATE_DETAIL]({collectionName:collectionName,_id:_id})
		},
		methods:mapActions([UPDATE_DETAIL]),
		destroyed(){
			this.$store.commit(CLEAR_DETAIL)
		}
	}
</script>

<style scoped>
	.content{
		padding: 1rem 0.2rem;
		padding-top: 0.6rem;
		background: #1a1a1a;
	}
	.content h2{
		padding: 0.4rem 0;
		color: #FFFFFF;
	}
	.content ul{
		border-top: 1px solid #4C4F50;
		padding: 0.15rem 0;
		display: flex;
		justify-content: space-around;
	}
	.content ul li a{
		color:aqua;
	}
	.content .authC{
		display: flex;
		align-items: center;
	}
	.content .authC img{
		width: 0.65rem;
		height: auto;
		border-radius: 30px;
	}
	.content .authC p{
		margin-left: 0.1rem;
		color: #FFFFFF;
	}
	.content .cont{ padding:0 0.38rem; color:#494d4d;}
	  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-top: 0.25rem;padding-bottom:0.25rem; border-bottom:1px solid #494d4d;color: #FFFFFF;}
	  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
	  .time p{ float:left;position:relative;color: #FFFFFF;}
	  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;color: #FFFFFF;}
	  .time span img{width:100%;height:100%;}
	  
	  .cont .text-box{ font-size:0.25rem;color: #FFFFFF;}
	  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;color: #FFFFFF;}
</style>
