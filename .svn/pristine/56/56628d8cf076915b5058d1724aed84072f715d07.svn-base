<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.location[1]==1'>
			<van-field v-model="location" :label="i18n.location[0]" ref="location" :rules="[{ required: true, message: i18n.locationMsg }]" required />
		</van-cell-group>
		<van-cell-group v-show='i18n.code[1]==1'>
			<van-field v-model="materialCode" :label="i18n.code[0]"/>
		</van-cell-group>	
		<div style="margin: 16px;">
			<van-button :loading="loading" round block type="info" native-type="submit">
				{{i18n.submit}}
			</van-button>
		</div>

	</van-form>
</template>

<script>
	import select from '../../components/VanFieldSelectPicker.vue';
	import axios from 'axios';
	import {
		Toast
	} from 'vant';

	export default {
		components: {
			'van-select': select
		},
		data() {
			return {
				materialCode: '',
				location: '',
				loading: false

			}
		},
		computed: {
			i18n() {
				return this.$t('counterRep')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('counterRep').title
				        });
						},
		methods: {
			
			onSubmit() {
				this.loading = true;
				var _this = this;
                				
				axios.post(this.apiUrl.apiUrl + '/api/app/autoOutboundManager/replenishment', {
						materialCode: _this.materialCode==""?"0000":_this.materialCode,
						ToLocCode: _this.location,
					})
					.then(function(response) {

							axios.get(_this.apiUrl.interfaceUrl + '/WMSService/Zhls_WmsTask_To_Mes',{params: {
									dzhg: _this.location,
									tph: response.data[0]
								}})
								.then(function(response2) {
							
									_this.loading = false;
							
									if (response2.data.respCode == false) {
							
										Toast({
											message: response2.data.respMsg
										});
							
									} else
									{
										Toast({
											message: _this.$t('counterRep').replenishSuccessMsg
										});
									}
								})
								.catch(function(error) { // 请求失败处理
							
									_this.loading = false;
									Toast({
										message: _this.$t('counterRep').replenishErrorMsg
									});
								});
								
								

						_this.loading = false;
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message: _this.$t('counterRep').replenishErrorMsg
						});
					});

			}
		}
	}
</script>

<style>
</style>
