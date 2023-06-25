<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<!--托盘号-->
		<van-cell-group v-show='i18n.palletNo[1]==1'>
			<!--
			:rules="[{ required: true, message: i18n.palletNoMsg}]" required
			-->
			<van-field v-model="palletNo" ref="palletNo" :label="i18n.palletNo[0]"
				>
			</van-field>
		</van-cell-group>
		<!--条码-->
		<van-cell-group v-show='i18n.code[1]==1'>
			<van-field v-model="code" :label="i18n.code[0]" :rules="[{ required: true, message: i18n.codeMsg}]"
				required />
		</van-cell-group>
		<!--收货数量-->
		<van-cell-group v-show='i18n.pkgQuantity[1]==1'>
			<van-field v-model="pkgQuantity" type="number" :label="i18n.pkgQuantity[0]"
				:rules="[{ required: true, message: i18n.pkgQuantityMsg}]" required></van-field>
		</van-cell-group>
		<!---->
		<van-cell-group v-show='i18n.fromLocCode[1]==1'>
			<van-field v-model="fromLocCode" :label="i18n.fromLocCode[0]"
				:rules="[{ required: true, message: i18n.fromLocCodeMsg }]" required />
		</van-cell-group>
		<!--收货库位-->
		<van-cell-group v-show='i18n.receiptLocation[1]==1'>
			<van-select :label="i18n.receiptLocation[0]" :placeholder="i18n.dropdownMsg" v-model="receiveLoc"
				:rules="[{ required: true, message: i18n.receiptLocationMsg }]" required :columns="receiveLocs"
				@defclick="receiveLocOnChange" />
		</van-cell-group>
		<!--批次-->
		<van-cell-group v-show='i18n.batchNo[1]==1'>
			<van-field v-model="batchNo" :label="i18n.batchNo[0]"
				:readonly='(typeof(i18n.batchNo[2])!=undefined&&i18n.batchNo[2]==0)?false:true' />
		</van-cell-group>
		<!---->
		<van-cell-group v-show='i18n.m_Str1[1]==1&&typeof(i18n.m_Str1[3])==undefined'>
			<van-field v-model="m_Str1" :label="i18n.m_Str1[0]"
				:readonly='(typeof(i18n.m_Str1[2])!=undefined&&i18n.m_Str1[2]==0)?false:true' />
		</van-cell-group>
		
		<van-cell-group v-show='i18n.m_Str1[1]==1&&typeof(i18n.m_Str1[3])!=undefined'>
			<van-select :label="i18n.m_Str1[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str1"
				:columns="i18n.m_Str1[3]!=undefined?i18n.m_Str1[3]:[]" />
		</van-cell-group>
		
		<van-cell-group v-show='i18n.m_Str2[1]==1&&typeof(i18n.m_Str2[3])==undefined'>
			<van-field v-model="m_Str2" :label="i18n.m_Str2[0]"
				:readonly='(typeof(i18n.m_Str2[2])!=undefined&&i18n.m_Str2[2]==0)?false:true' />
		</van-cell-group>
		<!--归属区域-->
		<van-cell-group v-show='i18n.m_Str2[1]==1&&typeof(i18n.m_Str2[3])!=undefined'>
			<van-select :label="i18n.m_Str2[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str2"
				:columns="i18n.m_Str2[3]!=undefined?i18n.m_Str2[3]:[]" />
		</van-cell-group>
		
		<!--入库类型-->
		<van-cell-group v-show='i18n.billType[1]==1'>
			<van-select :label="i18n.billType[0]" :placeholder="i18n.dropdownMsg" v-model="billTypeVal"
				:rules="[{ required: true, message:'请选择入库类型' }]" required :columns="billTypeVals"
				@defclick="billTypeOnChange" />
		</van-cell-group>
		
		<!--仓库-->
		<van-cell-group v-show='i18n.warehouseType[1]==1'>
			<van-select :label="i18n.warehouseType[0]" :placeholder="i18n.dropdownMsg" v-model="warehouseTypeVal"
				:rules="[{ required: true, message:'请选择仓库' }]" required :columns="warehouseTypeVals"
				@defclick="warehouseTypeOnChange" />
		</van-cell-group>
		
		<!---->
		<van-cell-group v-show='i18n.m_Str3[1]==1&&typeof(i18n.m_Str3[3])==undefined'>
			<van-field v-model="m_Str3" :label="i18n.m_Str3[0]"
				:readonly='(typeof(i18n.m_Str1[3])!=undefined&&i18n.m_Str1[3]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str3[1]==1&&typeof(i18n.m_Str3[3])!=undefined'>
			<van-select :label="i18n.m_Str3[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str3"
				:columns="i18n.m_Str3[3]!=undefined?i18n.m_Str3[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str4[1]==1&&typeof(i18n.m_Str4[3])==undefined'>
			<van-field v-model="m_Str4" :label="i18n.m_Str4[0]"
				:readonly='(typeof(i18n.m_Str4[2])!=undefined&&i18n.m_Str4[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str4[1]==1&&typeof(i18n.m_Str4[3])!=undefined'>
			<van-select :label="i18n.m_Str4[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str4"
				:columns="i18n.m_Str4[3]!=undefined?i18n.m_Str4[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str5[1]==1&&typeof(i18n.m_Str5[3])==undefined'>
			<van-field v-model="m_Str5" :label="i18n.m_Str5[0]"
				:readonly='(typeof(i18n.m_Str5[2])!=undefined&&i18n.m_Str5[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str5[1]==1&&typeof(i18n.m_Str5[3])!=undefined'>
			<van-select :label="i18n.m_Str5[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str5"
				:columns="i18n.m_Str5[3]!=undefined?i18n.m_Str5[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str6[1]==1&&typeof(i18n.m_Str6[3])==undefined'>
			<van-field v-model="m_Str6" :label="i18n.m_Str6[0]"
				:readonly='(typeof(i18n.m_Str6[2])!=undefined&&i18n.m_Str6[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str6[1]==1&&typeof(i18n.m_Str6[3])!=undefined'>
			<van-select :label="i18n.m_Str6[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str6"
				:columns="i18n.m_Str6[3]!=undefined?i18n.m_Str6[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str7[1]==1&&typeof(i18n.m_Str7[3])==undefined'>
			<van-field v-model="m_Str7" :label="i18n.m_Str7[0]"
				:readonly='(typeof(i18n.m_Str7[2])!=undefined&&i18n.m_Str7[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str7[1]==1&&typeof(i18n.m_Str7[3])!=undefined'>
			<van-select :label="i18n.m_Str7[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str7"
				:columns="i18n.m_Str7[3]!=undefined?i18n.m_Str7[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str8[1]==1&&typeof(i18n.m_Str8[3])==undefined'>
			<van-field v-model="m_Str8" :label="i18n.m_Str8[0]"
				:readonly='(typeof(i18n.m_Str8[2])!=undefined&&i18n.m_Str8[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str8[1]==1&&typeof(i18n.m_Str8[3])!=undefined'>
			<van-select :label="i18n.m_Str8[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str8"
				:columns="i18n.m_Str8[3]!=undefined?i18n.m_Str8[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str9[1]==1&&typeof(i18n.m_Str9[3])==undefined'>
			<van-field v-model="m_Str9" :label="i18n.m_Str9[0]"
				:readonly='(typeof(i18n.m_Str9[2])!=undefined&&i18n.m_Str9[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str9[1]==1&&typeof(i18n.m_Str9[3])!=undefined'>
			<van-select :label="i18n.m_Str9[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str9"
				:columns="i18n.m_Str9[3]!=undefined?i18n.m_Str9[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str10[1]==1&&typeof(i18n.m_Str10[3])==undefined'>
			<van-field v-model="m_Str10" :label="i18n.m_Str10[0]"
				:readonly='(typeof(i18n.m_Str10[2])!=undefined&&i18n.m_Str10[2]==0)?false:true' />
		</van-cell-group>
		<van-cell-group v-show='i18n.m_Str10[1]==1&&typeof(i18n.m_Str10[3])!=undefined'>
			<van-select :label="i18n.m_Str10[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str10"
				:columns="i18n.m_Str10[3]!=undefined?i18n.m_Str10[3]:[]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.carton[1]==1'>
			<van-field v-model="carton" :label="i18n.carton[0]" />
		</van-cell-group>
		<van-cell-group v-show='i18n.serialNo[1]==1'>
			<van-field v-model="serialNo" :label="i18n.serialNo[0]" />
		</van-cell-group>
		<!--质检-->
		<van-cell-group v-show='i18n.inventoryStatu[1]==1'>
			<van-select :label="i18n.inventoryStatu[0]" :placeholder="i18n.dropdownMsg" v-model="inventoryStatu"
				:columns="inventoryStatus" />
		</van-cell-group>


		<div class="remember" v-show='i18n.isWeipan[1]==1'>
			<van-checkbox v-model="isWeipan" shape="square" label-disabled>{{i18n.isWeipan[0]}}</van-checkbox>
		</div>

		<div style="margin: 50px;">
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
				palletNo: '',
				receiveLocId: '',
				receiveLoc: '',
				receiveLocList: [],
				receiveLocs: [],
				//<
				billTypeId: '',
				billTypeVal: '',
				billTypeList: [],
				billTypeVals: [],
				//>
				//[
				warehouseTypeId: '',
				warehouseTypeVal: '',
				warehouseTypeList: [],
				warehouseTypeVals: [],	
				//]
				pkgQuantity: typeof(this.$t('autoReceipt').pkgQuantity[2]) == undefined ? '' : this.$t('autoReceipt')
					.pkgQuantity[2],
				carton: '',
				serialNo: '',
				inventoryStatu: this.$t('autoReceipt').inventoryStatus[0],
				inventoryStatus: this.$t('autoReceipt').inventoryStatus,
				loading: false,
				quantity: '',
				isWeipan: false,
				code: '',
				batchNo: '',
				m_Str1: '',
				m_Str2: '',
				m_Str3: '',
				m_Str4: '',
				m_Str5: '',
				m_Str6: '',
				m_Str7: '',
				m_Str8: '',
				m_Str9: '',
				m_Str10: '',
				fromLocCode: ''
			}
		},
		computed: {
			i18n() {
				return this.$t('autoReceipt')
			}
		},
		onLoad() {
			this.mounted();
			console.log("getLocations begin");
			this.getLocations();
			console.log("getLocations end");
			this.getBillTypes();
			this.getWarehouseTypes();
		},
		watch: {
			code: function(str) {
				if (typeof str === 'string') {
					if (str.trim().length !== 0) {
						this.debounce(this.codeChange, 1000);
					} else {}
				}
			},

			palletNo: function(str) {
				if (typeof str === 'string') {
					if (str.trim().length !== 0) {
						this.debounce(this.onChange, 1000);
					} else {}
				}
			},
		},

		methods: {
			mounted() {
				this.$nextTick(() => {
					this.$refs.palletNo.focus()
				});

				uni.setNavigationBarTitle({
					title: this.$t('autoReceipt').title
				});

			},
			getLocations() {
				var _this = this;

				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/location', {
						condition: {
							locType: {
								in: ["RECEIVE", "CROSS_DOCK"]
							},
							xStatus: {
								'=': "ENABLED"
							},
						},
						pageNumber: 1,
						pageSize: 100,
						queryType: 2,
						sort: {
							XCode: true
						}
					})
					.then(function(response) {
						console.log(response);
						_this.receiveLocList = response.data.data;
						_this.receiveLocs = [];
						response.data.data.map(e => {
							let value = e.xCode;
							_this.receiveLocs.push(value);

						});

						if (_this.receiveLocList.length > 0) {
							_this.receiveLocId = _this.receiveLocList[0].id;
							_this.receiveLoc = _this.receiveLocList[0].xCode;
						}


					})
					.catch(function(error) { // 请求失败处理

						Toast({
							message: _this.$t('autoReceipt').locationErrorMsg
						});
					});
			},
			receiveLocOnChange(index) {


				this.receiveLocId = this.receiveLocList[index].id;
			},
			//<
			getBillTypes() {
				var _this = this;
			
				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/billType', {
						condition: {
							xType: {
								in: ["RECEIVE"/*,""*/]
							},
							xStatus: {
								'=': "ENABLED"
							},
						},
						pageNumber: 1,
						pageSize: 100,
						queryType: 2,
						sort: {
							XCode: true
						}
					})
					.then(function(response) {
						console.log(response);
						_this.billTypeList = response.data.data;
						_this.billTypeVals = [];
						response.data.data.map(e => {
							//let value = e.xCode;
							let value = e.xName;
							_this.billTypeVals.push(value);
			
						});
			
						if (_this.billTypeList.length > 0) {
							_this.billTypeId = _this.billTypeList[0].id;
							//_this.billTypeVal = _this.billTypeList[0].xCode;
							_this.billTypeVal = _this.billTypeList[0].xName;
						}
			
			
					})
					.catch(function(error) { // 请求失败处理
			
						Toast({
							//message: _this.$t('autoReceipt').locationErrorMsg
							message:"入库类型加载失败"
						});
					});
			},
			billTypeOnChange(index) {
			
			
				this.billTypeId = this.billTypeList[index].id;
				console.log("Billtype id is "+this.billTypeId);
			},
			//>
			//[
			getWarehouseTypes() {
				var _this = this;
			
				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/warehouse', {
						
						pageNumber: 1,
						pageSize: 100,
						queryType: 2,
						sort: {
							XCode: true
						}
					})
					.then(function(response) {
						console.log(response);
						_this.warehouseTypeList = response.data.data;
						_this.warehouseTypeVals = [];
						response.data.data.map(e => {
							let value = e.xCode;
							_this.warehouseTypeVals.push(value);
			
						});
			
						if (_this.warehouseTypeList.length > 0) {
							_this.warehouseTypeId = _this.warehouseTypeList[0].id;
							_this.warehouseTypeVal = _this.warehouseTypeList[0].xCode;
						}
			
			
					})
					.catch(function(error) { // 请求失败处理
			
						Toast({
							//message: _this.$t('autoReceipt').locationErrorMsg
							message:"仓库加载失败"
						});
					});
			},
			warehouseTypeOnChange(index) {
			
			
				this.warehouseTypeId = this.warehouseTypeList[index].id;
				console.log("warehousetype id is "+this.warehouseTypeId);
			},	
			//]
			onChange() {
				if (this.palletNo) {

					let _this = this;

					axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/inventoryDetail', {
							condition: {
								Pallet: {
									'=': this.palletNo
								}
							},
							pageNumber: 1,
							pageSize: 500,
							queryType: 1,
							sort: {
								MaterialId: false
							}
						})
						.then(function(response) {

							if (response.data.totalCount > 0) {
								Toast({
									message: _this.$t('autoReceipt').NoMixingMsg
								});

								_this.palletNo = '';
							}
						})
						.catch(function(error) { // 请求失败处理

							Toast({
								message: _this.$t('autoReceipt').GetCountErrorMsg
							});
						});
				}
			},

			onSubmit() {

				this.loading = true;

				let _this = this;
				let inventoryStatuCode = this.$t('autoReceipt').inventoryStatusCode[this.inventoryStatus.indexOf(this
					.inventoryStatu)];

				axios.post(this.apiUrl.apiUrl + '/api/app/AutoInboundManager/receive', {
						LocationId: this.receiveLocId,
						materialCode: this.code,
						Pallet: this.palletNo,
						Carton: this.carton,
						SerialNo: this.serialNo,
						InventoryStatus: inventoryStatuCode,
						IsWeipan: this.isWeipan == true ? 'Y' : 'N',
						batchNo: this.batchNo,
						m_Str1: this.m_Str1,
						m_Str2: this.m_Str2,
						m_Str3: this.m_Str3,
						m_Str4: this.m_Str4,
						m_Str5: this.m_Str5,
						m_Str6: this.m_Str6,
						m_Str7: this.m_Str7,
						m_Str8: this.m_Str8,
						m_Str9: this.m_Str9,
						m_Str10: this.m_Str10,
						expectedPkgQuantity: this.pkgQuantity

					})
					.then(function(response) {
						_this.loading = false;
						if (response.status == 200) {
							Toast({
								message: _this.$t('autoReceipt').receiptSuccessMsg
							});
							_this.palletNo = '';
							_this.pkgQuantity = '';
							_this.carton = '';
							_this.serialNo = '';
							_this.inventoryStatu = _this.$t('autoReceipt').inventoryStatus[0];
							_this.isWeipan = false;
							_this.code = '';
						}

					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message: _this.$t('autoReceipt').receiptErrorMsg
						});
					});
			},

			codeChange() {
				if (this.code.trim() != "") {
					let value = this.codeHelper.codeFilter(this.code);
					this.code = value.code;
				}
			},
			debounce: function(fn, wait) {
				if (this.fun !== null) {
					clearTimeout(this.fun)
				}
				this.fun = setTimeout(fn, wait)
			},
			fromLocCodeChange() {

				let _this = this;

				if (this.fromLocCode != '') {
					this.receiveLoc = this.fromLocCode;
					this.receiveLocList.map(e => {
						if (e.xCode == _this.fromLocCode) {
							_this.receiptOrderId = e.id;
						}
					})
				}
			}
		}

	}
</script>

<style>
	.remember {
		float: right;
		margin-right: 1rem;
		font-size: 12px;
		padding-top: 8px;
	}
</style>
