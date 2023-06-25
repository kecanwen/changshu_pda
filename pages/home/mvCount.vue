<template>
	<form action="/">
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
	 <van-search v-model="code" :placeholder="i18n.code[0]"  v-show='i18n.code[1]==1'/>
		<van-list
		  v-model="loading"
		  :finished="finished"
		  :finished-text="i18n.more"
		   @load="onLoads"
		   :offset="130"
		>
		<van-swipe-cell v-for="item in mvCounts">
		  <van-card
		    :title="`${item.code}`"
		    class="goods-car"
			 @click="OnClick(item.code,item.id)"
		  />
		  <!-- <template #right>
		    <van-button square :text="i18n.rightDelete" type="danger" class="delete-button" @click="OnClick(item)"/>
		  </template> -->
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
				code: '',
				isLoading:false,
				loading:false,
				finished: false,
				mvCounts:[],
				page: 1
			}
		},
		computed: {
			i18n() {
				return this.$t('mvCount')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('mvCount').title			
				        });
						},
		watch:{		        
		 code:function (str) {
		        if (typeof str ==='string'){
		            if (str.trim().length!==0){
		                this.debounce(this.onChange,1000);
		            }else {}
		        }
		    },
		},
		methods: {
			getInfo(){
			let _this = this;
				
			let input={
						condition: {
							status:{'=':'ACTIVE'}
						},
							pageNumber: this.page,
							pageSize: 10,
							queryType: 2
						};
				
				if (this.code!="")
				{
					input.condition['code']={'=': this.code}
				}
				
			axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/moveDocMvCount', input)
					.then(function(response) {
						_this.loading=false;
						_this.mvCounts =_this.mvCounts.concat(response.data.data);
						_this.page++;
						
						if (response.data.data.length === 0) 
						{
						     _this.finished = true;
						}
						
						
					})
					.catch(function(error) { // 请求失败处理
				
						Toast({
							message:_this.$t('mvCount').mvCountErrorMsg
						});
						
						_this.loading=false;
						_this.finished = true;
						_this.isLoading=false;
						
					});
			},
			onLoads(){
				// this.palletNo='';
				//  this.receivedRecords=[];
				//  this.loading=false;
				 
				 //setTimeout(() => {
				         this.getInfo()
				         this.loading = true
				       //}, 500)
			},
			onChange(){
				this.isLoading = false;
				this.mvCounts=[];
				this.page=1;
				this.loading = false;
				this.finished = false;
				this.getInfo();
			},
			
			onRefresh() {
			     // 清空列表数据
				 setTimeout(() => {
				 	Toast(this.$t('mvCount').RefreshSuccesMsg);	
					this.code="";
					this.isLoading = false;
					this.mvCounts=[];
					this.page = 1;
					this.loading = false;
					this.finished = false;
					
				 	this.onLoads();
				 	
				 }, 500);
	
				 
			   },
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    },
				
		  OnClick(item,id)
		  {
			uni.navigateTo({
			                    url: '/pages/home/flatCounting?code='+item
			                }); 
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
