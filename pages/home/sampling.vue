<template>
	<van-form @submit="onSubmit" style="margin:3rem;">
		<van-cell-group v-show='i18n.palletNo[1]==1'>
			<van-field v-model="palletNo" ref="palletNo" :label="i18n.palletNo[0]" :rules="[{ required: true, message: i18n.palletNoMsg }]"
			 required />
		</van-cell-group>
	
		<van-cell-group>
	
			<van-field v-model="number" :color="'#0FAFAA'" readonly />
	
			<van-nav-bar v-bind:title="material" :left-text="i18n.previous[0]" :right-text="i18n.next[0]" @click-left="onClickLeft"
			 @click-right="onClickRight" :color="'#4fc08d'" />
	
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
			<van-field v-model="batchNo" :label="i18n.batchNo[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str1[1]==1'>
			<van-field v-model="m_Str1" :label="i18n.m_Str1[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str2[1]==1'>
			<van-field v-model="m_Str2" :label="i18n.m_Str2[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str3[1]==1'>
			<van-field v-model="m_Str3" :label="i18n.m_Str3[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str4[1]==1'>
			<van-field v-model="m_Str4" :label="i18n.m_Str4[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str5[1]==1'>
			<van-field v-model="m_Str5" :label="i18n.m_Str5[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str6[1]==1'>
			<van-field v-model="m_Str6" :label="i18n.m_Str6[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str7[1]==1'>
			<van-field v-model="m_Str7" :label="i18n.m_Str7[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str8[1]==1'>
			<van-field v-model="m_Str8" :label="i18n.m_Str8[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str9[1]==1'>
			<van-field v-model="m_Str9" :label="i18n.m_Str9[0]" readonly/>
		</van-cell-group>
		<van-cell-group  v-show='i18n.m_Str10[1]==1'>
			<van-field v-model="m_Str10" :label="i18n.m_Str10[0]" readonly/>
		</van-cell-group>
	
		<van-cell-group v-show='i18n.movedPkgQty[1]==1'>
			<van-field v-model="planPkgQuantity" :label="i18n.movedPkgQty[0]" type="number" :rules="[{ required: true, message: i18n.planPkgQuantityMsg }]"
			 required>
				<template #button>
					<p>{{quantity}}</p>
				</template>
			</van-field>
		</van-cell-group>
	
		<van-cell-group v-show='i18n.topallet[1]==1'>
			<van-field v-model="toPallet" :label="i18n.topallet[0]" />
		</van-cell-group>
	
		<van-cell-group v-show='i18n.tocarton[1]==1'>
			<van-field v-model="toCarton" :label="i18n.tocarton[0]" />
		</van-cell-group>
	
		<van-cell-group v-show='i18n.backpallet[1]==1'>
			<van-field v-model="backPallet" :label="i18n.backpallet[0]" />
		</van-cell-group>
	
		<van-cell-group v-show='i18n.backcarton[1]==1'>
			<van-field v-model="backCarton" :label="i18n.backcarton[0]" />
		</van-cell-group>
	
		<div style="margin: 16px;">
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
				palletNo: '',
				number: "0/0",
				material: '',
				planPkgQuantity: '',
				toPallet: '',
				toCarton: '',
				backPallet: '',
				backCarton: '',
				wmsTasks: [],
				i: 0,
				loading: false,
				quantity: '',
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
			}
		},
		computed: {
			i18n() {
				return this.$t('sampling')
			}
		},
	    mounted:function(){
	    		uni.setNavigationBarTitle({
	    		            title:this.$t('sampling').title
	    		        });
				this.$nextTick(() => {
							this.$refs.palletNo.focus()
						});
	    				},
		watch:{
		 palletNo:function (str) {
		        if (typeof str ==='string'){
		            if (str.trim().length!==0){
		                this.debounce(this.onChange,1000);
		            }else {}
		        }
		    },
		},
		methods: {
			onChange() {
	
				if (this.palletNo) {
					var _this = this;
	
					axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/WmsTask', {
							condition: {
								Status: { in: ["DISPATCHED", "WORKING"]
								},
								Type: { '=': "MV_CHECK_OUT"
								},
								Pallet: {
									'=': this.palletNo
								}
							},
							pageNumber: 1,
							pageSize: 500,
							queryType: 2,
							sort: {
								MaterialId: false
							}
						})
						.then(function(response) {
	
							_this.wmsTasks = response.data.data;
	
	
							if (_this.wmsTasks.length > 0) {
	
								var wmsTask = _this.wmsTasks[_this.i];
	
								_this.material =`${wmsTask.material.xCode} ${wmsTask.material.xName} ${wmsTask.material.spec}`;
	
								//_this.planPkgQuantity = wmsTask.planPkgQuantity;
	
								_this.number = _this.i + 1 + '/' + _this.wmsTasks.length;
	
								_this.quantity = wmsTask.planPkgQuantity;
								
								_this.packageUnit=wmsTask.packageUnit.pkgLevel;
								_this.str1=wmsTask.material.str1;
								_this.str2=wmsTask.material.str2;
								_this.str3=wmsTask.material.str3;
								_this.str4=wmsTask.material.str4;
								_this.str5=wmsTask.material.str5;
								_this.str6=wmsTask.material.str6;
								_this.str7=wmsTask.material.str7;
								_this.str8=wmsTask.material.str8;
								_this.str9=wmsTask.material.str9;
								_this.str10=wmsTask.material.str10;
								_this.batchNo=wmsTask.materialProperty.batchNo;
								_this.m_Str1=wmsTask.materialProperty.m_Str1;
								_this.m_Str2=wmsTask.materialProperty.m_Str2;
								_this.m_Str3=wmsTask.materialProperty.m_Str3;
								_this.m_Str4=wmsTask.materialProperty.m_Str4;
								_this.m_Str5=wmsTask.materialProperty.m_Str5;
								_this.m_Str6=wmsTask.materialProperty.m_Str6;
								_this.m_Str7=wmsTask.materialProperty.m_Str7;
								_this.m_Str8=wmsTask.materialProperty.m_Str8;
								_this.m_Str9=wmsTask.materialProperty.m_Str9;
								_this.m_Str10=wmsTask.materialProperty.m_Str10;
	
							}
	
	
						})
						.catch(function(error) { // 请求失败处理
	
							Toast({
								message: _this.$t('sampling').taskErrorMsg
							});
						});
				}
			},
	
			onClickLeft() {
	
				if (this.i > 0) {
					this.i = this.i - 1;
	
					var wmsTask = this.wmsTasks[this.i];
	
					this.material = `${wmsTask.material.xCode} ${wmsTask.material.xName} ${wmsTask.material.spec}`;
	
					//this.planPkgQuantity = wmsTask.planPkgQuantity;
	
					this.number = this.i + 1 + '/' + this.wmsTasks.length;
	
					this.quantity = wmsTask.planPkgQuantity;
					
					this.packageUnit=wmsTask.packageUnit.pkgLevel;
					this.str1=wmsTask.material.str1;
					this.str2=wmsTask.material.str2;
					this.str3=wmsTask.material.str3;
					this.str4=wmsTask.material.str4;
					this.str5=wmsTask.material.str5;
					this.str6=wmsTask.material.str6;
					this.str7=wmsTask.material.str7;
					this.str8=wmsTask.material.str8;
					this.str9=wmsTask.material.str9;
					this.str10=wmsTask.material.str10;
					this.batchNo=wmsTask.materialProperty.batchNo;
					this.m_Str1=wmsTask.materialProperty.m_Str1;
					this.m_Str2=wmsTask.materialProperty.m_Str2;
					this.m_Str3=wmsTask.materialProperty.m_Str3;
					this.m_Str4=wmsTask.materialProperty.m_Str4;
					this.m_Str5=wmsTask.materialProperty.m_Str5;
					this.m_Str6=wmsTask.materialProperty.m_Str6;
					this.m_Str7=wmsTask.materialProperty.m_Str7;
					this.m_Str8=wmsTask.materialProperty.m_Str8;
					this.m_Str9=wmsTask.materialProperty.m_Str9;
					this.m_Str10=wmsTask.materialProperty.m_Str10;
				}
	
			},
			onClickRight() {
	
				if (this.i < this.wmsTasks.length - 1) {
					this.i = this.i + 1;
	
					var wmsTask = this.wmsTasks[this.i];
	
					this.material = `${wmsTask.material.xCode} ${wmsTask.material.xName} ${wmsTask.material.spec}`;
	
					//this.planPkgQuantity = wmsTask.planPkgQuantity;
	
					this.number = this.i + 1 + '/' + this.wmsTasks.length;
	
					this.quantity = wmsTask.planPkgQuantity;
					
					this.packageUnit=wmsTask.packageUnit.pkgLevel;
					this.str1=wmsTask.material.str1;
					this.str2=wmsTask.material.str2;
					this.str3=wmsTask.material.str3;
					this.str4=wmsTask.material.str4;
					this.str5=wmsTask.material.str5;
					this.str6=wmsTask.material.str6;
					this.str7=wmsTask.material.str7;
					this.str8=wmsTask.material.str8;
					this.str9=wmsTask.material.str9;
					this.str10=wmsTask.material.str10;
					this.batchNo=wmsTask.materialProperty.batchNo;
					this.m_Str1=wmsTask.materialProperty.m_Str1;
					this.m_Str2=wmsTask.materialProperty.m_Str2;
					this.m_Str3=wmsTask.materialProperty.m_Str3;
					this.m_Str4=wmsTask.materialProperty.m_Str4;
					this.m_Str5=wmsTask.materialProperty.m_Str5;
					this.m_Str6=wmsTask.materialProperty.m_Str6;
					this.m_Str7=wmsTask.materialProperty.m_Str7;
					this.m_Str8=wmsTask.materialProperty.m_Str8;
					this.m_Str9=wmsTask.materialProperty.m_Str9;
					this.m_Str10=wmsTask.materialProperty.m_Str10;
				}
	
			},
			onSubmit() {
	
				this.loading = true;
				let _this = this;
				
				let movedPkgQty=this.planPkgQuantity==''?0:this.planPkgQuantity;
				
				axios.post(this.apiUrl.apiUrl + '/api/app/workDocManager/handleCheckOutTask', {
						TaskId: this.wmsTasks[this.i].id,
						MovedPkgQty: this.planPkgQuantity,
						ToPallet: this.toPallet,
						ToCarton: this.toCarton,
						BackPallet: this.backPallet,
						BackCarton: this.backCarton
					})
					.then(function(response) {
	
						_this.loading = false;
	
						if (response.data == true) {
	
							Toast({
								message: _this.$t('sampling').samplingSuccessMsg
							});
	
							_this.wmsTasks.splice(_this.i, 1);
	
							_this.i = 0;
	
							var wmsTask = _this.wmsTasks[_this.i];
	
							if (_this.wmsTasks.length > 0) {
								_this.material = `${wmsTask.material.xCode} ${wmsTask.material.xName} ${wmsTask.material.spec}`;
	
								_this.planPkgQuantity = wmsTask.planPkgQuantity;
								_this.number = _this.i + 1 + '/' + _this.wmsTasks.length;
	
								_this.quantity = wmsTask.planPkgQuantity;
								
								_this.packageUnit=wmsTask.packageUnit.pkgLevel;
								_this.str1=wmsTask.material.str1;
								_this.str2=wmsTask.material.str2;
								_this.str3=wmsTask.material.str3;
								_this.str4=wmsTask.material.str4;
								_this.str5=wmsTask.material.str5;
								_this.str6=wmsTask.material.str6;
								_this.str7=wmsTask.material.str7;
								_this.str8=wmsTask.material.str8;
								_this.str9=wmsTask.material.str9;
								_this.str10=wmsTask.material.str10;
								_this.batchNo=wmsTask.materialProperty.batchNo;
								_this.m_Str1=wmsTask.materialProperty.m_Str1;
								_this.m_Str2=wmsTask.materialProperty.m_Str2;
								_this.m_Str3=wmsTask.materialProperty.m_Str3;
								_this.m_Str4=wmsTask.materialProperty.m_Str4;
								_this.m_Str5=wmsTask.materialProperty.m_Str5;
								_this.m_Str6=wmsTask.materialProperty.m_Str6;
								_this.m_Str7=wmsTask.materialProperty.m_Str7;
								_this.m_Str8=wmsTask.materialProperty.m_Str8;
								_this.m_Str9=wmsTask.materialProperty.m_Str9;
								_this.m_Str10=wmsTask.materialProperty.m_Str10;
	
							} else {
								_this.material = "";
								_this.planPkgQuantity = "";
								_this.number = "0/0";
							}
	
						}
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message: _this.$t('sampling').samplingErrorMsg
						});
					});
			},
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    }
		},
	};
</script>

<style>
	::v-deep .van-ellipsis {
		white-space: normal !important;
		font-size: 12px !important;
	}
</style>
