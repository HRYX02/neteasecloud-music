<template>
	<div>
		<p class="title">推荐歌单</p>
		<van-row gutter="10">
			<van-col span="8" v-for="recommend in recommendList" :key="recommend.id">
				<van-image width="100%" height="3rem" :src="recommend.picUrl">
				</van-image>
				<p class="song_name">{{ recommend.name }}</p>
			</van-col>
		</van-row>
		<p class="title">最新音乐</p>
		<SongItem v-for="newMusic in newMusicList" :key="newMusic.id" :name="newMusic.name" :author="newMusic.song.artists[0].name" :id="newMusic.id"></SongItem>
	</div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from '@/api';
import SongItem from '@/components/SongItem.vue';

export default {
	name: 'Home',
	components:{
		SongItem
	},
	data() {
		return {
			recommendList: [],
			newMusicList: [],
		};
	},
	async created() {
		const recommendList = await recommendMusicAPI({ limit: 6 })
		this.recommendList = recommendList.data.result
		const newMusicList = await newMusicAPI({ limit: 20 })
		this.newMusicList = newMusicList.data.result
		console.log(this.newMusicList);
	}
}
</script>

<style scoped>
/* 标题 */
.title {
	padding: 0.266667rem 0.24rem;
	margin: 0 0 0.24rem 0;
	background-color: #eee;
	color: #333;
	font-size: 15px;
}

/* 推荐歌单 - 歌名 */
.song_name {
	font-size: 0.346667rem;
	padding: 0 0.08rem;
	margin-bottom: 0.266667rem;
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box;
	/** 对象作为伸缩盒子模型显示 **/
	-webkit-box-orient: vertical;
	/** 设置或检索伸缩盒对象的子元素的排列方式 **/
	-webkit-line-clamp: 2;
	/** 显示的行数 **/
	overflow: hidden;
	/** 隐藏超出的内容 **/
}

.search-icon {
	font-size: 24px;
	line-height: inherit;
}
</style>