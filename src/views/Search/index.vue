<template>
	<div>
		<van-search placeholder="请输入搜索关键词" v-model="searchValue" shape="round" />
		<div class="search_wrap" v-if="resultList.length === 0">
			<p class="hot_title">热门搜索</p>
			<ul class="hot_name_wrap">
				<li class="hot_item" v-for="(hotSearch, index) in hotSearchList" :key="index" @click="btn(hotSearch.first)">
					{{ hotSearch.first }}
				</li>
			</ul>
		</div>
		<div class="search_wrap" v-else>
			<p class="hot_title">最佳匹配</p>
			<SongItem v-for="result in resultList" :key="result.id" :name="result.name" :author="result.ar[0].name" :id="result.id"></SongItem>
		</div>
	</div>
</template>

<script>
import { hotSearchAPI, searchResultListAPI } from '@/api';
import SongItem from '@/components/SongItem.vue';

export default {
	name: 'Search',
	components:{
		SongItem
	},
	data() {
		return {
			searchValue: '',
			hotSearchList: [],
			resultList: [],
			timer: null,
		};
	},
	async created() {
		const hotSearch = await hotSearchAPI()
		this.hotSearchList = hotSearch.data.result.hots
		console.log(this.hotSearchList);
	},
	methods: {
		async btn(str) {
			this.searchValue = str
			const res = await searchResultListAPI({
				type: 1,
				keywords: this.searchValue,
			})
			this.resultList = res.data.result.songs
			setTimeout(() => {
				clearTimeout(this.timer)
			})
		}
	},
	watch: {
		async searchValue(value) {
			clearTimeout(this.timer)
			if (value.length === 0) return this.resultList = []
			this.timer = setTimeout(async () => {
				const res = await searchResultListAPI({
					type: 1,
					keywords: value,
				})
				this.resultList = res.data.result.songs
			}, 500);
		}
	}
}
</script>

<style scoped>
/deep/ .van-field__control {
	font-size: 12px !important;
}

/* 搜索容器的样式 */
.search_wrap {
	padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
	font-size: 0.32rem;
	color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
	margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
	display: inline-block;
	height: 0.853333rem;
	margin-right: 0.213333rem;
	margin-bottom: 0.213333rem;
	padding: 0 0.373333rem;
	font-size: 0.373333rem;
	line-height: 0.853333rem;
	color: #333;
	border-color: #d3d4da;
	border-radius: 0.853333rem;
	border: 1px solid #d3d4da;
}

.search-icon {
	font-size: 24px;
	line-height: inherit;
}
</style>