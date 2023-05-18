<template>
	<div>
		<van-nav-bar :title="activeTitle" fixed />
		<div class="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<van-tabbar route>
			<van-tabbar-item icon="home-o" replace to="/layout/home">首页</van-tabbar-item>
			<van-tabbar-item icon="search" replace to="/layout/search">搜索</van-tabbar-item>
		</van-tabbar>

	</div>
</template>

<script>

export default {
	name: 'Layout',
	data() {
		return {
			activeTitle: this.$route.meta.title,
		};
	},
	watch:{
		$route(){
			this.activeTitle = this.$route.meta.title
		}
	}
}
</script>

<style scoped>
.main {
	padding-top: 46px;
	padding-bottom: 50px;
}
</style>