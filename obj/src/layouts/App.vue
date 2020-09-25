<template>
	<div id="app">
		<my-loading v-show="$store.state.bLoading"></my-loading>
		<my-header v-show="bNav" />
		<router-view />
		<MyFooter v-show="bFoot" />
	</div>
</template>

<script>
	import MyHeader from './Header.vue'
	import MyFooter from './Footer.vue'
	import MyLoading from '../components/my-loading/my-loading.vue'
	import { mapState } from 'vuex'
	import * as types from '../store/types.js'
	export default {
		name: 'App',
		components: {
			MyHeader,
			MyFooter,
			MyLoading
		},
		data() {
			return {}
		},
		watch: {
			$route: {
				handler(newVal) {
					let path = newVal.path;
					if (/home|follow|column|list/.test(path)) {
						this.$store.commit(types.UPDATE_NAV,true);
						this.$store.commit(types.UPDATE_FOOT,true);
					}
					if (/user|find/.test(path)) {
						this.$store.commit(types.UPDATE_NAV,false);
						this.$store.commit(types.UPDATE_FOOT,true);
					}
					if (/login|reg|detail/.test(path)) {
						this.$store.commit(types.UPDATE_NAV,false);
						this.$store.commit(types.UPDATE_FOOT,false);
					}
					if (/follow/.test(path)){
						this.$store.commit(types.UPDATE_LOADING,false);
					}
				},
				immediate: true
			}

		},
		computed:mapState(['bFoot','bNav']),
		methods: {

		},
		mounted() {}
	}
</script>

<style>
</style>
