<template>
	<view>
		<van-form @submit="onSubmit">
				<van-cell-group>
					<van-field v-model="palletNo" :label="i18n.palletNo[0]"/>
				</van-cell-group>

				<van-cell-group>
					<van-field v-model="code" :label="i18n.code[0]" />
				</van-cell-group>

				<van-cell-group>
					<van-select :label="i18n.inventoryStatu[0]" :placeholder="i18n.dropdownMsg" v-model="inventoryStatu"
								:columns="inventoryStatusList" />
				</van-cell-group>

				<div style="margin: 50px;">
					<van-button :loading="loading" round block type="info" native-type="submit">
						{{i18n.submit}}
					</van-button>
				</div>
		</van-form>
		<uni-table border stripe emptyText="暂无更多数据" >
			<uni-tr>
				<uni-th align="center" width="150">物料名称</uni-th>
				<uni-th align="center">批次</uni-th>
				<uni-th align="center">收货数量</uni-th>
			</uni-tr>
			<uni-tr>
				<uni-td>111111</uni-td>
				<uni-td>2222</uni-td>
				<uni-td>3333</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	import select from '../../components/VanFieldSelectPicker.vue';

	import {
		PullRefresh
	} from 'vant';

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
				receiptOrderId: '',
				receiptOrder: '',
				receiptOrderList: [],
				receiptOrderFilterList: [],
				receiptOrders: [],
				receiptOrderItemId: '',
				receiptOrderItem: '',
				item: {},
				receiptOrderItemList: [],
				receiptOrderItems: [],
				pkgQuantity: this.$t('receipt').pkgQuantity[3] == undefined ? "" : this.$t('receipt').pkgQuantity[3],
				carton: '',
				serialNo: '',
				inventoryStatu: '普通入库',
				inventoryStatus: this.$t('receipt').inventoryStatus,
				inventoryStatusList:['普通入库','特殊入库','空托盘入库'],
				loading: false,
				isLoading: false,
				quantity: '',
				isWeipan: false,
				code: '',
				packageUnit: '',
				str1: '',
				str2: '',
				str3: '',
				str4: '',
				str5: '',
				str6: '',
				str7: '',
				str8: '',
				str9: '',
				str10: '',
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
				erpCode: '',
				count: '',
				fromLocCode: ''
			}
		},
		computed: {
			i18n() {
				return this.$t('receipt')
			}
		},
		watch: {

			palletNo: function(str) {
				if (typeof str === 'string') {
					if (str.trim().length !== 0) {
						this.debounce(this.onChange, 1000);
					} else {}
				}
			},
			code: function(str) {
				if (typeof str === 'string') {
					if (str.trim().length !== 0) {
						this.debounce(this.codeChange, 1000);
					} else {}
				}
			},
			fromLocCode: function(str) {
				if (typeof str === 'string') {
					if (str.trim().length !== 0) {
						this.debounce(this.fromLocCodeChange, 1000);
					} else {}
				}
			},
		},
		onLoad() {

			this.mounted();
			this.getLocations();
			this.getReceiptOrders();
		},

		methods: {
			mounted() {
				this.$nextTick(() => {
					this.$refs.palletNo.focus()
				});

				uni.setNavigationBarTitle({
					title: this.$t('receipt').title
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
							creationTime: false
						}
					})
					.then(function(response) {
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
							message: _this.$t('receipt').locationErrorMsg
						});
					});
			},

			getReceiptOrders() {

				var _this = this;

				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/receiptOrder', {
						condition: {
							xStatus: {
								in: ["ACTIVE", "RECEIVING"]
							}
						},
						pageNumber: 1,
						pageSize: 100,
						queryType: 2
					})
					.then(function(response) {

						_this.receiptOrderList = response.data.data;
						_this.receiptOrders = [];

						response.data.data.map(e => {
							let value = e.xCode;
							_this.receiptOrders.push(value);
						});

						if (_this.receiptOrderList.length > 0) {
							_this.receiptOrderId = _this.receiptOrderList[0].id;
							_this.receiptOrder = _this.receiptOrderList[0].xCode;

							let receiptOrderItems = _this.receiptOrderList[0].receiptOrderItem;

							_this.receiptOrderItemList = receiptOrderItems;

							_this.receiptOrderItems = [];

							receiptOrderItems.map(e => {
								let value =
									`${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;
								_this.receiptOrderItems.push(value);
							});

							_this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0]
								.receivedPkgQuantity;
							_this.receiptOrderItemId = receiptOrderItems[0].id;
							_this.receiptOrderItem =
								`${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
							_this.item = receiptOrderItems[0];

							_this.packageUnit = receiptOrderItems[0].packageUnit != null ? receiptOrderItems[0]
								.packageUnit.pkgLevel : "";
							_this.str1 = receiptOrderItems[0].material.str1;
							_this.str2 = receiptOrderItems[0].material.str2;
							_this.str3 = receiptOrderItems[0].material.str3;
							_this.str4 = receiptOrderItems[0].material.str4;
							_this.str5 = receiptOrderItems[0].material.str5;
							_this.str6 = receiptOrderItems[0].material.str6;
							_this.str7 = receiptOrderItems[0].material.str7;
							_this.str8 = receiptOrderItems[0].material.str8;
							_this.str9 = receiptOrderItems[0].material.str9;
							_this.str10 = receiptOrderItems[0].material.str10;
							_this.batchNo = receiptOrderItems[0].materialProperty.batchNo;
							_this.m_Str1 = receiptOrderItems[0].materialProperty.m_Str1;
							_this.m_Str2 = receiptOrderItems[0].materialProperty.m_Str2;
							_this.m_Str3 = receiptOrderItems[0].materialProperty.m_Str3;
							_this.m_Str4 = receiptOrderItems[0].materialProperty.m_Str4;
							_this.m_Str5 = receiptOrderItems[0].materialProperty.m_Str5;
							_this.m_Str6 = receiptOrderItems[0].materialProperty.m_Str6;
							_this.m_Str7 = receiptOrderItems[0].materialProperty.m_Str7;
							_this.m_Str8 = receiptOrderItems[0].materialProperty.m_Str8;
							_this.m_Str9 = receiptOrderItems[0].materialProperty.m_Str9;
							_this.m_Str10 = receiptOrderItems[0].materialProperty.m_Str10;
							_this.erpCode = receiptOrderItems[0].erpCode;
						}

					})
					.catch(function(error) { // 请求失败处理
						Toast({
							message: _this.$t('receipt').receiptOrdersErrorMsg
						});
					});
			},

			receiveLocOnChange(index) {


				this.receiveLocId = this.receiveLocList[index].id;
			},

			receiptOrderOnChange(index) {


				let orders = this.code.length > 0 ? this.receiptOrderFilterList : this.receiptOrderList;

				this.receiptOrderId = orders[index].id;

				let receiptOrderItems = orders[index].receiptOrderItem;

				this.receiptOrderItemList = receiptOrderItems;

				this.receiptOrderItems = [];

				receiptOrderItems.map(e => {
					let value =
						`${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;

					this.receiptOrderItems.push(value);
				});


				this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0].receivedPkgQuantity;
				this.receiptOrderItemId = receiptOrderItems[0].id;
				this.receiptOrderItem =
					`${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
				this.item = receiptOrderItems[0];

				this.packageUnit = receiptOrderItems[0].packageUnit != null ? receiptOrderItems[0].packageUnit.pkgLevel :
					"";
				this.str1 = receiptOrderItems[0].material.str1;
				this.str2 = receiptOrderItems[0].material.str2;
				this.str3 = receiptOrderItems[0].material.str3;
				this.str4 = receiptOrderItems[0].material.str4;
				this.str5 = receiptOrderItems[0].material.str5;
				this.str6 = receiptOrderItems[0].material.str6;
				this.str7 = receiptOrderItems[0].material.str7;
				this.str8 = receiptOrderItems[0].material.str8;
				this.str9 = receiptOrderItems[0].material.str9;
				this.str10 = receiptOrderItems[0].material.str10;
				this.batchNo = receiptOrderItems[0].materialProperty.batchNo;
				this.m_Str1 = receiptOrderItems[0].materialProperty.m_Str1;
				this.m_Str2 = receiptOrderItems[0].materialProperty.m_Str2;
				this.m_Str3 = receiptOrderItems[0].materialProperty.m_Str3;
				this.m_Str4 = receiptOrderItems[0].materialProperty.m_Str4;
				this.m_Str5 = receiptOrderItems[0].materialProperty.m_Str5;
				this.m_Str6 = receiptOrderItems[0].materialProperty.m_Str6;
				this.m_Str7 = receiptOrderItems[0].materialProperty.m_Str7;
				this.m_Str8 = receiptOrderItems[0].materialProperty.m_Str8;
				this.m_Str9 = receiptOrderItems[0].materialProperty.m_Str9;
				this.m_Str10 = receiptOrderItems[0].materialProperty.m_Str10;
				this.erpCode = receiptOrderItems[0].erpCode;

			},
			receiptOrderItemOnChange(index) {

				this.receiptOrderItemId = this.receiptOrderItemList[index].id;
				this.quantity = this.receiptOrderItemList[index].expectedPkgQuantity - this.receiptOrderItemList[index]
					.receivedPkgQuantity;
			},
			onChange() {
				if (this.palletNo) {

					var _this = this;

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
								_this.count = response.data.totalCount
							} else {
								_this.count = '';
							}
						})
						.catch(function(error) { // 请求失败处理

							Toast({
								message: _this.$t('counting').taskErrorMsg
							});
						});
				}
			},
			onSubmit() {

				this.loading = true;

				let _this = this;
				let inventoryStatuCode = this.$t('receipt').inventoryStatusCode[this.inventoryStatus.indexOf(this
					.inventoryStatu)];

				if (this.$t('receipt').pkgQuantity[2] == 0) {
					if (this.pkgQuantity > this.quantity) {
						Toast({
							message: _this.$t('receipt').OverPkgQuantity
						});

						this.loading = false;
						return;
					}
				}

				let input = {};

				if (this.batchNo != this.item.materialProperty.batchNo) {
					input['BatchNo'] = this.batchNo;
				}
				if (this.m_Str1 != this.item.materialProperty.m_Str1) {
					input['M_Str1'] = this.m_Str1;
				}
				if (this.m_Str2 != this.item.materialProperty.m_Str2) {
					input['M_Str2'] = this.m_Str2;
				}
				if (this.m_Str3 != this.item.materialProperty.m_Str3) {
					input['M_Str3'] = this.m_Str3;
				}
				if (this.m_Str4 != this.item.materialProperty.m_Str4) {
					input['M_Str4'] = this.m_Str4;
				}
				if (this.m_Str5 != this.item.materialProperty.m_Str5) {
					input['M_Str5'] = this.m_Str5;
				}
				if (this.m_Str6 != this.item.materialProperty.m_Str6) {
					input['M_Str6'] = this.m_Str6;
				}
				if (this.m_Str7 != this.item.materialProperty.m_Str7) {
					input['M_Str7'] = this.m_Str7;
				}
				if (this.m_Str8 != this.item.materialProperty.m_Str8) {
					input['M_Str8'] = this.m_Str8;
				}
				if (this.m_Str9 != this.item.materialProperty.m_Str9) {
					input['M_Str9'] = this.m_Str9;
				}
				if (this.m_Str10 != this.item.materialProperty.m_Str10) {
					input['M_Str10'] = this.m_Str10;
				}
				if (this.m_Str10 != this.item.materialProperty.m_Str10) {
					input['M_Str10'] = this.m_Str10;
				}

				if (Object.keys(input).length != 0) {
					axios.post(this.apiUrl.apiUrl + '/api/app/updateManager/' + this.item.materialPropertyId +
							'/partMaterialProperty',
							input
						).then(function(response) {
							if (response.data == false) {
								_this.loading = false;
								Toast({
									message: _this.$t('receipt').UpdateErrorMsg
								});
								return;
							}
						})
						.catch(function(error) { // 请求失败处理
							_this.loading = false;
							Toast({
								message: _this.$t('receipt').receiptErrorMsg
							});
							return;
						});
				}

				axios.post(this.apiUrl.apiUrl + '/api/app/inboundManager/receive', {
						ReceiptOrderItemId: this.receiptOrderItemId,
						ReceivedPkgQuantity: this.pkgQuantity,
						LocationId: this.receiveLocId,
						Pallet: this.palletNo,
						Carton: this.carton,
						SerialNo: this.serialNo,
						InventoryStatus: inventoryStatuCode,
						WorkerId: window.localStorage.getItem('userid'),
						IsWeipan: this.isWeipan == true ? 'Y' : 'N'

					})
					.then(function(response) {

						_this.loading = false;

						if (response.data == true) {

							_this.loading = false;
							Toast({
								message: _this.$t('receipt').receiptSuccessMsg
							});

							_this.quantity = _this.quantity - _this.pkgQuantity;

							_this.receiptOrderList.find(e => e.id == _this.receiptOrderId).receiptOrderItem.find(e => e
									.id == _this.receiptOrderItemId).expectedPkgQuantity = _this.receiptOrderItemList
								.find(e => e.id == _this.receiptOrderItemId).expectedPkgQuantity - _this
								.receiptOrderItemList
								.find(e => e.id == _this.receiptOrderItemId).receivedPkgQuantity - _this.pkgQuantity;

							_this.receiptOrderItemList.find(e => e.id == _this.receiptOrderItemId)
								.expectedPkgQuantity = _this.receiptOrderItemList
								.find(e => e.id == _this.receiptOrderItemId).expectedPkgQuantity - _this
								.receiptOrderItemList
								.find(e => e.id == _this.receiptOrderItemId).receivedPkgQuantity - _this.pkgQuantity;
							_this.code = '',
								_this.palletNo = '';
							_this.pkgQuantity = _this.$t('receipt').pkgQuantity[3] == undefined ? "" : _this.$t(
								'receipt').pkgQuantity[3];
							_this.carton = '';
							_this.serialNo = '';
							_this.inventoryStatu = _this.$t('receipt').inventoryStatus[0];
							_this.isWeipan = false;

							_this.packageUnit = '';
							_this.str1 = '';
							_this.str2 = '';
							_this.str3 = '';
							_this.str4 = '';
							_this.str5 = '';
							_this.str6 = '';
							_this.str7 = '';
							_this.str8 = '';
							_this.str9 = '';
							_this.str10 = '';
							_this.batchNo = '';
							_this.m_Str1 = '';
							_this.m_Str2 = '';
							_this.m_Str3 = '';
							_this.m_Str4 = '';
							_this.m_Str5 = '';
							_this.m_Str6 = '';
							_this.m_Str7 = '';
							_this.m_Str8 = '';
							_this.m_Str9 = '';
							_this.m_Str10 = '';
							_this.erpCode = '';
						}
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message: _this.$t('receipt').receiptErrorMsg
						});
					});
			},
			onClick() {
				uni.redirectTo({
					url: '/pages/home/cancelReceive'
				})
			},
			codeChange() {
				let code = this.code;
				let _this = this;
				let list = [];
				if (code.trim() != "") {
					let value = this.codeHelper.codeFilter(code);
					let orderlist = [];
					orderlist = JSON.parse(JSON.stringify(this.receiptOrderList));
					list = this.codeHelper.receiptFilter(orderlist, value);
					if (list.length == 0) {
						if (this.$t('receipt').synchronize != undefined && this.$t('receipt').synchronize == 1) {
							var obj = {
								'Material.XCode': {
									'=': value.code
								},
								AllocatedNumber: {
									'=': 0
								}
							};


							if (value.hasOwnProperty('batchNo')) {
								obj = {
									'Material.XCode': {
										'=': value.code
									},
									BatchNo: {
										'=': value.batchNo
									},
									AllocatedNumber: {
										'=': 0
									}
								};
							}


							axios.post(this.apiUrl.apiUrl + '/api/app/receiptBillManager/autoReceiptByCondition',
									obj)
								.then(function(response) {

									if (response.data.id == '00000000-0000-0000-0000-000000000000') {
										_this.receiptOrderId = '';
										_this.receiptOrder = '';
										_this.receiptOrderItemId = '';
										_this.receiptOrderItem = '';
									} else {
										_this.getReceiptOrders();

										_this.receiptOrderFilterList = list;
									}

								})
								.catch(function(error) { // 请求失败处理

									Toast({
										message: _this.$t('receipt').SynchronizeErrorMsg
									});
								});
						}


						this.receiptOrderId = '';
						this.receiptOrder = '';
						this.receiptOrderItemId = '';
						this.receiptOrderItem = '';
					}
					this.receiptOrderFilterList = list;
				} else {
					this.receiptOrderFilterList = this.receiptOrderList;
					list = this.receiptOrderList;
				}
				this.receiptOrders = [];
				list.map(e => {
					let value = e.xCode;
					this.receiptOrders.push(value);
				});

				if (list.length > 0) {
					this.receiptOrderId = list[0].id;
					this.receiptOrder = list[0].xCode;

					let receiptOrderItems = list[0].receiptOrderItem;

					this.receiptOrderItemList = receiptOrderItems;

					this.receiptOrderItems = [];

					receiptOrderItems.map(e => {
						let value =
							`${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;
						this.receiptOrderItems.push(value);
					});

					this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0].receivedPkgQuantity;
					this.receiptOrderItemId = receiptOrderItems[0].id;
					this.receiptOrderItem =
						`${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
					this.item = receiptOrderItems[0];

					this.packageUnit = receiptOrderItems[0].packageUnit != null ? receiptOrderItems[0].packageUnit
						.pkgLevel : "";
					this.str1 = receiptOrderItems[0].material.str1;
					this.str2 = receiptOrderItems[0].material.str2;
					this.str3 = receiptOrderItems[0].material.str3;
					this.str4 = receiptOrderItems[0].material.str4;
					this.str5 = receiptOrderItems[0].material.str5;
					this.str6 = receiptOrderItems[0].material.str6;
					this.str7 = receiptOrderItems[0].material.str7;
					this.str8 = receiptOrderItems[0].material.str8;
					this.str9 = receiptOrderItems[0].material.str9;
					this.str10 = receiptOrderItems[0].material.str10;
					this.batchNo = receiptOrderItems[0].materialProperty.batchNo;
					this.m_Str1 = receiptOrderItems[0].materialProperty.m_Str1;
					this.m_Str2 = receiptOrderItems[0].materialProperty.m_Str2;
					this.m_Str3 = receiptOrderItems[0].materialProperty.m_Str3;
					this.m_Str4 = receiptOrderItems[0].materialProperty.m_Str4;
					this.m_Str5 = receiptOrderItems[0].materialProperty.m_Str5;
					this.m_Str6 = receiptOrderItems[0].materialProperty.m_Str6;
					this.m_Str7 = receiptOrderItems[0].materialProperty.m_Str7;
					this.m_Str8 = receiptOrderItems[0].materialProperty.m_Str8;
					this.m_Str9 = receiptOrderItems[0].materialProperty.m_Str9;
					this.m_Str10 = receiptOrderItems[0].materialProperty.m_Str10;
					this.erpCode = receiptOrderItems[0].erpCode;


				} else {
					this.quantity = '';
					this.receiptOrderItemId = '';
					this.receiptOrderItem = '';

					this.packageUnit = '';
					this.str1 = '';
					this.str2 = '';
					this.str3 = '';
					this.str4 = '';
					this.str5 = '';
					this.str6 = '';
					this.str7 = '';
					this.str8 = '';
					this.str9 = '';
					this.str10 = '';
					this.batchNo = '';
					this.m_Str1 = '';
					this.m_Str2 = '';
					this.m_Str3 = '';
					this.m_Str4 = '';
					this.m_Str5 = '';
					this.m_Str6 = '';
					this.m_Str7 = '';
					this.m_Str8 = '';
					this.m_Str9 = '';
					this.m_Str10 = '';
					this.erpCode = '';
				}
			},
			onRefresh() {

				setTimeout(() => {
					Toast(this.$t('receipt').RefreshSuccesMsg);

					this.getLocations();
					this.getReceiptOrders();

					this.isLoading = false;
				}, 1000);
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
		font-size: 12px
	}

	.cancel {
		display: block;
		text-align: right;
		margin: 0px auto 0px auto;
		font-size: 15px;
		color: #007AFF;
		padding: 0.5rem;
	}

	.van-pull-refresh {
		overflow: initial !important;
	}
</style>
