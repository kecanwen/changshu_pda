<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.palletNo[1]==1'>
			<van-field v-model="pallet" ref="pallet" :label="i18n.palletNo[0]" :rules="[{ required: true, message:i18n.palletNoMsg }]" required />
		</van-cell-group>
	
		<van-cell-group v-show='i18n.plankCode[1]==1'>
			<van-field v-model="plankCode" :label="i18n.plankCode[0]" :rules="[{ required: true, message: i18n.plankCodeMsg }]" required />
		</van-cell-group>
	
		<div style="margin: 2rem;">
			<van-button :loading="loading" round block type="info" native-type="submit">
				{{i18n.submit}}
			</van-button>
		</div>
	</van-form>
</template>

<script>
	import axios from 'axios';
	import {
		Toast
	} from 'vant';
	
	export default {
		data() {
			return {
				pallet: '',
				plankCode: '',
				loading: false
			}
		},
		computed: {
			i18n() {
				return this.$t('groupDisk')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('groupDisk').title
				        });
				this.$nextTick(() => {
							this.$refs.pallet.focus()
						});
						},
		methods: {
			onSubmit() {
	
	            let _this=this;
				this.loading = true;
	
	
				axios.post(this.apiUrl.apiUrl + '/middlewareManager/mergeApplyOrderAndReceive',{
						pallet: this.pallet,
						str10: this.plankCode
					})
					.then(function(response) {
	
						_this.loading = false;
	
						if (response.data == true) {
	
							Toast({
								message: _this.$t('groupDisk').groupDiskSuccessMsg
							});
	
						} 
					})
					.catch(function(error) { // 请求失败处理
	
						_this.loading = false;
						Toast({
							message: _this.$t('groupDisk').groupDiskErrorMsg
						});
					});
	
			}
		}
	}
</script>

<style>
</style>
