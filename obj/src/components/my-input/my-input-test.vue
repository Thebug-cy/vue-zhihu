<template>
  <div id="app">
	  <h3>测试input框</h3>
	  <MyInput label="账 号" v-model="ipt"/>
	  <MyInput label="密 码" type="password" v-model="ipt2"/>
  </div>
</template>

<script>
import MyInput from '../components/my-input/my-input.vue'

export default {
  name: 'App',
  components: {
    MyInput
  },
  data(){
	  return{
		  ipt:'',
		  ipt2:''
	  }
  },
  methods:{
	  
  }
}
</script>

<style>
</style>
