<template>
	<form action="/">
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
   <van-search v-model="palletNo" :placeholder="i18n.palletNo[0]"  v-show='i18n.palletNo[1]==1'/>
	<van-list
	  v-model="loading"
	  :finished="finished"
	  :finished-text="i18n.more"
	   @load="onLoads"
	>
	<van-swipe-cell v-for="item in receivedRecords" :before-close="beforeClose">
	  <van-card
	    :desc="`${item.material.xCode} ${item.material.xName} ${item.material.spec==null?'':item.material.spec} ${item.materialProperty.batchNo} `"
	    :title="`${item.receiptOrder.xCode}`"
	    class="goods-car"
		:num="`${item.receivedPkgQuantity} ${item.packageUnit.pkgLevel}`"
	  />
	  <template #right>
	    <van-button square :text="i18n.rightDelete" type="danger" class="delete-button" @click="OnClick(item)"/>
	  </template>
	</van-swipe-cell>
	</van-list>
	</van-pull-refresh>
	</form>
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
	import { Dialog } from 'vant';
	
	export default {
		components: {
			'van-select': select
		},
		data() {
			return {
				palletNo: '',
				code: '',
				isLoading:false,
				loading:false,
				finished: false,
				receivedRecords:[],
				receivedRecord:'',
				count:0,
			}
		},
		computed: {
			i18n() {
				return this.$t('cancelReceive')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('cancelReceive').title			
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
			getInfo(){
				var _this = this;
				
				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/receivedRecord', {
						condition: {
							pallet: { '=': this.palletNo},
							isCreateMovedoc:{'=':'N'}
						},
						pageNumber: 1,
						pageSize: 500,
						queryType: 0
					})
					.then(function(response) {
						_this.receivedRecords = response.data.data;
						
						_this.loading=false;
						_this.finished = true;
						
					})
					.catch(function(error) { // 请求失败处理
				
						Toast({
							message:_this.$t('cancelReceive').receivedRecordMsg
						});
						
						_this.loading=false;
						_this.finished = true;
						
					});
			},
			onLoads(){
				this.palletNo='';
				 this.receivedRecords=[];
				 this.loading=false;
			},
			onChange(){
				 this.getInfo();
			},
			
			onRefresh() {
			     // 清空列表数据
				 setTimeout(() => {
				 	Toast(this.$t('cancelReceive').RefreshSuccesMsg);	
					this.isLoading = false;
					this.finished = true;
					 this.page = 1;
				 	this.onLoads();
				 	
				 }, 1000);

				 
			   },
			   OnClick(item){
				   this.receivedRecord=item;
			   },
			     beforeClose({ position, instance}) {
			         switch (position) {
			           case 'left':
			           case 'cell':
			           case 'outside':
			             instance.close();
			             break;
			           case 'right':
			             Dialog.confirm({
			               message: this.$t('cancelReceive').confirmMsg,
			             }).then(() => {
							 
						let _this=this;
						
							
							axios.post(this.apiUrl.apiUrl + `/api/app/inboundManager/CacelReceive/${_this.receivedRecord.id}`)
								.then(function(response) {
									if(response.data==true)
									{
									    Toast({
									    	message:_this.$t('cancelReceive').cancelReceiveSuccessMsg
									    });	
										
										instance.close();
									let index=_this.receivedRecords.findIndex(i=>{if(i==_this.receivedRecord){return true}});
									_this.receivedRecords.splice(index,1);
										
									}

								})
								.catch(function(error) { // 请求失败处理
							
									Toast({
										message:_this.$t('cancelReceive').cancelReceiveErrorMsg
									});
									
								});
			               
			             });
			             break;
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
	.van-pull-refresh{
		overflow:auto;
	}
	.goods-card {
	    margin: 0;
	    background-color: @white;
	  }
	
	  .delete-button {
	    height: 100%;
	  }
</style>
