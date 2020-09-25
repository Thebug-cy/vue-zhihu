<template>
  <div id="app">
	  <h3>测试按钮</h3>
	<MyButton/>
	<MyButton bgColor="#399"/>
	<my-button text="点 击"/>
	<myButton @sub="subBtn">提 交</myButton>
  </div>
</template>

<script>
import MyButton from './../components/my-button/my-button.vue'

export default {
  name: 'App',
  components: {
    MyButton
  },
  methods:{
	  subBtn(ev){
		  console.log(ev);
	  }
  }
}
</script>

<style>
</style>
