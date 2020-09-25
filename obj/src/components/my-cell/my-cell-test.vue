<template>
  <div id="app">
	  <h3>测试cell</h3>
	  <MyCell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"/>
	  <my-cell :data="{_id:3,title:'xxx',des:'oo'}"></my-cell>
	  <my-cell :data="{_id:3,title:'xxx',des:'oo'}" isAdd @add-item="show"></my-cell>
	  <my-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></my-cell>
  </div>
</template>

<script>
import MyCell from '../components/my-cell/my-cell.vue'

export default {
  name: 'App',
  components: {
    MyCell
  },
  data(){
	  return{
	  }
  },
  methods:{
	  show(ev){
		  console.log(ev);
	  }
  }
}
</script>

<style>
</style>
