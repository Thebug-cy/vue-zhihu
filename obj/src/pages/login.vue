<template>
	<div class="my-login">
		<myNav bgColor="transparent" arrow="gray"/>
		<div class="login-content">
			<h2>密码登录</h2>
			<my-input label="用户名" color='#aeb6b2' placeholder='用户名' v-model="username"></my-input>
			<my-input label="密 码" type='password' color='#aeb6b2' placeholder='密码' v-model="password" ></my-input>
			<div>
				<p v-show="mess">{{mess}}</p>
				<router-link to="/reg" tag="span">注册账号</router-link>
			</div>
			<MyButton class="login-button" text="登录" @click="login"></MyButton>
		</div> 
		
	</div>
	
</template>
<!-- 登录 -->
<script>
	import MyNav from '../components/my-nav/my-nav.vue'
	import MyInput from '../components/my-input/my-input.vue'
	import MyButton from '../components/my-button/my-button.vue'
	import {UPDATE_USER} from '../store/types'
	export default{
		name:"my-login",
		components:{
			MyNav,MyInput,MyButton
		},
		data(){
			return{
				username:'alex',
				password:'alex123',
				mess:''
			}
		},
		methods:{
			login(){
				this.$axios({
					url:'/api/login',
					method:'post',
					data:{
						username:this.username,
						password:this.password,
					}
				}).then(
				res=>{
					console.log(res.data)
					if(res.data.err===0){
						window.localStorage.setItem('user',JSON.stringify(res.data));
						this.$store.commit('UPDATE_USER',res.data)
						// console.log(this.$router);
						if(!this.$route.query.p){
							this.$router.push('/user')
						}else{
							this.$router.push(this.$route.query.p)
						}
					}else{
						this.mess = res.data.msg
					}
				}
				)
				
			}
		}
	}
</script>

<style scoped>
	.login-content{
		padding: 0 0.7rem;
		padding-top: 0.75rem;
	}
	.login-content h2{
		padding: 0.6rem 0;
		font-size: 0.4rem;
		color: #aeb6b2;
	}
	.login-content>div>p{
		margin-top: 0.26rem;
		float: left;
		color: #b10805;
	}
	.login-content span{
		margin-top: 0.26rem;
		color: #aeb6b2;
		float: right;
	}
	.login-content .login-button{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%);
	}
</style>
