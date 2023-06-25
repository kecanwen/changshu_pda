<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.location[1]==1'>
			<van-field v-model="location" :label="i18n.location[0]" ref="location" :rules="[{ required: true, message: i18n.locationMsg }]" required />
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
				location: '',
				loading: false

			}
		},
		computed: {
			i18n() {
				return this.$t('counterDP')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('counterDP').title
				        });
						},
		methods: {
			
			onSubmit() {
				this.loading = true;
				var _this = this;
                				
				

							axios.get(this.apiUrl.interfaceUrl + '/WMSService/Zhls_WmsTask_To_Mes',{params: {
									dzhg: this.location,
									tph: ''
								}})
								.then(function(response) {
							
									_this.loading = false;
							
									if (response.data.respCode == false) {
							
										Toast({
											message: response.data.respMsg
										});
							
									} else{
										Toast({
											message: _this.$t('counterDP').counterDPSuccess
										});
									}
								})
							// 	.catch(function(error) { // 请求失败处理
							
							// 		_this.loading = false;
							// 		Toast({
							// 			message: _this.$t('counterDP').counterDPErrorMsg
							// 		});
							// 	});

						

		}
		}
	}
</script>

<style>
</style>
