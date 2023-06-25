<template>
	<van-form style="margin: 3rem;">
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">	
	<van-cell-group  v-show='i18n.palletNo[1]==1'>
			<van-field v-model="palletNo" ref="palletNo" :label="i18n.palletNo[0]" :rules="[{ required: true, message: i18n.palletNoMsg}]" required>
			</van-field>
	</van-cell-group>
	<van-cell-group  v-show='i18n.code[1]==1'>
		<van-field v-model="code" :label="i18n.code[0]" :rules="[{ required: true, message: i18n.codeMsg}]" required/>
	</van-cell-group>
	
	<van-cell-group  v-show='i18n.result[1]==1'>
		<van-field v-model="result" rows="2" type="textarea"  autosize :label="i18n.result[0]" readonly/>
	</van-cell-group>
	
	<!-- <div style="margin: 2rem;">
		<van-button :loading="loading" round block type="info" native-type="submit">
			{{i18n.submit}}
		</van-button>
	</div> -->
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
				palletNo: '',
				code:'',
				loading:false,
				result:'',
				isLoading: false,
			}
		},
		computed: {
			i18n() {
				return this.$t('flatGroupDisk')
			}
		},
	    mounted:function(){
	    		uni.setNavigationBarTitle({
	    		            title:this.$t('flatGroupDisk').title
	    		        });
				this.$nextTick(() => {
							this.$refs.palletNo.focus()
						});
	    				},
		watch:{
		code: function (str) {
		        if (typeof str ==='string'){
		            if (str.trim().length!==0){
		                this.debounce(this.onSubmit,1000);
		            }else {}
		        }
				},
		},
		methods: {
			onSubmit() {
				this.loading = true;
				
				this.result="";
				
				if(this.palletNo=="")
				{
					this.loading = false;
					// Toast({
					// 	message: _this.$t('flatGroupDisk').palletNoMsg
					// });
					_this.code = "";
					this.result=this.$t('flatGroupDisk').palletNoMsg;
					return;
				}
				var _this = this;
				axios.post(this.apiUrl.apiUrl + '/api/app/inventoryManager/bindPalletBySerialNo',{
					pallet:this.palletNo,
					serialNo:this.code
				})
					.then(function(response) {
	
						_this.loading = false;
					    
	
						if(response.data==0)
						{
							_this.result=_this.$t('flatGroupDisk').resultError+";条码:"+_this.code;
						}else if(response.data>0)
						{
							_this.result=_this.$t('flatGroupDisk').flatGroupDiskSuccessMsg	+"; 条码:"+_this.code
							
						}
						
						_this.code = "";

					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						// Toast({
						// 	message: _this.$t('flatGroupDisk').flatGroupDiskErrorMsg
						// });
						
						_this.result=_this.$t('flatGroupDisk').flatGroupDiskErrorMsg+"; 条码:"+_this.code	;
						_this.code = "";
					});
			},

		onRefresh() {
		
			setTimeout(() => {
				Toast(this.$t('flatReceipt').RefreshSuccesMsg);
				
				this.code = "";
				this.palletNo="";
				this.result="";
		
				this.isLoading = false;
			}, 1000);
		},
		debounce:function(fn,wait){
		        if (this.fun!==null){
		            clearTimeout(this.fun)
		        }
		        this.fun = setTimeout(fn,wait)
		    },
		},
	}
</script>

<style>
</style>
