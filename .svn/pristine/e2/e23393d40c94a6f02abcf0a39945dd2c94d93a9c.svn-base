<template>
 <van-form @submit="onSubmit" style="margin:3rem;">
	<van-cell-group>
		<van-field v-model="pallet" ref="pallet" :label="i18n.palletNo[0]" :rules="[{ required: true, message:i18n.palletNoMsg }]" required />
	</van-cell-group>
	
	<van-cell-group>
		<van-field v-model="fromLocCode" :label="i18n.location[0]" :rules="[{ required: true, message: i18n.locationMsg }]" required />
	</van-cell-group>
	
	<van-cell-group v-show='i18n.type[1]==1'>
		<van-select :label="i18n.type[0]" :placeholder="i18n.typeMsg" v-model="type" :columns="types"/>
	</van-cell-group>
	
	<div style="margin: 2rem;">
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
				pallet: '',
				type: this.$t('vehicleIn').types[0],
				types: this.$t('vehicleIn').types,
				fromLocCode: '',
				loading: false
			}
		},
		computed: {
			i18n() {
				return this.$t('vehicleIn')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('vehicleIn').title
				        });
				this.$nextTick(() => {
							this.$refs.pallet.focus()
						});
						},
		methods: {
			onSubmit() {
	
	            let _this=this;
				this.loading = true;
				
				let code=this.$t('vehicleIn').typeCodes[this.types.indexOf(this.type)];
				let pallet=this.pallet;
				//let pallet=this.pallet==""?_this.uuid(8,16):this.pallet;
				// axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/inventoryDetail', {
				// 	condition: {
				// 		locationCode: { in: ["RECEIVE", "SHIP","COUNT"]
				// 		},
				// 		pallet: {
				// 			'=': pallet
				// 		},
				// 	},
				// 	pageNumber: 1,
				// 	pageSize: 10,
				// 	queryType: 2
				// }).then(function(response) {
				//    if(response.data.data.length>0)
				//    {
					   axios.get(_this.apiUrl.middleapiUrl + '/WCSService/GetGoToProfileCheck',{params: {
					   		pallet: pallet,
					   		fromLocCode: _this.fromLocCode,
							palletType:code
					   	}})
					   	.then(function(response) {
					   	
					   		_this.loading = false;
					   	
					   		if (response.data == true) {
					   	
					   			Toast({
					   				message: _this.$t('vehicleIn').putawaySuccessMsg
					   			});
					   	
					   		} 
					   	})
					   	.catch(function(error) { // 请求失败处理
					   	
					   		_this.loading = false;
					   		Toast({
					   			message: _this.$t('vehicleIn').putawayErrorMsg
					   		});
					   	});
				//    }else{
				// 	   axios.post(_this.apiUrl.apiUrl + '/api/app/AutoInboundManager/receive', {
				// 	   	MaterialCode:code,
				// 	   	expectedPkgQuantity:1,
				// 	   	pallet:pallet,
				// 	   }).then(function(response) {
				// 	   	axios.get(_this.apiUrl.middleapiUrl + '/WCSService/GetGoToProfileCheck',{params: {
				// 	   			pallet: pallet,
				// 	   			fromLocCode: _this.fromLocCode
				// 	   		}})
				// 	   		.then(function(response) {
					   		
				// 	   			_this.loading = false;
					   		
				// 	   			if (response.data == true) {
					   		
				// 	   				Toast({
				// 	   					message: _this.$t('vehicleIn').putawaySuccessMsg
				// 	   				});
					   		
				// 	   			} 
				// 	   		})
				// 	   		.catch(function(error) { // 请求失败处理
					   		
				// 	   			_this.loading = false;
				// 	   			Toast({
				// 	   				message: _this.$t('vehicleIn').putawayErrorMsg
				// 	   			});
				// 	   		});
				// 	   	})
				// 	     .catch(function(error) { // 请求失败处理
				// 	   		_this.loading = false;
				// 	   		Toast({
				// 	   			message: _this.$t('vehicleIn').receiptErrorMsg
				// 	   		});
				// 	   	});
				//    }
				// })
				// .catch(function(error) { // 请求失败处理
				
				// 	_this.loading = false;
				// 	Toast({
				// 		message: _this.$t('vehicleIn').inventoryDetailErrorMsg
				// 	});
				// });
				
			},
			// uuid(len, radix) {
			//   var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
			//   var uuid = [], i;
			//   radix = radix || chars.length;
			 
			//   if (len) {
			//    // Compact form
			//    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
			//   } else {
			//    // rfc4122, version 4 form
			//    var r;
			 
			//    // rfc4122 requires these characters
			//    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
			//    uuid[14] = '4';
			 
			//    // Fill in random data. At i==19 set the high bits of clock sequence as
			//    // per rfc4122, sec. 4.1.5
			//    for (i = 0; i < 36; i++) {
			//     if (!uuid[i]) {
			//      r = 0 | Math.random()*16;
			//      uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			//     }
			//    }
			//   }
			 
			//   return uuid.join('');
			// }
		}
	}
</script>

<style>
</style>
