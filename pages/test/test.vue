<template>
	<view>
		<view>
			Test
		</view>
	</view>
</template>

<script>
//uni.hideToast();
export default{
	onLoad() {
		uni.showToast({
			title:"tst",
			duration:6*1000
		});
	},
	methods:{
		
	}
}
</script>

<style>
</style>
