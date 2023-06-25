<template>
	<van-form  style="margin: 3rem;">
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">	
	<van-cell-group  v-show='i18n.code[1]==1'>
		<van-field v-model="code" :label="i18n.code[0]" :rules="[{ required: true, message: i18n.codeMsg}]"
					required/>
		
	</van-cell-group>
	
	<van-cell-group v-show='i18n.toLocCode[1]==1'>
		<van-field v-model="toLocCode" :label="i18n.toLocCode[0]" :rules="[{ required: true, message: i18n.toLocCodeMsg }]"
		 required />
	</van-cell-group>
	
	<div style="margin: 50px;">
				<van-button :loading="loading" round block type="info" @click="onSubmit">
					{{i18n.submit}}
				</van-button>
			</div>
		</van-pull-refresh>
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
				code:'',
				toLocCode:'',
				loading:false,
				isLoading: false,
			}
		},
		computed: {
			i18n() {
				return this.$t('relocation')
			}
		},
		onLoad:function() {
			this.mounted();
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
				            title:this.$t('relocation').title
				        });
			
			},
			onSubmit() {
				
				let _this=this;
	            
			if(!this.loading){
				
				this.loading = true;
				
				axios.post(this.apiUrl.apiUrl + '/api/app/inventoryManager/moveInventoryBySerialNo', {
						toLocCode: this.toLocCode,
						serialNos: this.code.substring(0,this.code.length-1).split(';'),
					})
					.then(function(response) {
						_this.loading = false;
							if(response.data>0)
							{
							Toast({
								message:  _this.$t('relocation').relocationSuccessMsg
							});
							_this.code='';
							}else if(response.data==0)
							{
								Toast({
									message:  _this.$t('relocation').serialNoErrorMsg
								});
							}
	
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message:_this.$t('relocation').relocationErrorMsg
						});
					});
				}
			},
			
			codeChange(){
			
			let code=this.code;
			
			if(this.code.charAt(this.code.length-1)==";")
			{
				return;
			}
			
			if(this.code.charAt(this.code.length-1)!=";")
			{
			this.code=this.code+";"
			}
			},
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    },
			onRefresh() {
			
				setTimeout(() => {
					Toast(this.$t('relocation').RefreshSuccesMsg);
			
					this.code='';
			
					this.isLoading = false;
				}, 1000);
			},
		}
	
	}
</script>

<style>
</style>
