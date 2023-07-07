<template>
	<van-form  style="margin: 3rem;">
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">	
	<van-cell-group  v-show='i18n.code[1]==1'>
		<van-field v-model="code" :label="i18n.code[0]" :rules="[{ required: true, message: i18n.codeMsg}]"
					required/>
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
				shipOrderId:'',
				loading:false,
				isLoading: false,
			}
		},
		computed: {
			i18n() {
				return this.$t('autoShip')
			}
		},
		onLoad:function() {
			this.mounted();
			let path = window.location.href.split("?");
			if(path.length>1)
			{
			    let parameter=path[1].split('&')			
				let code=parameter[0].split("=");
				
				if(parameter.length>1)
				{
					this.type=parameter[1].split("=")[1];
				}
				
				this.shipOrderId=code[1];
			}
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
				            title:this.$t('autoShip').title
				        });
			
			},
			onSubmit() {
				
				let _this=this;
	            
			if(!this.loading){
				
				this.loading = true;
				
				axios.post(this.apiUrl.apiUrl + '/api/app/autoOutboundManager/autoShipByInventory', {
						shipOrderId: this.shipOrderId,
						serialNo: this.code.substring(0,this.code.length-1).split(';'),
					})
					.then(function(response) {
						_this.loading = false;
							if(response.data==true)
							{
							Toast({
								message:  _this.$t('autoShip').autoShipSuccessMsg
							});
							_this.code='';
							}
	
					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message:_this.$t('autoShip').autoShipErrorMsg
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
					Toast(this.$t('autoShip').RefreshSuccesMsg);
			
					this.code='';
			
					this.isLoading = false;
				}, 1000);
			},
		}
	
	}
</script>

<style>
</style>
