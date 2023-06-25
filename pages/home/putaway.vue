<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.palletNo[1]==1'>
			<!--i18n.palletNo[0]-->
			<van-field v-model="pallet" ref="pallet" label="收货标签"
				:rules="[{ required: true, message:'请提供收货标签'/*i18n.palletNoMsg*/ }]" required />
		</van-cell-group>

		<van-cell-group v-show='i18n.location[1]==1'>
			<!--i18n.location[0]-->
			<van-field v-model="fromLocCode" label="库位"
				:rules="[{ required: true, message: '请提供库位'/*i18n.locationMsg*/ }]" required />
		</van-cell-group>

		<div style="margin: 2rem;">
			<!--{{i18n.submit}}-->
			<van-button :loading="loading" round block type="info" native-type="submit">
				确定
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
				fromLocCode: '',
				loading: false
			}
		},
		computed: {
			i18n() {
				return this.$t('putaway')
			}
		},
		mounted: function() {
			uni.setNavigationBarTitle({
				title: this.$t('putaway').title
			});
			this.$nextTick(() => {
				this.$refs.pallet.focus();
			});
		},
		methods: {
			onSubmit() {

				var _this = this;
				this.loading = true;


				/* axios.get(this.apiUrl.middleapiUrl + '/WCSService/GetGoToProfileCheck', {
						params: {
							pallet: this.pallet,
							fromLocCode: this.fromLocCode
						}
					})
					.then(function(response) {
						console.log(response);
						_this.loading = false;
				
						if (response.data == true) {
				
							Toast({
								message: _this.$t('putaway').putawaySuccessMsg
							});
				
						}
					})
					.catch(function(error) { // 请求失败处理
						//alert("error");
						console.log(error);
						_this.loading = false;
						Toast({
							message: error.message //_this.$t('putaway').putawayErrorMsg
						});
					}); */

				//axios.post(this.apiUrl.apiUrl + '/api/app/pdaManager/putawayAndConfirm', {
				axios.post(this.apiUrl.apiUrl + '/api/app/pdaManager/putawayBySerialNo', {
						"pallet": this.pallet,
						"toLocCode": this.fromLocCode
						//"paramerters": {}
					})
					.then(function(response) {
						console.log(response);
						_this.loading = false;


						if (response.data == true) {

							Toast({
								message: _this.$t('putaway').putawaySuccessMsg
							});

						}
					})
					.catch(function(error) { // 请求失败处理
						console.log(error);
						_this.loading = false;
						Toast({
							message: _this.$t('putaway').putawayErrorMsg
						});
					});


			}
		}
	}
</script>

<style>
</style>
