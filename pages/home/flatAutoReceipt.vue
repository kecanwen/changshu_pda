<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group  v-show='i18n.palletNo[1]==1'>
				<van-field v-model="palletNo" ref="palletNo" :label="i18n.palletNo[0]" :rules="[{ required: true, message: i18n.palletNoMsg}]" required>
				</van-field>
		</van-cell-group>
		
		<van-cell-group v-show='i18n.fromLocCode[1]==1'>
			<van-field v-model="fromLocCode" :label="i18n.fromLocCode[0]" :rules="[{ required: true, message: i18n.fromLocCodeMsg }]"
			 required />
		</van-cell-group>
		
		<van-cell-group  v-show='i18n.code[1]==1'>
			<van-field v-model="code" :label="i18n.code[0]" :rules="[{ required: true, message: i18n.codeMsg}]" required/>
		</van-cell-group>
		<van-cell-group v-show='i18n.pkgQuantity[1]==1'>
			<van-field v-model="pkgQuantity" type="number" :label="i18n.pkgQuantity[0]" :rules="[{ required: true, message: i18n.pkgQuantityMsg}]"
			required></van-field>
		</van-cell-group>
		<van-cell-group  v-show='i18n.receiptLocation[1]==1'>
			<van-select :label="i18n.receiptLocation[0]" :placeholder="i18n.dropdownMsg" v-model="receiveLoc" :rules="[{ required: true, message: i18n.receiptLocationMsg }]"
			 required :columns="receiveLocs" @defclick="receiveLocOnChange" />
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
				fromLocCode:'',
				receiveLocId: '',
				receiveLoc: '',
				receiveLocList: [],
				receiveLocs: [],
				pkgQuantity: typeof(this.$t('autoReceipt').pkgQuantity[2])==undefined?'': this.$t('autoReceipt').pkgQuantity[2],
				carton: '',
				serialNo: '',
				inventoryStatu:  this.$t('flatAutoReceipt').inventoryStatus[0],
				inventoryStatus:this.$t('flatAutoReceipt').inventoryStatus,
				loading: false,
				quantity: '',
				isWeipan:false,
				code:'',
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
				m_Str10:''
				
			}
		},
		computed: {
			i18n() {
				return this.$t('flatAutoReceipt')
			}
		},
		onLoad() {
			this.mounted();
			this.getLocations();
		},
		watch:{
		    code: function (str) {
		            if (typeof str ==='string'){
		                if (str.trim().length!==0){
		                    this.debounce(this.codeChange,1000);
		                }else {}
		            }
					},
		},
	
		methods: {
			mounted() {
				
				uni.setNavigationBarTitle({
				            title:this.$t('flatAutoReceipt').title
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
							XCode: true
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
							message:_this.$t('flatAutoReceipt').locationErrorMsg
						});
					});
			},
			receiveLocOnChange(index) {
			
			
				this.receiveLocId = this.receiveLocList[index].id;
			},		
			onSubmit() {
	
				this.loading = true;
	
				let _this = this;
				let inventoryStatuCode=this.$t('flatAutoReceipt').inventoryStatusCode[this.inventoryStatus.indexOf(this.inventoryStatu)];
				
				let input={
						materialCode:this.code,
						InventoryStatus: inventoryStatuCode,
						IsWeipan:this.isWeipan==true?'Y':'N',
						batchNo:this.batchNo,
						m_Str1:this.m_Str1,
						m_Str2:this.m_Str2,
						m_Str3:this.m_Str3,
						m_Str4:this.m_Str4,
						m_Str5:this.m_Str5,
						m_Str6:this.m_Str6,
						m_Str7:this.m_Str7,
						m_Str8:this.m_Str8,
						m_Str9:this.m_Str9,
						m_Str10:this.m_Str10,
						expectedPkgQuantity:this.pkgQuantity
	
					};
					
					if(this.palletNo!="")
					{
						input.condition['pallet']={'=': this.palletNo}
					}else if(this.fromLocCode!="")
					{
						input.condition['fromLocCode']={'=': this.fromLocCode}
					}else if(this.carton!="")
					{
						input.condition['carton']={'=': this.carton}
					}else if(this.serialNo!="")
					{
						input.condition['serialNo']={'=': this.serialNo}
					}
					
					else if(this.$t('flatAutoReceipt').receiptLocation[1]==1)
					{
						input.condition['LocationId']={'=': this.receiveLocId}
					}
						
								
				axios.post(this.apiUrl.apiUrl + '/api/app/AutoInboundManager/receive', input)
					.then(function(response) {
						_this.loading = false;
							if(response.status==200)
							{
							Toast({
								message:  _this.$t('flatAutoReceipt').receiptSuccessMsg
							});
							_this.fromLocCode='';
							_this.palletNo = '';
							_this.pkgQuantity = '';
							_this.carton = '';
							_this.serialNo = '';
							_this.inventoryStatu = _this.$t('flatAutoReceipt').inventoryStatus[0];
							_this.isWeipan=false;
							_this.code='';
							
							
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
							}
	
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message:_this.$t('flatAutoReceipt').receiptErrorMsg
						});
					});
			},
			
			codeChange(){
				if(this.code.trim()!="")
				{
				let value=this.codeHelper.codeFilter(this.code);
				this.code=value.code;
				}
			},
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
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
</style>
