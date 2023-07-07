<template>

	<van-form  style="margin: 3rem;">
		<van-cell-group v-show='i18n.cancelReceive[1]==1'>
			
		<div round block @click="onClick" >
			<span  class="cancel">{{i18n.cancelReceive[0]}}</span>
		</div>
		</van-cell-group>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">	
			
			<van-cell-group  v-show='i18n.palletNo[1]==1'>
					<van-field v-model="palletNo" ref="palletNo" :label="i18n.palletNo[0]" :rules="[{ required: true, message: i18n.palletNoMsg}]"
					required><template #button>
							<p>{{count}}</p>
						</template></van-field>
			</van-cell-group>
			
			<van-cell-group v-show='i18n.fromLocCode[1]==1'>
				<van-field v-model="fromLocCode" :label="i18n.fromLocCode[0]" :rules="[{ required: true, message: i18n.fromLocCodeMsg }]"
				 required />
			</van-cell-group>
			
			<van-cell-group  v-show='i18n.code[1]==1'>
				<van-field v-model="code" :label="i18n.code[0]"/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.receiptLocation[1]==1'>
				<van-select :label="i18n.receiptLocation[0]" :placeholder="i18n.dropdownMsg" v-model="receiveLoc" :rules="[{ required: true, message: i18n.receiptLocationMsg }]"
				 required :columns="receiveLocs" @defclick="receiveLocOnChange" />
			</van-cell-group>
			
			<van-cell-group v-show='i18n.receiptOrders[1]==1'>
				<van-select :label="i18n.receiptOrders[0]" :placeholder="i18n.dropdownMsg" v-model="receiptOrder" :rules="[{ required: true, message: i18n.receiptOrdersMsg }]"
				 required :columns="receiptOrders" @defclick="receiptOrderOnChange" />
			</van-cell-group>
			<van-cell-group v-show='i18n.receiptOrderItems[1]==1'>
				<van-select :label="i18n.receiptOrderItems[0]" :placeholder="i18n.dropdownMsg" v-model="receiptOrderItem" :rules="[{ required: true, message: i18n.receiptOrderItemMsg }]"
				 required :columns="receiptOrderItems" @defclick="receiptOrderItemOnChange" />
			</van-cell-group>
			
			<van-cell-group  v-show='i18n.packageUnit[1]==1'>
				<van-field v-model="packageUnit" :label="i18n.packageUnit[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str1[1]==1'>
				<van-field v-model="str1" :label="i18n.str1[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str2[1]==1'>
				<van-field v-model="str2" :label="i18n.str2[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str3[1]==1'>
				<van-field v-model="str3" :label="i18n.str3[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str4[1]==1'>
				<van-field v-model="str4" :label="i18n.str4[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str5[1]==1'>
				<van-field v-model="str5" :label="i18n.str5[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str6[1]==1'>
				<van-field v-model="str6" :label="i18n.str6[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str7[1]==1'>
				<van-field v-model="str7" :label="i18n.str7[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str8[1]==1'>
				<van-field v-model="str8" :label="i18n.str8[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str9[1]==1'>
				<van-field v-model="str9" :label="i18n.str9[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.str10[1]==1'>
				<van-field v-model="str10" :label="i18n.str10[0]" readonly/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.batchNo[1]==1'>
				<van-field v-model="batchNo" :label="i18n.batchNo[0]" :readonly='(typeof(i18n.batchNo[2])!=undefined&&i18n.batchNo[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str1[1]==1&&typeof(i18n.m_Str1[3])==undefined'>
				<van-field v-model="m_Str1" :label="i18n.m_Str1[0]" :readonly='(typeof(i18n.m_Str1[2])!=undefined&&i18n.m_Str1[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str1[1]==1&&typeof(i18n.m_Str1[3])!=undefined'>
				<van-select :label="i18n.m_Str1[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str1" :columns="i18n.m_Str1[3]!=undefined?i18n.m_Str1[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str2[1]==1&&typeof(i18n.m_Str2[3])==undefined'>
				<van-field v-model="m_Str2" :label="i18n.m_Str2[0]" :readonly='(typeof(i18n.m_Str2[2])!=undefined&&i18n.m_Str2[2]==0)?false:true'/>
			</van-cell-group>
			
			<van-cell-group v-show='i18n.m_Str2[1]==1&&typeof(i18n.m_Str2[3])!=undefined'>
				<van-select :label="i18n.m_Str2[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str2" :columns="i18n.m_Str2[3]!=undefined?i18n.m_Str2[3]:[]" />
			</van-cell-group>
			
			<van-cell-group  v-show='i18n.m_Str3[1]==1&&typeof(i18n.m_Str3[3])==undefined'>
				<van-field v-model="m_Str3" :label="i18n.m_Str3[0]" :readonly='(typeof(i18n.m_Str1[3])!=undefined&&i18n.m_Str1[3]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str3[1]==1&&typeof(i18n.m_Str3[3])!=undefined'>
				<van-select :label="i18n.m_Str3[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str3" :columns="i18n.m_Str3[3]!=undefined?i18n.m_Str3[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str4[1]==1&&typeof(i18n.m_Str4[3])==undefined'>
				<van-field v-model="m_Str4" :label="i18n.m_Str4[0]" :readonly='(typeof(i18n.m_Str4[2])!=undefined&&i18n.m_Str4[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str4[1]==1&&typeof(i18n.m_Str4[3])!=undefined'>
				<van-select :label="i18n.m_Str4[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str4" :columns="i18n.m_Str4[3]!=undefined?i18n.m_Str4[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str5[1]==1&&typeof(i18n.m_Str5[3])==undefined'>
				<van-field v-model="m_Str5" :label="i18n.m_Str5[0]" :readonly='(typeof(i18n.m_Str5[2])!=undefined&&i18n.m_Str5[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str5[1]==1&&typeof(i18n.m_Str5[3])!=undefined'>
				<van-select :label="i18n.m_Str5[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str5" :columns="i18n.m_Str5[3]!=undefined?i18n.m_Str5[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str6[1]==1&&typeof(i18n.m_Str6[3])==undefined'>
				<van-field v-model="m_Str6" :label="i18n.m_Str6[0]" :readonly='(typeof(i18n.m_Str6[2])!=undefined&&i18n.m_Str6[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str6[1]==1&&typeof(i18n.m_Str6[3])!=undefined'>
				<van-select :label="i18n.m_Str6[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str6" :columns="i18n.m_Str6[3]!=undefined?i18n.m_Str6[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str7[1]==1&&typeof(i18n.m_Str7[3])==undefined'>
				<van-field v-model="m_Str7" :label="i18n.m_Str7[0]" :readonly='(typeof(i18n.m_Str7[2])!=undefined&&i18n.m_Str7[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str7[1]==1&&typeof(i18n.m_Str7[3])!=undefined'>
				<van-select :label="i18n.m_Str7[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str7" :columns="i18n.m_Str7[3]!=undefined?i18n.m_Str7[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str8[1]==1&&typeof(i18n.m_Str8[3])==undefined'>
				<van-field v-model="m_Str8" :label="i18n.m_Str8[0]" :readonly='(typeof(i18n.m_Str8[2])!=undefined&&i18n.m_Str8[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str8[1]==1&&typeof(i18n.m_Str8[3])!=undefined'>
				<van-select :label="i18n.m_Str8[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str8" :columns="i18n.m_Str8[3]!=undefined?i18n.m_Str8[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str9[1]==1&&typeof(i18n.m_Str9[3])==undefined'>
				<van-field v-model="m_Str9" :label="i18n.m_Str9[0]" :readonly='(typeof(i18n.m_Str9[2])!=undefined&&i18n.m_Str9[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str9[1]==1&&typeof(i18n.m_Str9[3])!=undefined'>
				<van-select :label="i18n.m_Str9[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str9" :columns="i18n.m_Str9[3]!=undefined?i18n.m_Str9[3]:[]" />
			</van-cell-group>
			<van-cell-group  v-show='i18n.m_Str10[1]==1&&typeof(i18n.m_Str10[3])==undefined'>
				<van-field v-model="m_Str10" :label="i18n.m_Str10[0]" :readonly='(typeof(i18n.m_Str10[2])!=undefined&&i18n.m_Str10[2]==0)?false:true'/>
			</van-cell-group>
			<van-cell-group v-show='i18n.m_Str10[1]==1&&typeof(i18n.m_Str10[3])!=undefined'>
				<van-select :label="i18n.m_Str10[0]" :placeholder="i18n.dropdownMsg" v-model="m_Str10" :columns="i18n.m_Str10[3]!=undefined?i18n.m_Str10[3]:[]" />
			</van-cell-group>
			
			<van-cell-group v-show='i18n.erpCode[1]==1&&typeof(i18n.erpCode[3])!=undefined'>
				<van-select :label="i18n.erpCode[0]" :placeholder="i18n.dropdownMsg" v-model="erpCode" :columns="i18n.erpCode[3]!=undefined?i18n.erpCode[3]:[]" />
			</van-cell-group>	
			<van-cell-group v-show='i18n.pkgQuantity[1]==1'>
				<van-field v-model="pkgQuantity" type="number" :label="i18n.pkgQuantity[0]" :rules="[{ required: true, message: i18n.pkgQuantityMsg}]"
				required> <template #button>
						<p>{{quantity}}</p>
					</template></van-field>
			</van-cell-group>
			<van-cell-group v-show='i18n.carton[1]==1'>
				<van-field v-model="carton" :label="i18n.carton[0]" />
			</van-cell-group>
			<van-cell-group v-show='i18n.serialNo[1]==1'>
				<van-field v-model="serialNo" :label="i18n.serialNo[0]" />
			</van-cell-group>
			<van-cell-group v-show='i18n.inventoryStatu[1]==1'>
				<van-select :label="i18n.inventoryStatu[0]" :placeholder="i18n.dropdownMsg" v-model="inventoryStatu" :columns="inventoryStatus" />
			</van-cell-group>
			
			<div class="remember" v-show='i18n.isWeipan[1]==1'>
				<van-checkbox v-model="isWeipan" shape="square" label-disabled>{{i18n.isWeipan[0]}}</van-checkbox>
			</div>

			<div style="margin: 50px;">
				<van-button :loading="loading" round block type="info" @click="onSubmit">
					{{i18n.submit}}
				</van-button>
			</div>
		</van-pull-refresh>
	</van-form>
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
				fromLocCode:'',
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
				item:{},
				receiptOrderItemList: [],
				receiptOrderItems: [],
				pkgQuantity: this.$t('receipt').pkgQuantity[3]==undefined?"":this.$t('receipt').pkgQuantity[3],
				carton: '',
				serialNo: '',
				inventoryStatu:  this.$t('batchReceipt').inventoryStatus[0],
				inventoryStatus:this.$t('batchReceipt').inventoryStatus,
				loading: false,
				isLoading: false,
				quantity: '',
				isWeipan:false,
				code:'',
				packageUnit:'',
				str1:'',
				str2:'',
				str3:'',
				str4:'',
				str5:'',
				str6:'',
				str7:'',
				str8:'',
				str9:'',
				str10:'',
				batchNo:'',
				m_Str1:'',
				m_Str2:'',
				m_Str3:'',
				m_Str4:'',
				m_Str5:'',
				m_Str6:'',
				m_Str7:'',
				m_Str8:'',
				m_Str9:'',
				m_Str10:'',
				erpCode:'',
				count:'',
				
			}
		},
		computed: {
			i18n() {
				return this.$t('batchReceipt')
			}
		},
		watch:{
		        
		 palletNo:function (str) {
		        if (typeof str ==='string'){
		            if (str.trim().length!==0){
		                this.debounce(this.onChange,1000);
		            }else {}
		        }
		    },
		code: function (str) {
		        if (typeof str ==='string'){
		            if (str.trim().length!==0){
		                this.debounce(this.codeChange,1000);
		            }else {}
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
				            title:this.$t('batchReceipt').title
				        });
			},

			getLocations() {
				var _this = this;

				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/location', {
						condition: {
							locType: { in: ["RECEIVE", "CROSS_DOCK"]
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
							message:_this.$t('batchReceipt').locationErrorMsg
						});
					});
			},

			getReceiptOrders() {

				var _this = this;

				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/receiptOrder', {
						condition: {
							xStatus: { in: ["ACTIVE", "RECEIVING"]
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
								let value = `${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;
								_this.receiptOrderItems.push(value);
							});

							_this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0].receivedPkgQuantity;
							_this.receiptOrderItemId = receiptOrderItems[0].id;
							_this.receiptOrderItem =`${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
							_this.item=receiptOrderItems[0];
							
							_this.packageUnit=receiptOrderItems[0].packageUnit!=null?receiptOrderItems[0].packageUnit.pkgLevel:"";
							_this.str1=receiptOrderItems[0].material.str1;
							_this.str2=receiptOrderItems[0].material.str2;
							_this.str3=receiptOrderItems[0].material.str3;
							_this.str4=receiptOrderItems[0].material.str4;
							_this.str5=receiptOrderItems[0].material.str5;
							_this.str6=receiptOrderItems[0].material.str6;
							_this.str7=receiptOrderItems[0].material.str7;
							_this.str8=receiptOrderItems[0].material.str8;
							_this.str9=receiptOrderItems[0].material.str9;
							_this.str10=receiptOrderItems[0].material.str10;
							_this.batchNo=receiptOrderItems[0].materialProperty.batchNo;
							_this.m_Str1=receiptOrderItems[0].materialProperty.m_Str1;
							_this.m_Str2=receiptOrderItems[0].materialProperty.m_Str2;
							_this.m_Str3=receiptOrderItems[0].materialProperty.m_Str3;
							_this.m_Str4=receiptOrderItems[0].materialProperty.m_Str4;
							_this.m_Str5=receiptOrderItems[0].materialProperty.m_Str5;
							_this.m_Str6=receiptOrderItems[0].materialProperty.m_Str6;
							_this.m_Str7=receiptOrderItems[0].materialProperty.m_Str7;
							_this.m_Str8=receiptOrderItems[0].materialProperty.m_Str8;
							_this.m_Str9=receiptOrderItems[0].materialProperty.m_Str9;
							_this.m_Str10=receiptOrderItems[0].materialProperty.m_Str10;
							_this.erpCode=receiptOrderItems[0].erpCode;
						}

					})
					.catch(function(error) { // 请求失败处理
						Toast({
							message: _this.$t('batchReceipt').receiptOrdersErrorMsg
						});
					});
			},

			receiveLocOnChange(index) {


				this.receiveLocId = this.receiveLocList[index].id;
			},

			receiptOrderOnChange(index) {
				

                let orders=this.code.length>0?this.receiptOrderFilterList:this.receiptOrderList;
				
				this.receiptOrderId = orders[index].id;

				let receiptOrderItems = orders[index].receiptOrderItem;

				this.receiptOrderItemList = receiptOrderItems;

				this.receiptOrderItems = [];

				receiptOrderItems.map(e => {
					let value = `${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;
					
					this.receiptOrderItems.push(value);
				});


				this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0].receivedPkgQuantity;
				this.receiptOrderItemId = receiptOrderItems[0].id;
				this.receiptOrderItem = `${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
				this.item=receiptOrderItems[0];
				
				this.packageUnit=receiptOrderItems[0].packageUnit!=null?receiptOrderItems[0].packageUnit.pkgLevel:"";
				this.str1=receiptOrderItems[0].material.str1;
				this.str2=receiptOrderItems[0].material.str2;
				this.str3=receiptOrderItems[0].material.str3;
				this.str4=receiptOrderItems[0].material.str4;
				this.str5=receiptOrderItems[0].material.str5;
				this.str6=receiptOrderItems[0].material.str6;
				this.str7=receiptOrderItems[0].material.str7;
				this.str8=receiptOrderItems[0].material.str8;
				this.str9=receiptOrderItems[0].material.str9;
				this.str10=receiptOrderItems[0].material.str10;
				this.batchNo=receiptOrderItems[0].materialProperty.batchNo;
				this.m_Str1=receiptOrderItems[0].materialProperty.m_Str1;
				this.m_Str2=receiptOrderItems[0].materialProperty.m_Str2;
				this.m_Str3=receiptOrderItems[0].materialProperty.m_Str3;
				this.m_Str4=receiptOrderItems[0].materialProperty.m_Str4;
				this.m_Str5=receiptOrderItems[0].materialProperty.m_Str5;
				this.m_Str6=receiptOrderItems[0].materialProperty.m_Str6;
				this.m_Str7=receiptOrderItems[0].materialProperty.m_Str7;
				this.m_Str8=receiptOrderItems[0].materialProperty.m_Str8;
				this.m_Str9=receiptOrderItems[0].materialProperty.m_Str9;
				this.m_Str10=receiptOrderItems[0].materialProperty.m_Str10;
				this.erpCode=receiptOrderItems[0].erpCode;

			},
			receiptOrderItemOnChange(index) {

				this.receiptOrderItemId = this.receiptOrderItemList[index].id;
				this.quantity = this.receiptOrderItemList[index].expectedPkgQuantity - this.receiptOrderItemList[index].receivedPkgQuantity;
			},
			onChange(){
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
				
							if(response.data.totalCount>0)
							{
								_this.count=response.data.totalCount
							}else
							{
								_this.count='';
							}
						})
						.catch(function(error) { // 请求失败处理
				
							Toast({
								message: _this.$t('batchReceipt').taskErrorMsg
							});
						});
				}
			},
			onSubmit() {

				this.loading = true;
				
				let _this = this;
				let inventoryStatuCode=this.$t('batchReceipt').inventoryStatusCode[this.inventoryStatus.indexOf(this.inventoryStatu)];
				
				if(this.$t('batchReceipt').pkgQuantity[2]==0)
				{
					if(this.pkgQuantity>this.quantity)
					{
						Toast({
							message:_this.$t('batchReceipt').OverPkgQuantity
						});
						
						this.loading = false;
						return;
					}
				}
				
				let input={};
				
				if(this.batchNo!=this.item.materialProperty.batchNo)
				{
					input['BatchNo']=this.batchNo;
				}
				if(this.m_Str1!=this.item.materialProperty.m_Str1)
				{
					input['M_Str1']=this.m_Str1;
				}
				if(this.m_Str2!=this.item.materialProperty.m_Str2)
				{
					input['M_Str2']=this.m_Str2;
				}
				if(this.m_Str3!=this.item.materialProperty.m_Str3)
				{
					input['M_Str3']=this.m_Str3;
				}
				if(this.m_Str4!=this.item.materialProperty.m_Str4)
				{
					input['M_Str4']=this.m_Str4;
				}
				if(this.m_Str5!=this.item.materialProperty.m_Str5)
				{
					input['M_Str5']=this.m_Str5;
				}
				if(this.m_Str6!=this.item.materialProperty.m_Str6)
				{
					input['M_Str6']=this.m_Str6;
				}
				if(this.m_Str7!=this.item.materialProperty.m_Str7)
				{
					input['M_Str7']=this.m_Str7;
				}
				if(this.m_Str8!=this.item.materialProperty.m_Str8)
				{
					input['M_Str8']=this.m_Str8;
				}
				if(this.m_Str9!=this.item.materialProperty.m_Str9)
				{
					input['M_Str9']=this.m_Str9;
				}
				if(this.m_Str10!=this.item.materialProperty.m_Str10)
				{
					input['M_Str10']=this.m_Str10;
				}
				if(this.m_Str10!=this.item.materialProperty.m_Str10)
				{
					input['M_Str10']=this.m_Str10;
				}
				
				if(Object.keys(input).length!=0)
				{
				axios.post(this.apiUrl.apiUrl+'/api/app/updateManager/'+this.item.materialPropertyId+'/partMaterialProperty',
				input
				).then(function(response) {
					if (response.data == false) {
						_this.loading = false;
						Toast({
							message:_this.$t('batchReceipt').UpdateErrorMsg
						});
						return;
					}
				})
				.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message:_this.$t('batchReceipt').receiptErrorMsg
						});
						return;
					});
				}
				
				let input2={
						//ReceiptOrderItemId: this.receiptOrderItemId,
						ReceivedPkgQuantity: this.pkgQuantity,
						InventoryStatus: inventoryStatuCode,
						WorkerId: window.localStorage.getItem('userid'),
						IsWeipan:this.isWeipan==true? 'Y':'N',
						SerialNos:this.code.substring(0,this.code.length-1).split(';')
					};
					
					if(this.palletNo!="")
					{
						input2['pallet']=this.palletNo
					}
					 if(this.fromLocCode!="")
					{
						input2['fromLocCode']=this.fromLocCode
					}
					 if(this.carton!="")
					{
						input2['carton']=this.carton
					}
					 if(this.serialNo!="")
					{
						input2['serialNo']=this.serialNo
					}
					 if(this.$t('batchReceipt').receiptLocation[1]==1)
					{
						input2['LocationId']=this.receiveLocId
					}
				
				
				axios.post(this.apiUrl.apiUrl + '/api/app/inboundManager/receive',input2 )
					.then(function(response) {

						_this.loading = false;

						if (response.data == true) {

							_this.loading = false;
							Toast({
								message:  _this.$t('batchReceipt').receiptSuccessMsg
							});

							_this.quantity = _this.quantity - _this.pkgQuantity;


							_this.receiptOrderItemList.find(e => e.id == _this.receiptOrderItemId).expectedPkgQuantity = _this.receiptOrderItemList
								.find(e => e.id == _this.receiptOrderItemId).expectedPkgQuantity - _this.pkgQuantity;

							_this.palletNo = '';
							_this.pkgQuantity = '';
							_this.carton = '';
							_this.serialNo = '';
							_this.inventoryStatu = _this.$t('batchReceipt').inventoryStatus[0];
							_this.isWeipan=false;
							
							_this.packageUnit='';
							_this.str1='';
							_this.str2='';
							_this.str3='';
							_this.str4='';
							_this.str5='';
							_this.str6='';
							_this.str7='';
							_this.str8='';
							_this.str9='';
							_this.str10='';
							_this.batchNo='';
							_this.m_Str1='';
							_this.m_Str2='';
							_this.m_Str3='';
							_this.m_Str4='';
							_this.m_Str5='';
							_this.m_Str6='';
							_this.m_Str7='';
							_this.m_Str8='';
							_this.m_Str9='';
							_this.m_Str10='';
							_this.erpCode='';
							
							_this.code='';
							
						}
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message:_this.$t('batchReceipt').receiptErrorMsg
						});
					});
			},
			onClick(){
				 uni.redirectTo({url: '/pages/home/cancelReceive'})
			},
			codeChange(){
			
			let code=this.code;
			
			if(this.code.charAt(this.code.length-1)==";")
			{
				return;
			}
			
			if(code.length>1)
			{
				let codes=code.split(';');
				
				code=codes[codes.length-1];
			}
			
			let _this = this;
			let list=[];
			if(code.trim()!="")
			{
			let value=this.codeHelper.codeFilter(code);
			let orderlist=[];
		    orderlist = JSON.parse(JSON.stringify(this.receiptOrderList));
		    list= this.codeHelper.receiptFilter(orderlist,value);
			if(list.length==0)
			{
			   if(this.$t('batchReceipt').synchronize!=undefined && this.$t('batchReceipt').synchronize==1)
				{
					var obj={'Material.XCode':{'=':value.code},AllocatedNumber:{'=':0}};
					
					
					if(value.hasOwnProperty('batchNo'))
					{
						obj={'Material.XCode':{'=':value.code},BatchNo:{'=':value.batchNo},AllocatedNumber:{'=':0}};
					}

					
					axios.post(this.apiUrl.apiUrl + '/api/app/receiptBillManager/autoReceiptByCondition', 
							obj)
						.then(function(response) {
							
							if(response.data.id=='00000000-0000-0000-0000-000000000000')
							{
								_this.receiptOrderId='';
								_this.receiptOrder='';
								_this.receiptOrderItemId='';
								_this.receiptOrderItem='';
							}else{
								_this.getReceiptOrders();
								
								_this.receiptOrderFilterList=list;
							}
							
						})
						.catch(function(error) { // 请求失败处理
					
							Toast({
								message:_this.$t('batchReceipt').SynchronizeErrorMsg
							});
						});
				}
				
				
				this.receiptOrderId='';
				this.receiptOrder='';
				this.receiptOrderItemId='';
				this.receiptOrderItem='';
			}
			this.receiptOrderFilterList=list;
			}else
			{
				this.receiptOrderFilterList=this.receiptOrderList;
				list=this.receiptOrderList;
			}
			this.receiptOrders=[];
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
            		let value = `${e.material.xCode} ${e.material.xName} ${e.material.spec==null?"":e.material.spec}`;
            		this.receiptOrderItems.push(value);
            	});
            
			this.quantity = receiptOrderItems[0].expectedPkgQuantity - receiptOrderItems[0].receivedPkgQuantity;
			this.receiptOrderItemId = receiptOrderItems[0].id;
			this.receiptOrderItem =`${receiptOrderItems[0].material.xCode} ${receiptOrderItems[0].material.xName} ${receiptOrderItems[0].material.spec==null?"":receiptOrderItems[0].material.spec}`;
			this.item=receiptOrderItems[0];
			
			this.packageUnit=receiptOrderItems[0].packageUnit!=null?receiptOrderItems[0].packageUnit.pkgLevel:"";
			this.str1=receiptOrderItems[0].material.str1;
			this.str2=receiptOrderItems[0].material.str2;
			this.str3=receiptOrderItems[0].material.str3;
			this.str4=receiptOrderItems[0].material.str4;
			this.str5=receiptOrderItems[0].material.str5;
			this.str6=receiptOrderItems[0].material.str6;
			this.str7=receiptOrderItems[0].material.str7;
			this.str8=receiptOrderItems[0].material.str8;
			this.str9=receiptOrderItems[0].material.str9;
			this.str10=receiptOrderItems[0].material.str10;
			this.batchNo=receiptOrderItems[0].materialProperty.batchNo;
			this.m_Str1=receiptOrderItems[0].materialProperty.m_Str1;
			this.m_Str2=receiptOrderItems[0].materialProperty.m_Str2;
			this.m_Str3=receiptOrderItems[0].materialProperty.m_Str3;
			this.m_Str4=receiptOrderItems[0].materialProperty.m_Str4;
			this.m_Str5=receiptOrderItems[0].materialProperty.m_Str5;
			this.m_Str6=receiptOrderItems[0].materialProperty.m_Str6;
			this.m_Str7=receiptOrderItems[0].materialProperty.m_Str7;
			this.m_Str8=receiptOrderItems[0].materialProperty.m_Str8;
			this.m_Str9=receiptOrderItems[0].materialProperty.m_Str9;
			this.m_Str10=receiptOrderItems[0].materialProperty.m_Str10;
			this.erpCode=receiptOrderItems[0].erpCode;
			
            	
            }else{
				this.quantity = '';
				this.receiptOrderItemId = '';
				this.receiptOrderItem ='';
				
				this.packageUnit='';
				this.str1='';
				this.str2='';
				this.str3='';
				this.str4='';
				this.str5='';
				this.str6='';
				this.str7='';
				this.str8='';
				this.str9='';
				this.str10='';
				this.batchNo='';
				this.m_Str1='';
				this.m_Str2='';
				this.m_Str3='';
				this.m_Str4='';
				this.m_Str5='';
				this.m_Str6='';
				this.m_Str7='';
				this.m_Str8='';
				this.m_Str9='';
				this.m_Str10='';
				this.erpCode='';
			}
			
			if(this.code.charAt(this.code.length-1)!=";")
			{
			this.code=this.code+";"
			}
			},
			onRefresh() {

				setTimeout(() => {
					Toast(this.$t('batchReceipt').RefreshSuccesMsg);

					this.getLocations();
					this.getReceiptOrders();

					this.isLoading = false;
				}, 1000);
			},
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    },
			fromLocCodeChange(){
				if(this.fromLocCode!='')
				{
					this.receiveLoc=this.fromLocCode;
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
	.cancel{
	    display: block;
		text-align:right;
		margin:0px auto 0px auto;   
		font-size: 15px;
		color:#007AFF;
		padding: 0.5rem;
	}
</style>
