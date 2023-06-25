<template>
	<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
		<van-list v-model="loading" :finished="finished" :finished-text="i18n.more" @load="onLoads">
			<van-cell v-for="item in list" :key="item.code" :title="item.name" @click="onClick(item)" />
		</van-list>
	</van-pull-refresh>
</template>

<script>
	export default {
		data() {
			return {
				list: this.$t('lang'),
				loading: false,
				finished: false,
				refreshing: false
			};
		},
		computed: {
			i18n() {
				return this.$t('language')
			}
		},
		mounted: function() {
			uni.setNavigationBarTitle({
				title: this.$t('language').title
			});
		},
		methods: {
			onLoads() {
				this.refreshing = false;
				this.loading = false;
				this.finished = true;
			},

			onRefresh() {
				// 清空列表数据
				this.finished = false;
				this.loading = true;
				this.onLoads();
			},
			onClick(item) {
				window.localStorage.setItem('language', item.code);
				this._i18n.locale = item.code,
					uni.redirectTo({
						url: '/pages/index/login'
					})
			}
		}
	}
</script>

<style>
</style>
