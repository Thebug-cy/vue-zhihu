<template>
  <div id="app">
	  <h3>测试nav</h3>
	  <!-- <my-nav/> -->
	  <MyNav bgColor="transparent" arrow="gray" :border-width='11'/>
	  <!-- <my-nav/> -->
  </div>
</template>

<script>
import MyNav from '../components/my-nav/my-nav.vue'

export default {
  name: 'App',
  components: {
    MyNav
  },
  data(){
	  return{
	  }
  },
  methods:{
	  
  }
}
</script>

<style>
</style>
