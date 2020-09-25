<template>
	<div class="my-login">
		<myNav bgColor="transparent" arrow="gray"/>
		<div class="login-content">
			<h2>注册</h2>
			<my-input label="用户名" color='#aeb6b2' placeholder='用户名' v-model="username"></my-input>
			<my-input label="密 码" type='password' color='#aeb6b2' placeholder='密码' v-model="password" ></my-input>
			<MyButton class="login-button" text="注册" @click="reg"></MyButton>
		</div> 
		
	</div>
	
</template>
<!-- 登录 -->
<script>
	import MyNav from '../components/my-nav/my-nav.vue'
	import MyInput from '../components/my-input/my-input.vue'
	import MyButton from '../components/my-button/my-button.vue'
	export default{
		name:"my-reg",
		components:{
			MyNav,MyInput,MyButton
		},
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			reg(){
			        this.$axios({
			          url:'/api/reg',
			          method:'post',
			          data:{
			            username:this.username,
			            password:this.password
			          }
			        }).then(
			          res => {
			            if(res.data.err===0){
			              //种local  跳转到之前
			              this.$router.push('/login')
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
	.login-content .login-button{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%);
	}
</style>
